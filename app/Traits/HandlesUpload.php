<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HandlesUpload
{
    protected function uploadFoto(UploadedFile $file, string $folder): string
    {
        $path = $file->store($folder, 'public');
        return Storage::url($path); // hasilnya: /storage/kegiatan/xxxx.jpg
    }

    protected function hapusFoto(?string $url): void
    {
        if (!$url) return;
        $path = str_replace('/storage/', '', parse_url($url, PHP_URL_PATH));
        Storage::disk('public')->delete($path);
    }
}