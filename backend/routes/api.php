<?php

use App\Http\Controllers\Admin\CategoriesController;
use App\Http\Controllers\Admin\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/categories/list',[CategoriesController::class,'index']);

Route::get('/products/list',[ProductsController::class,'index']);
Route::post('/products/store',[ProductsController::class,'store']);
Route::get('/products/edit/{id}',[ProductsController::class,'edit']);
Route::post('/products/update/{id}',[ProductsController::class,'update']);
Route::get('/products/delete/{id}',[ProductsController::class,'delete']);