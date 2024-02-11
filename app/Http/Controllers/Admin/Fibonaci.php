<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Fibonaci extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Fibonaci/Index');
    }

    public function penjumlahanFibonaci()
    {
        $n1 = request('n1');
        $n2 = request('n2');

        $sum = $this->pertambahanFibonaci($n1, $n2);

        return response()->json(['result' => $sum]);
    }

    private function pertambahanFibonaci($n1, $n2)
    {
        $fibonacciN1 = $this->fibonacci($n1);
        $fibonacciN2 = $this->fibonacci($n2);

        return $fibonacciN1 + $fibonacciN2;
    }

    private function fibonacci($n)
    {
        if ($n <= 1) {
            return $n;
        }

        return $this->fibonacci($n - 1) + $this->fibonacci($n - 2);
    }
}
