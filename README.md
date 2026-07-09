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

- Daftar akun sendiri lewat `http://127.0.0.1:8000/register`, **atau**
- Minta akun yang sudah ada ke penanggung jawab backend

Akun hanya diperlukan untuk mengakses `/dashboard` dan `/admin/*`. Semua halaman publik bisa diakses tanpa login.

---

## Struktur Project (untuk Tim Frontend)

```
resources/js/
├── Components/       → Navbar, Footer, useReveal (elemen reusable)
├── Layouts/
│   ├── MainLayout.jsx    → pembungkus halaman publik (Navbar + Footer)
│   └── AdminLayout.jsx   → pembungkus halaman admin (Sidebar)
└── Pages/
    ├── Home.jsx, Sejarah.jsx, Kegiatan.jsx,
    │   Prestasi.jsx, Kontak.jsx, Guru.jsx, Galeri.jsx   → halaman publik
    └── Admin/
        ├── Dashboard.jsx
        ├── KegiatanIndex.jsx, KegiatanForm.jsx
        ├── PrestasiIndex.jsx, PrestasiForm.jsx
        ├── GuruIndex.jsx, GuruForm.jsx
        ├── GaleriIndex.jsx, GaleriForm.jsx
        ├── SejarahForm.jsx
        └── PesanKontak.jsx
```

Styling pakai **Tailwind CSS**. Warna & font kustom ada di `tailwind.config.js` (contoh: `bg-green-dark`, `text-brown-text`, `font-fredoka`).

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
- Kalau menemukan bug atau bagian yang belum sesuai desain, koordinasikan dulu sebelum mengubah struktur Controller/route, karena berkaitan langsung dengan skema database.
