<?php

namespace App\Http\Controllers\Api\ProductImport;

use App\CusstomPHP\Response;
use App\CusstomPHP\Tables;
use App\CusstomPHP\Time;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ReturnController extends Controller
{
    //Add new return
    public function store(Request $request)
    {
        \DB::beginTransaction();
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

            //Tạo mã hóa đơn ngẫu nhiên
            $code = '';
            do {
                $code = str_random(8);
                $code = $data['code'] . strtoupper($code);
            } while (\DB::table(Tables::$tb_invoices)->where('code', '=', $code)->exists());
            $data['code'] = $code;

            //Thêm hóa đơn vào bảng hóa đơn
            $id_invoice = \DB::table(Tables::$tb_invoices)->insertGetId($data);
            $invoice = \DB::table(Tables::$tb_invoices)->where('id', '=', $id_invoice)->first();


            //Giải mã các sản phẩm được gửi lên
            $list_products = json_decode($invoice->products);
            if ($invoice->state == 'SUCCESS') {
                //Trừ số lượng sản phẩm
                foreach ($list_products as $item) {
                    //Trừ số lượng trong product_list
                    \DB::table(Tables::$tb_products_list)
                        ->where([
                            ['code', 'LIKE', $item->code],
                            ['branch', 'LIKE', $invoice->branch]
                        ])
                        ->decrement('number', $item->number);
                }
                //Cập nhật bản ghi logs
                foreach ($list_products as $item) {
                    //Lấy giá nhập
                    $sanpham_goc = \DB::table(Tables::$tb_products_list)->where([
                        ['code', 'LIKE', $item->code],
                        ['branch', 'LIKE', $invoice->branch]
                    ])->first();
                    \DB::table(Tables::$tb_product_logs)->insert([
                        'invoice' => $invoice->code,
                        'product_list' => $item->code,
                        'type' => $invoice->type,
                        'branch' => $invoice->branch,
                        'customer' => $invoice->customer,
                        'customer_name' => $invoice->customer_name,
                        'number' => -($item->number),
                        'price' => $item->price,
                        'price_import' => intval($sanpham_goc->price_import) * intval($item->number),
                        'finance_cat' => $invoice->finance_cat,
                        'create_at' => Time::Datenow(),
                    ]);
                }
            }

            //Trả về thông tin hóa đơn
            \DB::commit();
            return Response::json_return($invoice, true);
        } catch (\Exception $ex) {
            \DB::rollBack();
            return Response::json_return($ex->getMessage(), false);
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