<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\foodTable;
use Carbon\Carbon;

class foodController extends Controller
{
    public function store(Request $request){
      $food = new foodTable;
      $food->name=$request->input('name');
      $food->serving_size=$request->input('serving_size');
      $food->calories=$request->input('calories');
      $food->save();
      return response()->json($food);
       
    }

    public function index(){
       
       
        $food = foodTable::all();
        if(count($food)==0){
            return 'No data found';
        }else{
            return $food;

        }
        
    }
    
    public function destroy($id){
        $food = foodTable::find($id);
        $food->delete();
        return response()->json('Deleted');
    }

  

}
