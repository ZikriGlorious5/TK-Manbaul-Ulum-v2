<?php

namespace Database\Seeders;

use App\Models\Prestasi;
use Illuminate\Database\Seeder;

class PrestasiSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            ['tahun' => 2024, 'judul' => 'Juara 1 Lomba Mewarnai', 'deskripsi' => 'Tingkat Kecamatan Ciampea'],
            ['tahun' => 2024, 'judul' => 'Juara 3 Lomba Gerak & Lagu', 'deskripsi' => 'Tingkat Kecamatan Ciampea'],
            ['tahun' => 2023, 'judul' => 'Juara 2 Lomba Hafalan Surat Pendek', 'deskripsi' => 'Tingkat Kecamatan Ciampea'],
            ['tahun' => 2023, 'judul' => 'Penampil Terbaik Pentas Seni', 'deskripsi' => 'Tingkat Kabupaten Bogor'],
            ['tahun' => 2022, 'judul' => 'Juara 1 Lomba Menyanyi', 'deskripsi' => 'Tingkat Kecamatan Ciampea'],
            ['tahun' => 2022, 'judul' => 'Juara 2 Lomba Fashion Show Budaya', 'deskripsi' => 'Tingkat Kabupaten Bogor'],
        ];

        foreach ($data as $item) {
            Prestasi::create($item);
        }
    }
}