<?php

namespace App\Http\Controllers\Api\FinanceCat;

use App\CusstomPHP\Response;
use App\CusstomPHP\Tables;
use App\CusstomPHP\Time;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class FinanceCatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $finance_cat = \DB::table(Tables::$tb_finance_cat)->get();
        return Response::json_return($finance_cat, true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Add new product
        try {
            //Get all columns table product
            $fields = Tables::getColumns(Tables::$tb_finance_cat);
            $data = array();
            //Get all fled submit form
            foreach ($fields as $item) {
                if ($request->exists($item)) {
                    $data[$item] = $request->get($item);
                }
            }
            //Update time product
            $data['create_at'] = Time::now();
            $data['update_at'] = Time::now();

            //Insert product
            $id_finance_cat = \DB::table(Tables::$tb_finance_cat)->insertGetId($data);

            \DB::table(Tables::$tb_finance_cat)->where('id', '=', $id_finance_cat)->update([
                'code' => 'TK' . $id_finance_cat
            ]);
            $finance_cat = \DB::table(Tables::$tb_finance_cat)->where('id', '=', $id_finance_cat)->first();

            return Response::json_return($finance_cat, true);

        } catch (\Exception $ex) {
            return Response::json_return($ex->getMessage(), false);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $finance_cat = \DB::table(Tables::$tb_finance_cat)->where('id', '=', $id)->first();
        return Response::json_return($finance_cat, true);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //Update product
        try {
            //Get all columns table product
            $fields = Tables::getColumns(Tables::$tb_finance_cat);
            $data = array();
            //Get all fled submit form
            foreach ($fields as $item) {
                if ($request->exists($item)) {
                    $data[$item] = $request->get($item);
                }
            }
            //Update time product
            $data['update_at'] = Time::now();

            //Update product
            if (\DB::table(Tables::$tb_products)->where('id', '=', $id)->update($data)) {
                return Response::json_return(null, true);
            } else {
                return Response::json_return(null, false);
            }

        } catch (\Exception $ex) {
            return Response::json_return($ex->getMessage(), false);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //delete product
        try {
            if (\DB::table(Tables::$tb_finance_cat)->where('id', '=', $id)->delete()) {
                return Response::json_return(null, true);
            } else {
                return Response::json_return(null, false);
            }
        } catch (\Exception $ex) {
            return Response::json_return($ex->getMessage(), false);
        }
    }
}
