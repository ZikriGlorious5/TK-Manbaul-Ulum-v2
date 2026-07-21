<?php

namespace Tests\Unit\Models;

use App\Models\Sejarah;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SejarahTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that Sejarah model can be created.
     */
    public function test_sejarah_can_be_created(): void
    {
        $sejarah = Sejarah::factory()->create([
            'konten' => 'Sejarah panjang TK Manbaul Ulum...',
        ]);

        $this->assertInstanceOf(Sejarah::class, $sejarah);
        $this->assertStringContainsString('Sejarah', $sejarah->konten);
    }

    /**
     * Test that Sejarah has UUID as primary key.
     */
    public function test_sejarah_uses_uuid(): void
    {
        $sejarah = Sejarah::factory()->create();

        $this->assertTrue(strlen($sejarah->id) === 36);
    }

    /**
     * Test that Sejarah can be updated.
     */
    public function test_sejarah_can_be_updated(): void
    {
        $sejarah = Sejarah::factory()->create();
        $oldKonten = $sejarah->konten;

        $sejarah->update(['konten' => 'Konten baru']);

        $this->assertNotEquals($oldKonten, $sejarah->fresh()->konten);
    }
}
