<?php

namespace Tests\Unit\Models;

use App\Models\PesanKontak;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PesanKontakTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that PesanKontak model can be created.
     */
    public function test_pesan_kontak_can_be_created(): void
    {
        $pesan = PesanKontak::factory()->create([
            'nama' => 'Budi Santoso',
            'email' => 'budi@example.com',
            'subjek' => 'Pertanyaan Pendaftaran',
        ]);

        $this->assertInstanceOf(PesanKontak::class, $pesan);
        $this->assertEquals('Budi Santoso', $pesan->nama);
    }

    /**
     * Test that PesanKontak has UUID as primary key.
     */
    public function test_pesan_kontak_uses_uuid(): void
    {
        $pesan = PesanKontak::factory()->create();

        $this->assertTrue(strlen($pesan->id) === 36);
    }

    /**
     * Test that PesanKontak has valid email.
     */
    public function test_pesan_kontak_has_email(): void
    {
        $pesan = PesanKontak::factory()->create();

        $this->assertStringContainsString('@', $pesan->email);
    }

    /**
     * Test that PesanKontak has pesan field.
     */
    public function test_pesan_kontak_has_pesan(): void
    {
        $pesan = PesanKontak::factory()->create(['pesan' => 'Saya ingin bertanya...']);

        $this->assertEquals('Saya ingin bertanya...', $pesan->pesan);
    }
}
