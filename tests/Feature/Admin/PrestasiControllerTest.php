<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use App\Models\Prestasi;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PrestasiControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create();
    }

    public function test_admin_can_view_prestasi_list(): void
    {
        Prestasi::factory(3)->create();

        $response = $this->actingAs($this->admin)->get(route('admin.prestasi.index'));

        $response->assertStatus(200);
        $response->assertViewHas('prestasis');
    }

    public function test_admin_can_create_prestasi(): void
    {
        $data = [
            'judul' => 'Prestasi Juara',
            'deskripsi' => 'Deskripsi prestasi',
            'tahun' => 2026,
        ];

        $response = $this->actingAs($this->admin)->post(route('admin.prestasi.store'), $data);

        $response->assertRedirect(route('admin.prestasi.index'));
        $this->assertDatabaseHas('prestasis', $data);
    }

    public function test_admin_can_update_prestasi(): void
    {
        $prestasi = Prestasi::factory()->create();

        $updatedData = [
            'judul' => 'Judul Baru',
            'deskripsi' => 'Deskripsi baru',
            'tahun' => 2025,
        ];

        $response = $this->actingAs($this->admin)->put(route('admin.prestasi.update', $prestasi), $updatedData);

        $response->assertRedirect(route('admin.prestasi.index'));
        $this->assertDatabaseHas('prestasis', $updatedData);
    }

    public function test_admin_can_delete_prestasi(): void
    {
        $prestasi = Prestasi::factory()->create();

        $response = $this->actingAs($this->admin)->delete(route('admin.prestasi.destroy', $prestasi));

        $response->assertRedirect(route('admin.prestasi.index'));
        $this->assertDatabaseMissing('prestasis', ['id' => $prestasi->id]);
    }

    public function test_guest_cannot_access_admin_prestasi(): void
    {
        $response = $this->get(route('admin.prestasi.index'));

        $response->assertRedirect(route('login'));
    }
}
