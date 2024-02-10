<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ms_category extends Model
{
    use HasFactory;

    protected $table = 'ms_categories';
    protected $fillable = ['name'];

    public function transaction_details()
    {
        return $this->hasMany(Transaction_detail::class);
    }
}
