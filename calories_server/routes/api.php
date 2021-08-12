<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\foodController;
use App\Http\Controllers\authController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('api')->group(function(){
    Route::resource('food', foodController::class);
    
  
  
});
Route::middleware('auth:sanctum')->group(function(){
    Route::get('user', [authController::class, 'user']);
    Route::post('logout', [authController::class, 'logout']);

});
Route::post('register', [authController::class,'register']);
Route::post('login', [authController::class,'login']);

