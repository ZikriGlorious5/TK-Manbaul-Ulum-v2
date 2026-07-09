# TK Manbaul Ulum — Website CMS

## Setup Development

1. Clone repo: `git clone <url-repo>`
2. Install PHP deps: `composer install`
3. Install JS deps: `npm install`
4. Copy `.env.example` jadi `.env`, isi kredensial DB (minta ke [nama kamu])
5. Generate key: `php artisan key:generate`
6. Jalankan dev server (2 terminal terpisah):
   - `npm run dev`
   - `php artisan serve`
7. Buka `http://127.0.0.1:8000`

## Struktur Frontend (buat tim FE)
- Halaman: `resources/js/Pages/`
- Komponen reusable: `resources/js/Components/`
- Layout: `resources/js/Layouts/`
- Styling: Tailwind CSS, config di `tailwind.config.js`

## Branching
- `main` = versi stabil, jangan push langsung ke sini
- Bikin branch baru per fitur/perbaikan, contoh: `fitur/redesign-navbar`
- Selesai kerja → buat Pull Request ke `main`, tunggu di-review
