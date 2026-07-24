# Dokumentasi Backend — TK Manbaul Ulum

Website profil sekolah TK Manbaul Ulum (Ciampea, Kab. Bogor).

## Tech Stack

| Komponen | Teknologi |
|---|---|
| **Backend** | Laravel 12 (PHP 8.2+) |
| **Frontend** | React 19 + Inertia.js v2 (SSR-like, bukan REST API terpisah) |
| **Styling** | Tailwind CSS |
| **Database** | PostgreSQL via Supabase |
| **Auth** | Laravel Breeze (session-based, httpOnly cookie) |
| **Upload Foto** | Cloudinary (cloud storage) |
| **Hosting** | Railway (free tier) |

---

## Arsitektur Deployment

```
Browser
   ↓
Railway (Laravel + React/Inertia)
   ↓                ↓
Supabase         Cloudinary
(Database)      (Penyimpanan Foto)
```

- **Railway** — menjalankan aplikasi Laravel dan menyajikan halaman React (via Inertia.js)
- **Supabase** — PostgreSQL database untuk semua data (kegiatan, prestasi, guru, galeri, pesan kontak, user)
- **Cloudinary** — menyimpan semua foto yang di-upload oleh admin (kegiatan, prestasi, guru, galeri)

---

## Daftar Route / API

### Halaman Publik (tanpa login)

| Method | URL | Controller | Deskripsi |
|---|---|---|---|
| `GET` | `/` | `HomeController@index` | Halaman utama — kegiatan terbaru, prestasi terbaru, daftar guru |
| `GET` | `/kegiatan` | `KegiatanController@index` | Daftar semua kegiatan |
| `GET` | `/prestasi` | `PrestasiController@index` | Daftar semua prestasi |
| `GET` | `/sejarah` | `SejarahController@index` | Halaman sejarah sekolah + daftar guru |
| `GET` | `/galeri` | `GaleriController@index` | Galeri foto |
| `GET` | `/guru` | `GuruController@index` | Daftar guru & tenaga pendidik |
| `GET` | `/kontak` | `PesanKontakController@create` | Form kirim pesan kontak |
| `POST` | `/kontak` | `PesanKontakController@store` | Simpan pesan kontak (throttle: max 5 per 15 menit) |

### Autentikasi (Laravel Breeze)

| Method | URL | Deskripsi | Middleware |
|---|---|---|---|
| `GET` | `/login` | Halaman login | guest |
| `POST` | `/login` | Proses login | guest |
| `POST` | `/logout` | Logout | auth |
| `GET` | `/forgot-password` | Form lupa password | guest |
| `POST` | `/forgot-password` | Kirim link reset password | guest |
| `GET` | `/reset-password/{token}` | Form reset password | guest |
| `POST` | `/reset-password` | Proses reset password | guest |
| `GET` | `/verify-email` | Halaman verifikasi email | auth |
| `GET` | `/verify-email/{id}/{hash}` | Verifikasi email | auth, signed |
| `POST` | `/email/verification-notification` | Kirim ulang email verifikasi | auth |
| `GET` | `/confirm-password` | Konfirmasi password | auth |
| `POST` | `/confirm-password` | Proses konfirmasi password | auth |
| `PUT` | `/password` | Update password | auth |

> **Catatan:** Route `/register` publik **SENGAJA DIHAPUS**. Registrasi admin hanya bisa dilakukan oleh admin yang sudah login lewat `/admin/tambah-admin`.

### Dashboard & Admin Panel (wajib login)

| Method | URL | Controller | Deskripsi |
|---|---|---|---|
| `GET` | `/dashboard` | Closure → Inertia | Halaman dashboard admin |

#### CRUD Kegiatan (`/admin/kegiatan`)

| Method | URL | Controller | Deskripsi |
|---|---|---|---|
| `GET` | `/admin/kegiatan` | `KegiatanController@adminIndex` | Daftar kegiatan (admin) |
| `GET` | `/admin/kegiatan/create` | `KegiatanController@create` | Form tambah kegiatan |
| `POST` | `/admin/kegiatan` | `KegiatanController@store` | Simpan kegiatan baru |
| `GET` | `/admin/kegiatan/{kegiatan}/edit` | `KegiatanController@edit` | Form edit kegiatan |
| `PUT` | `/admin/kegiatan/{kegiatan}` | `KegiatanController@update` | Update kegiatan |
| `DELETE` | `/admin/kegiatan/{kegiatan}` | `KegiatanController@destroy` | Hapus kegiatan |

