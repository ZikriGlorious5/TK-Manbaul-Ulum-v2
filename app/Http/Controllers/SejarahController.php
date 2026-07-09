<?php

namespace App\Http\Controllers;

use App\Models\Sejarah;
use App\Models\Guru;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SejarahController extends Controller
{
    public function index()
    {
        return Inertia::render('Sejarah', [
            'sejarah' => Sejarah::first(),
            'gurus'   => Guru::orderBy('urutan')->get(),
        ]);
    }

    public function edit()
    {
        return Inertia::render('Admin/SejarahForm', [
            'sejarah' => Sejarah::first(),
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'konten' => 'required|string',
        ]);

        Sejarah::updateOrCreate(['id' => Sejarah::first()?->id], $validated);

        return redirect()->route('admin.sejarah.edit')->with('success', 'Sejarah diupdate');
    }
}