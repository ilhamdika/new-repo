<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Transaction_header;
use App\Models\Transaction_detail;
use App\Models\Ms_category;

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

    public function editDataTransaksi($id)
    {
        $transactionDetail = Transaction_detail::where('id', $id)->get();
        $category = Ms_category::all();
        return Inertia::render('Admin/Transaksi/Edit', [
            'transactionDetail' => $transactionDetail,
            'category' => $category
        ]);
    }

    public function updateDataTransaksi(Request $request, $id)
    {
        // return $request->all();
        // die();
        $transactionDetail = Transaction_detail::find($id);
        $transactionDetail->update([
            'name' => $request->input('name'),
            'value' => $request->input('value'),
            'ms_category_id' => $request->input('ms_category_id')
        ]);

        return Inertia::location(route('admin.dashboard.list_transaksi'));
    }

    public function editDataTransaksiAll($id)
    {
        $transactionDetail = Transaction_detail::where('transaction_header_id', $id)->get();
        $transactionHeader = Transaction_header::find($id);
        $category = Ms_category::all();
        return Inertia::render('Admin/Transaksi/Edit1', [
            'transactionDetail' => $transactionDetail,
            'transactionHeader' => $transactionHeader,
            'category' => $category
        ]);
    }

    public function listTransaksi()
    {
        $listTransaksi = Transaction_detail::with('transaction_header', 'ms_category')->paginate(10);
        return Inertia::render('Admin/Transaksi/ListData', [
            'listTransaksi' => $listTransaksi,
        ]);
    }

    public function rekapTransaksi()
    {
        return Inertia::render('Admin/Transaksi/Rekap');
    }
}