#### CRUD Prestasi (`/admin/prestasi`)

| Method | URL | Controller | Deskripsi |
|---|---|---|---|
| `GET` | `/admin/prestasi` | `PrestasiController@adminIndex` | Daftar prestasi (admin) |
| `GET` | `/admin/prestasi/create` | `PrestasiController@create` | Form tambah prestasi |
| `POST` | `/admin/prestasi` | `PrestasiController@store` | Simpan prestasi baru |
| `GET` | `/admin/prestasi/{prestasi}/edit` | `PrestasiController@edit` | Form edit prestasi |
| `PUT` | `/admin/prestasi/{prestasi}` | `PrestasiController@update` | Update prestasi |
| `DELETE` | `/admin/prestasi/{prestasi}` | `PrestasiController@destroy` | Hapus prestasi |

#### CRUD Guru (`/admin/guru`)

| Method | URL | Controller | Deskripsi |
|---|---|---|---|
| `GET` | `/admin/guru` | `GuruController@adminIndex` | Daftar guru (admin) |
| `GET` | `/admin/guru/create` | `GuruController@create` | Form tambah guru |
| `POST` | `/admin/guru` | `GuruController@store` | Simpan guru baru |
| `GET` | `/admin/guru/{guru}/edit` | `GuruController@edit` | Form edit guru |
| `PUT` | `/admin/guru/{guru}` | `GuruController@update` | Update guru |
| `DELETE` | `/admin/guru/{guru}` | `GuruController@destroy` | Hapus guru |

#### CRUD Galeri (`/admin/galeri`) — Tanpa Edit/Update

| Method | URL | Controller | Deskripsi |
|---|---|---|---|
| `GET` | `/admin/galeri` | `GaleriController@adminIndex` | Daftar foto galeri (admin) |
| `GET` | `/admin/galeri/create` | `GaleriController@create` | Form upload foto |
| `POST` | `/admin/galeri` | `GaleriController@store` | Upload foto baru |
| `DELETE` | `/admin/galeri/{galeri}` | `GaleriController@destroy` | Hapus foto |

#### Sejarah (`/admin/sejarah`) — Hanya Edit/Update

| Method | URL | Controller | Deskripsi |
|---|---|---|---|
| `GET` | `/admin/sejarah` | `SejarahController@edit` | Form edit konten sejarah |
| `PUT` | `/admin/sejarah` | `SejarahController@update` | Update konten sejarah |

#### Pesan Kontak (`/admin/pesan`) — Hanya Lihat & Hapus

| Method | URL | Controller | Deskripsi |
|---|---|---|---|
| `GET` | `/admin/pesan` | `PesanKontakController@index` | Daftar pesan masuk |
| `DELETE` | `/admin/pesan/{pesanKontak}` | `PesanKontakController@destroy` | Hapus pesan |

#### Registrasi Admin (`/admin/tambah-admin`)

| Method | URL | Controller | Deskripsi |
|---|---|---|---|
| `GET` | `/admin/tambah-admin` | `RegisteredUserController@create` | Form tambah admin baru |
| `POST` | `/admin/tambah-admin` | `RegisteredUserController@store` | Simpan admin baru |

---

## Skema Database

Semua tabel menggunakan **UUID** sebagai primary key (kecuali `users` yang menggunakan auto-increment `id`).

### Tabel `users`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | bigint (auto-increment) | Primary key |
| `name` | string | Nama admin |
| `email` | string (unique) | Email login |
| `email_verified_at` | timestamp, nullable | Waktu verifikasi email |
| `password` | string | Password (bcrypt hash) |
| `remember_token` | string, nullable | Token remember me |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

### Tabel `kegiatans`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key |
| `judul` | string | Judul kegiatan |
| `deskripsi` | text | Deskripsi kegiatan |
| `foto_url` | string, nullable | URL foto di Cloudinary |
| `tanggal` | date | Tanggal kegiatan |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

### Tabel `prestasis`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key |
| `judul` | string | Judul prestasi |
| `deskripsi` | text | Deskripsi prestasi |
| `foto_url` | string, nullable | URL foto di Cloudinary |
| `tahun` | integer | Tahun prestasi |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

