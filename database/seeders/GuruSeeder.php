<?php

namespace Database\Seeders;

use App\Models\Guru;
use Illuminate\Database\Seeder;

class GuruSeeder extends Seeder
{
    /**
     * Data disesuaikan dengan dokumen resmi "Isi KSP 2025"
     * (Kurikulum Operasional TK Manbaul Ulum, tahun ajaran 2024/2025).
     */
    public function run(): void
    {
        $data = [
            ['nama' => 'M. Fachrudin, S.Ag', 'jabatan' => 'Pembina / Ketua Yayasan', 'bio' => 'S-1', 'urutan' => 1],
            ['nama' => 'ST. Faoziyah Ulfah, M.Pd.I', 'jabatan' => 'Kepala TK', 'bio' => 'S-2 Manajemen Pendidikan', 'urutan' => 2],
            ['nama' => 'Juwitasari', 'jabatan' => 'Guru', 'bio' => 'SLTA', 'urutan' => 3],
            ['nama' => 'Siskawati, S.Pd', 'jabatan' => 'Guru', 'bio' => 'S1-PLS', 'urutan' => 4],
            ['nama' => 'Widya Nurfadhillah, S.Pd', 'jabatan' => 'Guru', 'bio' => 'S1-Paud', 'urutan' => 5],
            ['nama' => 'Humayrah', 'jabatan' => 'Guru', 'bio' => 'S-1 Paud', 'urutan' => 6],
            ['nama' => 'Yunengsih', 'jabatan' => 'Guru', 'bio' => 'S-1 Paud', 'urutan' => 7],
            ['nama' => 'Fatwa Solihah', 'jabatan' => 'Administrasi', 'bio' => 'SLTA', 'urutan' => 8],
            ['nama' => 'Febriani', 'jabatan' => 'Ekstra Kurikuler', 'bio' => 'SLTA', 'urutan' => 9],
            ['nama' => 'Irvandie RF, S.Pd', 'jabatan' => 'Operator', 'bio' => 'S-1 Inggris', 'urutan' => 10],
        ];

        foreach ($data as $item) {
            Guru::updateOrCreate(
                ['nama' => $item['nama']],
                $item
            );
        }
    }
}