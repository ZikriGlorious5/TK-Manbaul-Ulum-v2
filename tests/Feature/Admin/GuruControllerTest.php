<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use App\Models\Guru;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GuruControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create();
    }

    public function test_admin_can_view_guru_list(): void
    {
        Guru::factory(5)->create();

        $response = $this->actingAs($this->admin)->get(route('admin.guru.index'));

        $response->assertStatus(200);
        $response->assertViewHas('gurus');
    }

    public function test_admin_can_create_guru(): void
    {
        $data = [
            'nama' => 'Ibu Nurmala',
            'nip' => '123456789012345',
            'jabatan' => 'Guru Kelompok B',
            'bio' => 'Bio guru',
            'urutan' => 1,
        ];

        $response = $this->actingAs($this->admin)->post(route('admin.guru.store'), $data);

        $response->assertRedirect(route('admin.guru.index'));
        $this->assertDatabaseHas('gurus', $data);
    }

    public function test_admin_can_update_guru(): void
    {
        $guru = Guru::factory()->create();

        $updatedData = [
            'nama' => 'Nama Baru',
            'nip' => $guru->nip,
            'jabatan' => 'Kepala Sekolah',
            'bio' => 'Bio baru',
            'urutan' => 2,
        ];

        $response = $this->actingAs($this->admin)->put(route('admin.guru.update', $guru), $updatedData);

        $response->assertRedirect(route('admin.guru.index'));
        $this->assertDatabaseHas('gurus', $updatedData);
    }

    public function test_admin_can_delete_guru(): void
    {
        $guru = Guru::factory()->create();

        $response = $this->actingAs($this->admin)->delete(route('admin.guru.destroy', $guru));

        $response->assertRedirect(route('admin.guru.index'));
        $this->assertDatabaseMissing('gurus', ['id' => $guru->id]);
    }
}
