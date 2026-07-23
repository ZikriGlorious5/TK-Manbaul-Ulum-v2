<?php

use App\Http\Controllers\{
    HomeController, KegiatanController, PrestasiController,
    SejarahController, GaleriController, GuruController, PesanKontakController
};
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ===== PUBLIC =====
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/kegiatan', [KegiatanController::class, 'index'])->name('kegiatan');
Route::get('/prestasi', [PrestasiController::class, 'index'])->name('prestasi');
Route::get('/sejarah', [SejarahController::class, 'index'])->name('sejarah');
Route::get('/galeri', [GaleriController::class, 'index'])->name('galeri');
Route::get('/guru', [GuruController::class, 'index'])->name('guru');
Route::get('/kontak', [PesanKontakController::class, 'create'])->name('kontak');
Route::post('/kontak', [PesanKontakController::class, 'store'])
    ->middleware('throttle:5,15')
    ->name('kontak.store');

// ===== DASHBOARD (nama route "dashboard" wajib ada, dipakai Breeze bawaan) =====
Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// ===== ADMIN (wajib login) =====
Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/kegiatan', [KegiatanController::class, 'adminIndex'])->name('kegiatan.index');
    Route::resource('kegiatan', KegiatanController::class)->except(['index', 'show']);

    Route::get('/prestasi', [PrestasiController::class, 'adminIndex'])->name('prestasi.index');
    Route::resource('prestasi', PrestasiController::class)->except(['index', 'show']);

    Route::get('/guru', [GuruController::class, 'adminIndex'])->name('guru.index');
    Route::resource('guru', GuruController::class)->except(['index', 'show']);

    Route::get('/galeri', [GaleriController::class, 'adminIndex'])->name('galeri.index');
    Route::resource('galeri', GaleriController::class)->except(['index', 'show', 'edit', 'update']);

    Route::get('/sejarah', [SejarahController::class, 'edit'])->name('sejarah.edit');
    Route::put('/sejarah', [SejarahController::class, 'update'])->name('sejarah.update');

    Route::get('/pesan', [PesanKontakController::class, 'index'])->name('pesan.index');
    Route::delete('/pesan/{pesanKontak}', [PesanKontakController::class, 'destroy'])->name('pesan.destroy');

    // Tambah admin baru — hanya admin yang sudah login yang bisa akses.
    Route::get('/tambah-admin', [RegisteredUserController::class, 'create'])->name('register.create');
    Route::post('/tambah-admin', [RegisteredUserController::class, 'store'])->name('register.store');
});

require __DIR__.'/auth.php';