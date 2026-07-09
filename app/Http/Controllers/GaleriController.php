<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleriController extends Controller
{
    public function index()
    {
        return Inertia::render('Galeri', [
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
            'foto_url' => 'required|string',
            'caption'  => 'nullable|string|max:255',
        ]);

        Galeri::create($validated);
        return redirect()->route('admin.galeri.index')->with('success', 'Foto ditambahkan');
    }

    public function destroy(Galeri $galeri)
    {
        $galeri->delete();
        return redirect()->route('admin.galeri.index')->with('success', 'Foto dihapus');
    }
}