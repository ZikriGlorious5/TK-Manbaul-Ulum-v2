<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use App\Models\Prestasi;
use App\Models\Guru;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'kegiatanTerbaru' => Kegiatan::orderBy('tanggal', 'desc')->take(3)->get(),
            'prestasiTerbaru' => Prestasi::orderBy('tahun', 'desc')->take(3)->get(),
            'guru'            => Guru::orderBy('urutan')->get(),
        ]);
    }
}