### Tabel `gurus`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key |
| `nama` | string | Nama guru |
| `nip` | string, nullable | Nomor Induk Pegawai |
| `jabatan` | string | Jabatan (misal: Kepala Sekolah, Guru Kelas) |
| `foto_url` | string, nullable | URL foto di Cloudinary |
| `bio` | text, nullable | Biografi singkat |
| `urutan` | integer, nullable | Urutan tampil di halaman (ascending) |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

### Tabel `galeris`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key |
| `foto_url` | string | URL foto di Cloudinary (wajib) |
| `caption` | string, nullable | Keterangan foto |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

### Tabel `sejarahs`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key |
| `konten` | longText | Konten sejarah (HTML/teks panjang) |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

> Tabel ini hanya berisi **1 record** (singleton). Controller menggunakan `Sejarah::first()` dan `updateOrCreate()`.

### Tabel `pesan_kontaks`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key |
| `nama` | string | Nama pengirim |
| `email` | string | Email pengirim |
| `subjek` | string | Subjek pesan |
| `pesan` | text | Isi pesan |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

### Tabel Pendukung (Laravel Bawaan)

| Tabel | Fungsi |
|---|---|
| `password_reset_tokens` | Menyimpan token reset password |
| `sessions` | Menyimpan data session (karena `SESSION_DRIVER=database`) |
| `cache` | Menyimpan cache (karena `CACHE_STORE=database`) |
| `jobs` / `job_batches` / `failed_jobs` | Queue system (karena `QUEUE_CONNECTION=database`) |
| `migrations` | Tracking migrasi database |

---

## Diagram Relasi Database

```
users (admin)
   │
   └── (tidak ada foreign key eksplisit ke tabel lain)

kegiatans          → standalone (UUID PK)
prestasis          → standalone (UUID PK)
gurus              → standalone (UUID PK)
galeris            → standalone (UUID PK)
sejarahs           → standalone (UUID PK, singleton)
pesan_kontaks      → standalone (UUID PK)
```

> Tidak ada relasi foreign key antar tabel konten. Semua tabel bersifat independen.

---

## Upload Foto — Alur Kerja

```
Admin upload foto via form
       ↓
Controller memanggil $this->uploadFoto()
       ↓
Trait HandlesUpload → Cloudinary SDK → upload ke Cloudinary
       ↓
Cloudinary return secure_url (https://res.cloudinary.com/...)
       ↓
URL disimpan di kolom foto_url di database
       ↓
Frontend menampilkan <img src={item.foto_url}>
```

**File kunci:** `app/Traits/HandlesUpload.php` — satu-satunya file yang mengatur upload/hapus foto. Semua controller (Kegiatan, Prestasi, Guru, Galeri) menggunakan trait ini.

**Folder di Cloudinary:**
- `tk-manbaul-ulum/kegiatan/`
- `tk-manbaul-ulum/prestasi/`
- `tk-manbaul-ulum/guru/`
- `tk-manbaul-ulum/galeri/`

---

## Environment Variables (Production)

| Variable | Contoh | Keterangan |
|---|---|---|
| `APP_NAME` | TK Manbaul Ulum | Nama aplikasi |
| `APP_ENV` | production | Environment |
| `APP_KEY` | base64:xxxx | Encryption key (generate via `php artisan key:generate`) |
| `APP_DEBUG` | false | **Wajib false di production** |
| `APP_URL` | https://xxx.up.railway.app | URL publik aplikasi |
| `DB_CONNECTION` | pgsql | Driver database |
| `DB_HOST` | xxx.pooler.supabase.com | Host Supabase |
| `DB_PORT` | 5432 | Port PostgreSQL |
| `DB_DATABASE` | postgres | Nama database |
| `DB_USERNAME` | postgres.xxx | Username Supabase |
| `DB_PASSWORD` | xxx | Password database |
| `CLOUDINARY_URL` | cloudinary://key:secret@cloud | Credentials Cloudinary |
| `SESSION_DRIVER` | database | Session disimpan di database |
| `CACHE_STORE` | database | Cache disimpan di database |
| `QUEUE_CONNECTION` | database | Queue disimpan di database |
| `LOG_CHANNEL` | stack | Channel logging |
| `LOG_LEVEL` | error | Hanya log error di production |
