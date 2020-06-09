<?php

namespace App\Http\Controllers\Api\Sale;

use App\CusstomPHP\Response;
use App\CusstomPHP\Tables;
use App\CusstomPHP\Time;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Routing\Controller;

class SaleController extends Controller {
	public function store( Request $request ) {
		\DB::beginTransaction();
		//Thêm hóa đơn mới
		try {
			//Lấy tất cả các trường của hóa đơn
			$fields = Tables::getColumns( Tables::$tb_invoices );
			$data   = array();
			foreach ( $fields as $item ) {
				if ( $request->exists( $item ) ) {
					$data[ $item ] = $request->get( $item );
				}
			}

			//Cập nhật thời gian
			$data['create_at'] = Time::now();
			$data['update_at'] = Time::now();

			//Tạo mã hóa đơn
			$today_max = \DB::table( Tables::$tb_invoices )->where( 'create_at', 'LIKE', '%' . Time::Datenow() )->count();
			$code      = $data['code'] . Time::DatenowCODE() . $today_max;
			$data['code'] = $code;

			//Thêm hóa đơn vào bảng hóa đơn
			$id_invoice = \DB::table( Tables::$tb_invoices )->insertGetId( $data );
			$invoice    = \DB::table( Tables::$tb_invoices )->where( 'id', '=', $id_invoice )->first();


			if ( SaleController::updateProduct( $invoice ) ) {
				//Add point customer
				SaleController::checkPoint( $invoice );

				\DB::commit();

				//Trả về thông tin hóa đơn
				return Response::json_return( $invoice, true );
			} else {
				return Response::json_return( null, false );
			}
		} catch ( \Exception $ex ) {
			\DB::rollBack();

			return Response::json_return( $ex->getMessage(), false );
		}
	}

	public static function updateProduct( $invoice ) {
		\DB::beginTransaction();
		try {
			//Lưu thông tin hàng mua
			$products_pay = json_decode( $invoice->products );
			foreach ( $products_pay as $item ) {
				$sanpham_goc = \DB::table( Tables::$tb_products_list )->where( [
					[ 'code', 'LIKE', $item->code ],
					[ 'branch', 'LIKE', $invoice->branch ]
				] )->first();

				//Cập nhật bản ghi logs
				\DB::table( Tables::$tb_product_logs )->insert( [
					'invoice'       => $invoice->code,
					'product_list'  => $item->code,
					'type'          => $invoice->type,
					'branch'        => $invoice->branch,
					'customer'      => $invoice->customer,
					'customer_name' => $invoice->customer_name,
					'number'        => - ( $item->number ),
					'price'         => $item->price,
					'price_import'  => intval( $sanpham_goc->price_import ) * intval( $item->number ),
					'finance_cat'   => $invoice->finance_cat,
					'create_at'     => Time::Datenow(),
				] );

				//Trừ số lượng trong product_list
				\DB::table( Tables::$tb_products_list )
				   ->where( 'id', '=', $sanpham_goc->id )
				   ->decrement( 'number', $item->number );
			}
			// tính tiền nợ cho khách
		/*	$debt = intval( $invoice->total_price ) - intval( $invoice->discount ) + intval( $invoice->other_price ) - intval( $invoice->total_pay );
			\DB::table( Tables::$tb_customer )->where( 'code', 'LIKE', $invoice->customer )
			   ->increment( "debt", $debt );*/
			//Tính tiền mua hàng
			\DB::table( Tables::$tb_customer )->where( 'code', 'LIKE', $invoice->customer )
			   ->increment( "price", $invoice->total_price );
			//Lượt mua hàng
		/*	\DB::table( Tables::$tb_customer )->where( 'code', 'LIKE', $invoice->customer )
			   ->increment( "hit", 1 );
			\DB::commit();*/

			return true;
		} catch ( \Exception $exception ) {
			\DB::rollBack();

			return false;
		}
	}

	//Check point to customer
/*	public static function checkPoint( $invoice ) {
		//get settting check point
		$setting = \DB::table( Tables::$tb_setting )->where( [
			'name'   => 'settings',
			'branch' => $invoice->branch
		] )->first( [ 'value' ] );
		$setting = json_decode( $setting->value );
		//Check auto check point
		if ( $setting->auto_check_point ) {
			//Calculate point
			$new_point = intval( $invoice->total_price / 100 * intval( $setting->percent_default ) / intval( $setting->point_to_price ) );
			//Check have customer?
			if ( $invoice->customer != '' ) {
				if ( \DB::table( Tables::$tb_customer )
				        ->where( 'code', 'LIKE', $invoice->customer )->exists() ) {
					\DB::table( Tables::$tb_customer )
					   ->where( 'code', 'LIKE', $invoice->customer )->increment( 'point', $new_point );
				}
			}
		}
	}*/
}