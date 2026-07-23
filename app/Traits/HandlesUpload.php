<?php

namespace App\Traits;

use Cloudinary\Cloudinary;
use Illuminate\Http\UploadedFile;

trait HandlesUpload
{
    /**
     * Upload foto ke Cloudinary.
     *
     * @param  UploadedFile  $file   File yang di-upload
     * @param  string        $folder Nama folder di Cloudinary (kegiatan, prestasi, guru, galeri)
     * @return string                URL publik foto di Cloudinary
     */
    protected function uploadFoto(UploadedFile $file, string $folder): string
    {
        $cloudinary = app(Cloudinary::class);

        $result = $cloudinary->uploadApi()->upload($file->getRealPath(), [
            'folder' => 'tk-manbaul-ulum/' . $folder,
        ]);

        return $result['secure_url'];
    }

    /**
     * Hapus foto dari Cloudinary berdasarkan URL-nya.
     *
     * @param  string|null  $url  URL Cloudinary (atau null jika tidak ada foto)
     */
    protected function hapusFoto(?string $url): void
    {
        if (!$url) return;

        // Ekstrak public_id dari URL Cloudinary
        // URL format: https://res.cloudinary.com/CLOUD/image/upload/v123/tk-manbaul-ulum/kegiatan/abc123.jpg
        $path = parse_url($url, PHP_URL_PATH);
        if (!$path) return;

        // Ambil bagian setelah '/upload/vXXX/' dan hilangkan extension
        if (preg_match('#/upload/v\d+/(.+)\.[a-zA-Z]+$#', $path, $matches)) {
            $cloudinary = app(Cloudinary::class);
            $cloudinary->uploadApi()->destroy($matches[1]);
        }
    }
}