<?php

namespace App\Http\Controllers;

use App\Models\PesanKontak;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PesanKontakController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama'   => 'required|string|max:255',
            'email'  => 'required|email|max:255',
            'subjek' => 'required|string|max:255',
            'pesan'  => 'required|string|max:2000',
        ]);

        PesanKontak::create($validated);
        return redirect()->back()->with('success', 'Pesan terkirim');
    }

    public function index()
    {
        return Inertia::render('Admin/PesanKontak', [
            'pesans' => PesanKontak::orderBy('created_at', 'desc')->get(),
        ]);
    }
    public function create()
{
    return Inertia::render('Kontak');
}

    public function destroy(PesanKontak $pesanKontak)
    {
        $pesanKontak->delete();
        return redirect()->back()->with('success', 'Pesan dihapus');
    }
}