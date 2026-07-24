<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use App\Traits\HandlesUpload;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleriController extends Controller
{
    use HandlesUpload;

    public function index()
    {
        return Inertia::render('Galeri', [
            'galeris' => Galeri::orderBy('created_at', 'desc')->get(),
        ]);
    }

    public function adminIndex()
    {
        return Inertia::render('Admin/GaleriIndex', [
            'galeris' => Galeri::orderBy('created_at', 'desc')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/GaleriForm');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'foto'    => 'required|image|max:10240',
            'caption' => 'nullable|string|max:255',
        ]);

        $validated['foto_url'] = $this->uploadFoto($request->file('foto'), 'galeri');
        unset($validated['foto']);

        Galeri::create($validated);
        return redirect()->route('admin.galeri.index')->with('success', 'Foto ditambahkan');
    }

    public function destroy(Galeri $galeri)
    {
        $this->hapusFoto($galeri->foto_url);
        $galeri->delete();
        return redirect()->route('admin.galeri.index')->with('success', 'Foto dihapus');
    }
}