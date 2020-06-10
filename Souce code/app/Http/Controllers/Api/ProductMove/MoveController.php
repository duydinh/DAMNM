<?php

namespace App\Http\Controllers\Api\ProductMove;

use App\CusstomPHP\Response;
use App\CusstomPHP\Tables;
use App\CusstomPHP\Time;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class MoveController extends Controller
{
    //Move products from A to B
    public function store(Request $request)
    {
        \DB::beginTransaction();
        //Add new invoice
        try {
            //Get all columns table invoice
            $fields = Tables::getColumns(Tables::$tb_invoices);
            $data = array();
            //Get all fled submit form
            foreach ($fields as $item) {
                if ($request->exists($item)) {
                    $data[$item] = $request->get($item);
                }
            }
            //Update time invoice
            $data['create_at'] = Time::now();
            $data['update_at'] = Time::now();
            $data['state'] = 'SUCCESS';

            //Create QR code
            $code = '';
            do {
                $code = str_random(8);
                $code = $data['code'] . strtoupper($code);
            } while (\DB::table(Tables::$tb_invoices)->where('code', 'LIKE', $code)->exists());
            $data['code'] = $code;

            //Insert invoice
            $id_invoice = \DB::table(Tables::$tb_invoices)->insertGetId($data);
            $invoice = \DB::table(Tables::$tb_invoices)->where('id', '=', $id_invoice)->first();

            $customer_sent = \DB::table(Tables::$tb_branch)->where('code', 'LIKE', $invoice->branch)->first();
            $list_products = json_decode($invoice->products);
            //Trừ số lượng sản phẩm bên gửi
            foreach ($list_products as $item) {
                //Trừ số lượng trong product_list bên gửi
                \DB::table(Tables::$tb_products_list)->where([
                    ['code', 'LIKE', $item->code],
                    ['branch', 'LIKE', $invoice->branch]
                ])->decrement('number', $item->number);
                //Tăng số lượng trong product_list bên nhận
                if (\DB::table(Tables::$tb_products_list)->where([['code', 'LIKE', $item->code], ['branch', 'LIKE', $invoice->customer]])->exists()) {
                    \DB::table(Tables::$tb_products_list)->where([
                        ['code', 'LIKE', $item->code],
                        ['branch', 'LIKE', $invoice->customer]
                    ])->increment('number', $item->number);
                } else {
                    //Thêm sản phẩm bên nhận
                    //Lấy thông tin trước
                    $product_a = \DB::table(Tables::$tb_products_list)->where([
                        ['code', 'LIKE', $item->code],
                        ['branch', 'LIKE', $invoice->branch]
                    ])->first();
                    //Cài số lượng mặc định
                    $product_a->number = $item->number;
                    $product_a->branch = $invoice->customer;
                    $product_a->create_at = Time::now();
                    $product_a->update_at = Time::now();

                    $fields_a = Tables::getColumns(Tables::$tb_products_list);
                    $data_a = array();
                    //Get all fled submit form
                    foreach ($fields_a as $item_a) {
                        $data_a[$item_a] = $product_a->$item_a;
                    }
                    unset($data_a['id']);
                    //Thêm vào bên b
                    \DB::table(Tables::$tb_products_list)->insert($data_a);
                }

            }
            //Cập nhật bản ghi logs
            foreach ($list_products as $item) {
                //Bản log bên gửi
                \DB::table(Tables::$tb_product_logs)->insert([
                    'invoice' => $invoice->code,
                    'product_list' => $item->code,
                    'type' => $invoice->type,
                    'branch' => $invoice->branch,
                    'customer' => $invoice->customer,
                    'customer_name' => $invoice->customer_name,
                    'number' => -($item->number),
                    'price' => 0, //'price'=>$item->price,
                    'price_import' => 0, //'price'=>$item->price,
                    'finance_cat' => $invoice->finance_cat,
                    'create_at' => Time::Datenow(),
                ]);
                //Bản log bên nhận
                \DB::table(Tables::$tb_product_logs)->insert([
                    'invoice' => $invoice->code,
                    'product_list' => $item->code,
                    'type' => $invoice->type,
                    'branch' => $invoice->customer,
                    'customer' => $customer_sent->code,
                    'customer_name' => $customer_sent->name,
                    'number' => ($item->number),
                    'price' => 0,
                    'price_import' => 0,
                    'finance_cat' => $invoice->finance_cat,
                    'create_at' => Time::Datenow(),
                ]);
            }
            \DB::commit();
            return Response::json_return($invoice, true);
        } catch (\Exception $ex) {
            \DB::rollBack();
            return Response::json_return($ex->getLine(), false);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        \DB::beginTransaction();
        //Delete invoice
        try {
            //get invoice
            $invoice=\DB::table(Tables::$tb_invoices)->where('id','=',$id)->first();
            //Delete invoice
            \DB::table(Tables::$tb_invoices)->where('id','=',$id)->delete();
            //delete product logs
            \DB::table(Tables::$tb_product_logs)->where('invoice','LIKE',$invoice->code)->delete();

            \DB::commit();
            return Response::json_return(null,true);
        } catch (\Exception $ex) {
            \DB::rollBack();
            return Response::json_return($ex->getMessage(),false);
        }
    }
}
