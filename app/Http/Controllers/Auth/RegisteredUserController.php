<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the "tambah admin" view.
     * Route ini dilindungi middleware auth+verified (lihat routes/web.php),
     * jadi hanya admin yang sudah login yang bisa mengaksesnya.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/RegisterAdmin');
    }

    /**
     * Handle pembuatan akun admin baru oleh admin yang sedang login.
     * Tidak melakukan Auth::login() ke akun baru — sesi tetap milik
     * admin yang sedang login (yang membuat akun ini).
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        return redirect()
            ->route('dashboard')
            ->with('success', "Akun admin \"{$user->name}\" berhasil dibuat.");
    }
}