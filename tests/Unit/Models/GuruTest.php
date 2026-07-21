<?php

namespace Tests\Unit\Models;

use App\Models\Guru;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GuruTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that Guru model can be created.
     */
    public function test_guru_can_be_created(): void
    {
        $guru = Guru::factory()->create([
            'nama' => 'Ibu Siti',
            'nip' => '12345678901234',
            'jabatan' => 'Guru Kelompok A',
        ]);

        $this->assertInstanceOf(Guru::class, $guru);
        $this->assertEquals('Ibu Siti', $guru->nama);
    }

    /**
     * Test that Guru has UUID as primary key.
     */
    public function test_guru_uses_uuid(): void
    {
        $guru = Guru::factory()->create();

        $this->assertTrue(strlen($guru->id) === 36);
    }

    /**
     * Test that Guru NIP is unique and required.
     */
    public function test_guru_nip_is_unique(): void
    {
        $guru1 = Guru::factory()->create(['nip' => '12345678901234']);
        $guru2 = Guru::factory()->create(['nip' => '98765432109876']);

        $this->assertNotEquals($guru1->nip, $guru2->nip);
    }

    /**
     * Test that Guru can be ordered by urutan.
     */
    public function test_guru_urutan_field(): void
    {
        $guru = Guru::factory()->create(['urutan' => 5]);

        $this->assertEquals(5, $guru->urutan);
    }
}
