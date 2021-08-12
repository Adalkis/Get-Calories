<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class foodTable extends Model
{
    use HasFactory;

    protected $fillable =[
        'name',
        'serving_size',
        'calories'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d', 
    ];
}
