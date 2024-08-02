<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class ProductsController extends Controller
{
    public function index()
    {
        $data = DB::table('products')->get();
        return Response()->json($data);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'category' => 'required',
            'price' => 'required',
            'keywords' => 'required',
            'stock' => 'required',
            'status' => 'required',
        ], []);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()->toArray()]);
        } else {
            $date = date('Y-m-d H:i:s');
                $data = [
                    'name'=>$request->name,
                    'category_id'=>$request->category,
                    'price'=>$request->price,
                    'keywords'=>$request->keywords,
                    'stock'=>$request->stock,
                    'status'=>$request->status,
                    'created_at'=>$date,
                    'updated_at'=>$date
                ];
                DB::table('products')->insert($data);
            
       return response()->json(['status'=>'success','message'=>'Product Has Been Inserted...']);
    }
    
}


}
