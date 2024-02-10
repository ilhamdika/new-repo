<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction_detail extends Model
{
    use HasFactory;

    protected $table = 'transaction_details';
    protected $fillable = ['transaction_header_id', 'ms_category_id', 'name', 'value'];

    public function transaction_header()
    {
        return $this->belongsTo(Transaction_header::class);
    }

    public function ms_category()
    {
        return $this->belongsTo(Ms_category::class);
    }
}
