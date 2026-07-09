<?php

namespace App\Http\Controllers;

use App\Models\Prestasi;
use App\Traits\HandlesUpload;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrestasiController extends Controller
{
    use HandlesUpload;

    public function index()
    {
        return Inertia::render('Prestasi', [
            'prestasis' => Prestasi::orderBy('tahun', 'desc')->get(),
        ]);
    }

    public function adminIndex()
    {
        return Inertia::render('Admin/PrestasiIndex', [
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
            'foto'      => 'nullable|image|max:2048',
            'tahun'     => 'required|integer|min:1990|max:2100',
        ]);

        if ($request->hasFile('foto')) {
            $validated['foto_url'] = $this->uploadFoto($request->file('foto'), 'prestasi');
        }
        unset($validated['foto']);

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
            'foto'      => 'nullable|image|max:2048',
            'tahun'     => 'required|integer|min:1990|max:2100',
        ]);

        if ($request->hasFile('foto')) {
            $this->hapusFoto($prestasi->foto_url);
            $validated['foto_url'] = $this->uploadFoto($request->file('foto'), 'prestasi');
        }
        unset($validated['foto']);

        $prestasi->update($validated);
        return redirect()->route('admin.prestasi.index')->with('success', 'Prestasi diupdate');
    }

    public function destroy(Prestasi $prestasi)
    {
        $this->hapusFoto($prestasi->foto_url);
        $prestasi->delete();
        return redirect()->route('admin.prestasi.index')->with('success', 'Prestasi dihapus');
    }
}