# TK Manbaul Ulum — Website CMS

Website profil sekolah TK Manbaul Ulum (Ciampea, Kab. Bogor), dibangun dengan Laravel + Inertia.js + React, database PostgreSQL (Supabase).

## Tech Stack

- **Backend**: Laravel 12 (PHP 8.2+)
- **Frontend**: React 19 + Inertia.js (bukan REST API terpisah — satu aplikasi)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL via Supabase
- **Auth**: Laravel Breeze (session-based, httpOnly cookie)
- **Upload foto**: Local storage Laravel (sementara, akan dipindah ke cloud storage saat production)

## Setup Development

### 1. Clone & install dependencies

```bash
git clone <url-repo>
cd tk-manbaul-ulum-backend
composer install
npm install
```

### 2. Environment

```bash
cp .env.example .env
```

Isi `.env`, minta kredensial database ke penanggung jawab backend:
```
DB_CONNECTION=pgsql
DB_HOST=<tanya-ke-backend>
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=<tanya-ke-backend>
DB_PASSWORD=<tanya-ke-backend>
```

`APP_NAME` juga menentukan judul tab browser (mis. "Dashboard Admin - TK Manbaul Ulum"):
```
APP_NAME="TK Manbaul Ulum"
```

Generate application key:
```bash
php artisan key:generate
```

### 3. Storage symlink (supaya foto upload bisa diakses browser)

```bash
php artisan storage:link
```

### 4. Jalankan development server

Buka **2 terminal terpisah**, biarkan keduanya tetap jalan:

```bash
# Terminal 1
npm run dev

# Terminal 2
php artisan serve
```

Buka `http://127.0.0.1:8000` di browser.

### 5. Akun admin

⚠️ **Registrasi publik sudah dinonaktifkan.** Tidak ada lagi halaman `/register` yang bisa diakses tanpa login — akun admin tidak bisa dibuat sembarangan orang.

Minta akun ke penanggung jawab backend. Admin yang sudah punya akses bisa menambah admin lain lewat menu **"Tambah Admin"** di sidebar dashboard setelah login (detail cara setup akun pertama kali dikoordinasikan langsung antar tim, tidak dituliskan di sini).

Akun hanya diperlukan untuk mengakses `/dashboard` dan `/admin/*`. Semua halaman publik bisa diakses tanpa login.

---

## Struktur Project (untuk Tim Frontend)

```
resources/js/
├── Components/       → Navbar, Footer, useReveal (elemen reusable)
├── Contexts/
│   └── ConfirmContext.jsx  → modal konfirmasi tema (pengganti window.confirm())
├── Layouts/
│   ├── MainLayout.jsx    → pembungkus halaman publik (Navbar + Footer)
│   ├── GuestLayout.jsx   → pembungkus halaman login (logo + kartu tema)
│   └── AdminLayout.jsx   → pembungkus halaman admin (Sidebar + ConfirmProvider)
└── Pages/
    ├── Home.jsx, Sejarah.jsx, Kegiatan.jsx,
    │   Prestasi.jsx, Kontak.jsx, Guru.jsx, Galeri.jsx   → halaman publik
    ├── Auth/
    │   └── Login.jsx     → login, tema hijau/cream (bukan Breeze default)
    └── Admin/
        ├── Dashboard.jsx
        ├── KegiatanIndex.jsx, KegiatanForm.jsx
        ├── PrestasiIndex.jsx, PrestasiForm.jsx
        ├── GuruIndex.jsx, GuruForm.jsx
        ├── GaleriIndex.jsx, GaleriForm.jsx
        ├── SejarahForm.jsx
        ├── PesanKontak.jsx
        └── RegisterAdmin.jsx   → tambah admin baru (menggantikan Auth/Register.jsx lama)
```

Styling pakai **Tailwind CSS**. Warna & font kustom ada di `tailwind.config.js` (contoh: `bg-green-dark`, `text-brown-text`, `font-fredoka`).

### Aset visual

- Logo sekolah: `public/images/logo.png`, dipakai di Navbar dan halaman login.
- Favicon: `public/favicon.png` & `public/favicon.ico`, di-link lewat `resources/views/app.blade.php`.
- Setiap halaman sebaiknya menyetel judul tab dengan `<Head title="..." />` dari `@inertiajs/react` — formatnya otomatis jadi `"<title> - <APP_NAME>"` (diatur di `resources/js/app.jsx`).

### Modal konfirmasi (bukan `window.confirm()`)

Semua tombol "Hapus" di halaman admin pakai modal bertema, bukan dialog bawaan browser:

```jsx
import { useConfirm } from "@/Contexts/ConfirmContext";

const confirm = useConfirm();
const handleDelete = async (id) => {
    if (await confirm("Hapus data ini?")) {
        router.delete(`/admin/xxx/${id}`);
    }
};
```

`ConfirmProvider` sudah terpasang di `AdminLayout`, jadi tinggal pakai hook-nya di halaman admin manapun.

### Cara data sampai ke halaman

Setiap halaman publik menerima data lewat **props** dari Controller Laravel (bukan `fetch`/`axios`). Contoh, `Kegiatan.jsx` menerima prop `kegiatans` yang datanya sudah diambil dari database oleh `KegiatanController@index`. Kalau perlu data baru/berbeda, koordinasikan dengan penanggung jawab backend untuk menyesuaikan Controller-nya.

### Routing

Routing bukan di `react-router-dom`, tapi ditentukan Laravel di `routes/web.php`. Untuk pindah halaman, pakai komponen `Link` dari `@inertiajs/react`:
```jsx
import { Link } from '@inertiajs/react';
<Link href="/kegiatan">Kegiatan</Link>
```

---

## Git Workflow

- **`main`** = versi stabil. Dilindungi — tidak bisa push langsung, harus lewat Pull Request.
- Untuk mengerjakan sesuatu, buat branch baru dari `main`:

```bash
git checkout main
git pull
git checkout -b fitur/nama-fitur-kamu
```

- Setelah selesai:

```bash
git add .
git commit -m "Penjelasan singkat perubahan"
git push -u origin fitur/nama-fitur-kamu
```

- Buka GitHub → **Pull Requests** → **New Pull Request** → arahkan ke `main` → minta review.
- Jangan commit file `.env`, `vendor/`, atau `node_modules/` (sudah diatur di `.gitignore`, seharusnya otomatis tidak ikut ter-commit).

## Catatan Penting

- Upload foto saat ini disimpan **lokal** di server masing-masing (`storage/app/public`). Foto yang di-upload di laptop kamu **tidak otomatis muncul** di laptop tim lain — ini normal untuk tahap development, akan dipindah ke cloud storage sebelum deploy production.
- Registrasi admin **tidak lagi publik**. Lihat bagian [Akun admin](#5-akun-admin) di atas.
- Setelah logout, user diarahkan ke halaman `/login`, bukan ke beranda.
- Kalau menemukan bug atau bagian yang belum sesuai desain, koordinasikan dulu sebelum mengubah struktur Controller/route, karena berkaitan langsung dengan skema database.
