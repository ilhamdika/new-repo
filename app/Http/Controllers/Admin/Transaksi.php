<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Transaction_header;
use App\Models\Transaction_detail;

class Transaksi extends Controller
{
    public function tambahDataTransaksi()
    {
        return Inertia::render('Admin/Transaksi/Tambah');
    }

    public function storeDataTransaksi(Request $request)
    {
        $title = $request->input('title');
        $formInputs = $request->input('formInputs');
        $formInputs2 = $request->input('formInputs2');
        $category_id = $request->input('category_id');
        $category_id2 = $request->input('category_id2');


        $transactionHeader = Transaction_header::create([
            'description' => $title['description'],
            'code' => $title['code'],
            'rate_euro' => $title['rate_euro'],
            'date_paid' => $title['date_paid'],
        ]);

        foreach ($formInputs as $input) {
            Transaction_detail::create([
                'transaction_header_id' => $transactionHeader->id,
                'name' => $input['nama_transaksi'],
                'value' => $input['nominal_idr'],
                'ms_category_id' => $category_id,
            ]);
        }

        foreach ($formInputs2 as $input) {
            Transaction_detail::create([
                'transaction_header_id' => $transactionHeader->id,
                'name' => $input['nama_transaksi'],
                'value' => $input['nominal_idr'],
                'ms_category_id' => $category_id2,
            ]);
        }

        // return response()->json([
        //     'transactionHeader' => $transactionHeader,
        //     'formInputs' => $formInputs,
        //     'formInputs2' => $formInputs2
        // ]);
    }


    public function editDataTransaksi()
    {
        return Inertia::render('Admin/Transaksi/Edit');
    }

    public function listTransaksi()
    {
        return Inertia::render('Admin/Transaksi/ListData');
    }

    public function rekapTransaksi()
    {
        return Inertia::render('Admin/Transaksi/Rekap');
    }
}
