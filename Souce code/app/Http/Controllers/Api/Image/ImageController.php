<?php

namespace App\Http\Controllers\Api\Image;

use App\CusstomPHP\Response;
use App\CusstomPHP\Tables;
use App\CusstomPHP\Time;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Image;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        try{
            $file = $request->file('image');
            $base_64=Image::make($file)->encode('data-url');
            $data=[
                'success'=>true,
                'data'=>$base_64
            ];
            return \response(json_encode($data),200);
        }catch (\Exception $ex){
            $data=[
                'success'=>false,
                'data'=>$ex->getMessage()
            ];
            return \response(json_encode($data),200);
        }
    }

    public function get(Request $request)
    {
        try{
            $file="";
            if($request->exists('image')){
                $file = $request->file('image');
            }else{
                $file="public/images/products/".$request->get('code').'.png';
            }
            $base_64=Image::make($file)->resize(100,100)->encode('data-url');
            return Response::json_return($base_64,true);
        }catch (\Exception $ex){
            return Response::json_return($ex->getMessage(),false);
        }
    }

}
