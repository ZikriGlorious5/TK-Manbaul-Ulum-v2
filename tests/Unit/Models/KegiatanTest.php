<?php

namespace Tests\Unit\Models;

use App\Models\Kegiatan;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class KegiatanTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that Kegiatan model can be created with valid data.
     */
    public function test_kegiatan_can_be_created(): void
    {
        $kegiatan = Kegiatan::factory()->create([
            'judul' => 'Kegiatan Olahraga',
            'deskripsi' => 'Kegiatan olahraga anak-anak',
            'tanggal' => '2026-07-21',
        ]);

        $this->assertInstanceOf(Kegiatan::class, $kegiatan);
        $this->assertEquals('Kegiatan Olahraga', $kegiatan->judul);
        $this->assertNotNull($kegiatan->id);
    }

    /**
     * Test that Kegiatan has UUID as primary key.
     */
    public function test_kegiatan_uses_uuid(): void
    {
        $kegiatan = Kegiatan::factory()->create();

        $this->assertTrue(strlen($kegiatan->id) === 36); // UUID format
    }

    /**
     * Test that required fields are fillable.
     */
    public function test_kegiatan_fillable_attributes(): void
    {
        $kegiatan = Kegiatan::factory()->make();

        $this->assertNotNull($kegiatan->judul);
        $this->assertNotNull($kegiatan->deskripsi);
        $this->assertNotNull($kegiatan->tanggal);
    }

    /**
     * Test that Kegiatan timestamps are updated.
     */
    public function test_kegiatan_timestamps(): void
    {
        $kegiatan = Kegiatan::factory()->create();

        $this->assertNotNull($kegiatan->created_at);
        $this->assertNotNull($kegiatan->updated_at);
    }

    /**
     * Test that Kegiatan can be updated.
     */
    public function test_kegiatan_can_be_updated(): void
    {
        $kegiatan = Kegiatan::factory()->create();
        $oldTitle = $kegiatan->judul;

        $kegiatan->update(['judul' => 'Judul Baru']);

        $this->assertNotEquals($oldTitle, $kegiatan->fresh()->judul);
        $this->assertEquals('Judul Baru', $kegiatan->fresh()->judul);
    }
}
