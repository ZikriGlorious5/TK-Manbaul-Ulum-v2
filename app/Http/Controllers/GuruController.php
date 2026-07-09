<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Traits\HandlesUpload;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuruController extends Controller
{
    use HandlesUpload;

    public function index()
    {
        return Inertia::render('Guru', [
            'gurus' => Guru::orderBy('urutan')->get(),
        ]);
    }

    public function adminIndex()
    {
        return Inertia::render('Admin/GuruIndex', [
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
            'nama'    => 'required|string|max:255',
            'nip'     => 'nullable|string|max:50',
            'jabatan' => 'required|string|max:255',
            'foto'    => 'nullable|image|max:2048',
            'bio'     => 'nullable|string',
            'urutan'  => 'nullable|integer',
        ]);

        if ($request->hasFile('foto')) {
            $validated['foto_url'] = $this->uploadFoto($request->file('foto'), 'guru');
        }
        unset($validated['foto']);

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
            'nama'    => 'required|string|max:255',
            'nip'     => 'nullable|string|max:50',
            'jabatan' => 'required|string|max:255',
            'foto'    => 'nullable|image|max:2048',
            'bio'     => 'nullable|string',
            'urutan'  => 'nullable|integer',
        ]);

        if ($request->hasFile('foto')) {
            $this->hapusFoto($guru->foto_url);
            $validated['foto_url'] = $this->uploadFoto($request->file('foto'), 'guru');
        }
        unset($validated['foto']);

        $guru->update($validated);
        return redirect()->route('admin.guru.index')->with('success', 'Guru diupdate');
    }

    public function destroy(Guru $guru)
    {
        $this->hapusFoto($guru->foto_url);
        $guru->delete();
        return redirect()->route('admin.guru.index')->with('success', 'Guru dihapus');
    }
}