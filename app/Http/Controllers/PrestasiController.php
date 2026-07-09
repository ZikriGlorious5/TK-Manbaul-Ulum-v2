<?php

namespace App\Http\Controllers;

use App\Models\Prestasi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrestasiController extends Controller
{
    public function index()
    {
        return Inertia::render('Prestasi', [
            'prestasis' => Prestasi::orderBy('tahun', 'desc')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/PrestasiForm');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul'     => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'foto_url'  => 'nullable|string',
            'tahun'     => 'required|integer|min:1990|max:2100',
        ]);

        Prestasi::create($validated);
        return redirect()->route('admin.prestasi.index')->with('success', 'Prestasi ditambahkan');
    }

    public function edit(Prestasi $prestasi)
    {
        return Inertia::render('Admin/PrestasiForm', ['prestasi' => $prestasi]);
    }

    public function update(Request $request, Prestasi $prestasi)
    {
        $validated = $request->validate([
            'judul'     => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'foto_url'  => 'nullable|string',
            'tahun'     => 'required|integer|min:1990|max:2100',
        ]);

        $prestasi->update($validated);
        return redirect()->route('admin.prestasi.index')->with('success', 'Prestasi diupdate');
    }

    public function destroy(Prestasi $prestasi)
    {
        $prestasi->delete();
        return redirect()->route('admin.prestasi.index')->with('success', 'Prestasi dihapus');
    }
}