<?php

namespace Tests\Unit\Models;

use App\Models\Prestasi;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PrestasiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that Prestasi model can be created.
     */
    public function test_prestasi_can_be_created(): void
    {
        $prestasi = Prestasi::factory()->create([
            'judul' => 'Juara Lomba Cerdas Cermat',
            'tahun' => 2026,
        ]);

        $this->assertInstanceOf(Prestasi::class, $prestasi);
        $this->assertEquals('Juara Lomba Cerdas Cermat', $prestasi->judul);
    }

    /**
     * Test that Prestasi has UUID as primary key.
     */
    public function test_prestasi_uses_uuid(): void
    {
        $prestasi = Prestasi::factory()->create();

        $this->assertTrue(strlen($prestasi->id) === 36);
    }

    /**
     * Test that Prestasi tahun is integer.
     */
    public function test_prestasi_tahun_is_integer(): void
    {
        $prestasi = Prestasi::factory()->create(['tahun' => 2025]);

        $this->assertIsInt($prestasi->tahun);
        $this->assertEquals(2025, $prestasi->tahun);
    }

    /**
     * Test that Prestasi can be updated.
     */
    public function test_prestasi_can_be_updated(): void
    {
        $prestasi = Prestasi::factory()->create();

        $prestasi->update(['judul' => 'Prestasi Baru']);

        $this->assertEquals('Prestasi Baru', $prestasi->fresh()->judul);
    }
}
