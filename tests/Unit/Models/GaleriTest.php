<?php

namespace Tests\Unit\Models;

use App\Models\Galeri;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GaleriTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that Galeri model can be created.
     */
    public function test_galeri_can_be_created(): void
    {
        $galeri = Galeri::factory()->create([
            'caption' => 'Kegiatan Bermain Edukatif',
        ]);

        $this->assertInstanceOf(Galeri::class, $galeri);
        $this->assertEquals('Kegiatan Bermain Edukatif', $galeri->caption);
    }

    /**
     * Test that Galeri has UUID as primary key.
     */
    public function test_galeri_uses_uuid(): void
    {
        $galeri = Galeri::factory()->create();

        $this->assertTrue(strlen($galeri->id) === 36);
    }

    /**
     * Test that Galeri has foto_url.
     */
    public function test_galeri_has_foto_url(): void
    {
        $galeri = Galeri::factory()->create();

        $this->assertNotNull($galeri->foto_url);
    }

    /**
     * Test that Galeri caption can be null.
     */
    public function test_galeri_caption_can_be_null(): void
    {
        $galeri = Galeri::factory()->create(['caption' => null]);

        $this->assertNull($galeri->caption);
    }
}
