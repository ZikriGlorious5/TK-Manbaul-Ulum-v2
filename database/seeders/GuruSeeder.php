<?php

namespace Database\Seeders;

use App\Models\Guru;
use Illuminate\Database\Seeder;

class GuruSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            ['nama' => 'ST. Faoziyah Ulfah, M.Pd.I', 'jabatan' => 'Kepala TK', 'bio' => 'S-2 Manajemen Pendidikan', 'urutan' => 1],
            ['nama' => 'Siskawati, S.Pd', 'jabatan' => 'Guru / Sentra Imtaq', 'bio' => 'S-1 PLS', 'urutan' => 2],
            ['nama' => 'Widya Nurfhadiillah, S.Pd', 'jabatan' => 'Guru / Sentra Seni', 'bio' => 'S-1 PAUD', 'urutan' => 3],
            ['nama' => 'Humayrah', 'jabatan' => 'Guru / Sentra Persiapan', 'bio' => 'S-1 PAUD', 'urutan' => 4],
            ['nama' => 'Juwitasari', 'jabatan' => 'Guru / Kelas Bahan Alam', 'bio' => 'SLTA', 'urutan' => 5],
            ['nama' => 'Fatwah Solihah', 'jabatan' => 'Guru / Ekstrakurikuler', 'bio' => 'SLTA', 'urutan' => 6],
            ['nama' => 'Yunengsih', 'jabatan' => 'Guru Honor', 'bio' => 'S-1 PAUD', 'urutan' => 7],
            ['nama' => 'Irvandie RF, S.Pd', 'jabatan' => 'Operator / IT', 'bio' => 'S-1 Bahasa Inggris', 'urutan' => 8],
        ];

        foreach ($data as $item) {
            Guru::create($item);
        }
    }
}