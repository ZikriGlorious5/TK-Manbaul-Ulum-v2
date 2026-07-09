<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuruController extends Controller
{
    public function index()
    {
        return Inertia::render('Guru', [
            'gurus' => Guru::orderBy('urutan')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/GuruForm');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama'     => 'required|string|max:255',
            'nip'      => 'nullable|string|max:50',
            'jabatan'  => 'required|string|max:255',
            'foto_url' => 'nullable|string',
            'bio'      => 'nullable|string',
            'urutan'   => 'nullable|integer',
        ]);

        Guru::create($validated);
        return redirect()->route('admin.guru.index')->with('success', 'Guru ditambahkan');
    }

    public function edit(Guru $guru)
    {
        return Inertia::render('Admin/GuruForm', ['guru' => $guru]);
    }

    public function update(Request $request, Guru $guru)
    {
        $validated = $request->validate([
            'nama'     => 'required|string|max:255',
            'nip'      => 'nullable|string|max:50',
            'jabatan'  => 'required|string|max:255',
            'foto_url' => 'nullable|string',
            'bio'      => 'nullable|string',
            'urutan'   => 'nullable|integer',
        ]);

        $guru->update($validated);
        return redirect()->route('admin.guru.index')->with('success', 'Guru diupdate');
    }

    public function destroy(Guru $guru)
    {
        $guru->delete();
        return redirect()->route('admin.guru.index')->with('success', 'Guru dihapus');
    }
}