<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use App\Traits\HandlesUpload;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KegiatanController extends Controller
{
    use HandlesUpload;

    // Publik
    public function index()
    {
        return Inertia::render('Kegiatan', [
            'kegiatans' => Kegiatan::orderBy('tanggal', 'desc')->get(),
        ]);
    }

    // Admin — list semua data
    public function adminIndex()
    {
        return Inertia::render('Admin/KegiatanIndex', [
            'kegiatans' => Kegiatan::orderBy('tanggal', 'desc')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/KegiatanForm');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul'     => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'foto'      => 'nullable|image|max:2048',
            'tanggal'   => 'required|date',
        ]);

        if ($request->hasFile('foto')) {
            $validated['foto_url'] = $this->uploadFoto($request->file('foto'), 'kegiatan');
        }
        unset($validated['foto']);

        Kegiatan::create($validated);
        return redirect()->route('admin.kegiatan.index')->with('success', 'Kegiatan ditambahkan');
    }

    public function edit(Kegiatan $kegiatan)
    {
        return Inertia::render('Admin/KegiatanForm', ['kegiatan' => $kegiatan]);
    }

    public function update(Request $request, Kegiatan $kegiatan)
    {
        $validated = $request->validate([
            'judul'     => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'foto'      => 'nullable|image|max:2048',
            'tanggal'   => 'required|date',
        ]);

        if ($request->hasFile('foto')) {
            $this->hapusFoto($kegiatan->foto_url);
            $validated['foto_url'] = $this->uploadFoto($request->file('foto'), 'kegiatan');
        }
        unset($validated['foto']);

        $kegiatan->update($validated);
        return redirect()->route('admin.kegiatan.index')->with('success', 'Kegiatan diupdate');
    }

    public function destroy(Kegiatan $kegiatan)
    {
        $this->hapusFoto($kegiatan->foto_url);
        $kegiatan->delete();
        return redirect()->route('admin.kegiatan.index')->with('success', 'Kegiatan dihapus');
    }
}