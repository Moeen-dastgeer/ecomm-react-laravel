<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class ProductsController extends Controller
{
    public function index(Request $request)
    {   
        $data = DB::table('products')->paginate(8);
        return Response()->json($data);
    
    }

    public function store(Request $request)
    {
        // return response()->json(['status'=>'success','message'=>$request->image]);
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'category' => 'required',
            'price' => 'required',
            'keywords' => 'required',
            'stock' => 'required',
            'status' => 'required',
            'image' => 'required',
        ], []);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()->toArray()]);
        } else {
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $orginalImageName = $file->getClientOriginalName();
                $newImgName = Str::slug(date('YmdHis') . '-' . $orginalImageName) . '.' . $file->extension();
                $file->storeAs('public/images/products', $newImgName);
            }
            $date = date('Y-m-d H:i:s');
                $data = [
                    'name'=>$request->name,
                    'category_id'=>$request->category,
                    'price'=>$request->price,
                    'image'=>$newImgName,
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

public function edit($id)
{
    $data = DB::table('products')->where('id',$id)->first();
    return response()->json($data);
}

public function update(Request $request,$id)
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

        $product = DB::table('products')->where('id',$id)->first();
                if ($request->hasFile('image')) {

                    if (File::exists("assets/images/products/" . $product->image)) {

                        File::delete("assets/images/products/" . $product->image);
                    }
                    $file = $request->file('image');
                    $orginalImageName = $file->getClientOriginalName();
                    $newImgName = Str::slug(date('YmdHis') . '-' . $orginalImageName) . '.' . $file->extension();
                    $file->storeAs('public/images/products', $newImgName);
                    $req['image'] = $newImgName;
                } else {
                    $newImgName = $product->image;
                }
        $date = date('Y-m-d H:i:s');
            $data = [
                'name'=>$request->name,
                'category_id'=>$request->category,
                'price'=>$request->price,
                'image'=>$newImgName,
                'keywords'=>$request->keywords,
                'stock'=>$request->stock,
                'status'=>$request->status,
                'updated_at'=>$date
            ];
            DB::table('products')->where('id',$id)->update($data);
        
   return response()->json(['status'=>'success','message'=>'Product Has Been Updated...']);
}

}

public function delete($id)
{
    DB::table('products')->where('id',$id)->delete();
    return response()->json(['status'=>'success','message'=>'Product Has Been Deleted....']);
}


}
