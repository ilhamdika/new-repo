<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction_header extends Model
{
    use HasFactory;

    protected $table = 'transaction_headers';
    protected $fillable = ['description', 'code', 'rate_euro', 'date_paid'];

    public function transaction_details()
    {
        return $this->hasMany(Transaction_detail::class);
    }
}
