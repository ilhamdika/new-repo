<?php

use App\Http\Controllers\Admin\Dashboard;
use App\Http\Controllers\Admin\Transaksi;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:admin'])->prefix('dashboard')->name('admin.dashboard.')->group(function () {
    Route::get('/admin', [Dashboard::class, 'index'])->name('index');
    Route::get('/tambah-data-transaksi', [Transaksi::class, 'tambahDataTransaksi'])->name('tambah_data_transaksi');
    Route::post('/tambah-data-transaksi', [Transaksi::class, 'storeDataTransaksi'])->name('store_data_transaksi');

    Route::get('/edit-data-transaksi/{id}', [Transaksi::class, 'editDataTransaksi'])->name('edit_data_transaksi');
    Route::put('/edit-data-transaksi/{id}', [Transaksi::class, 'updateDataTransaksi'])->name('update_data_transaksi');

    Route::get('/list-transaksi', [Transaksi::class, 'listTransaksi'])->name('list_transaksi');
    Route::get('/rekap-transaksi', [Transaksi::class, 'rekapTransaksi'])->name('rekap_transaksi');
});

Route::prefix('prototype')->group(function () {
    route::get('/admin', function () {
        return Inertia::render('Prototype/Admin/Index');
    })->name('prototype.admin');

    route::get('/tambah-data-transaksi', function () {
        return Inertia::render('Prototype/DataTransaksi/Tambah');
    })->name('prototype.tambah_data_transaksi');

    route::get('/edit-data-transaksi', function () {
        return Inertia::render('Prototype/DataTransaksi/Edit');
    })->name('prototype.edit_data_transaksi');

    route::get('/list-transaksi', function () {
        return Inertia::render('Prototype/DataTransaksi/Index');
    })->name('prototype.list_transaksi');

    route::get('rekap-transaksi', function () {
        return Inertia::render('Prototype/RekapTransaksi/Index');
    })->name('prototype.rekap_transaksi');

    route::get('/data-transaksi', function () {
        return Inertia::render('Prototype/DataTransaksi/Index');
    })->name('prototype.data_transaksi');

    route::get('/user', function () {
        return Inertia::render('Prototype/User/Index');
    })->name('prototype.user');
});

require __DIR__ . '/auth.php';
