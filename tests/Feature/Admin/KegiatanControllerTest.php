<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use App\Models\Kegiatan;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class KegiatanControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create();
    }

    /**
     * Test admin can view list of kegiatans.
     */
    public function test_admin_can_view_kegiatan_list(): void
    {
        Kegiatan::factory(5)->create();

        $response = $this->actingAs($this->admin)->get(route('admin.kegiatan.index'));

        $response->assertStatus(200);
        $response->assertViewHas('kegiatans');
    }

    /**
     * Test admin can view create form.
     */
    public function test_admin_can_view_create_form(): void
    {
        $response = $this->actingAs($this->admin)->get(route('admin.kegiatan.create'));

        $response->assertStatus(200);
    }

    /**
     * Test admin can create kegiatan with valid data.
     */
    public function test_admin_can_create_kegiatan(): void
    {
        $data = [
            'judul' => 'Kegiatan Baru',
            'deskripsi' => 'Deskripsi kegiatan',
            'tanggal' => '2026-07-21',
        ];

        $response = $this->actingAs($this->admin)->post(route('admin.kegiatan.store'), $data);

        $response->assertRedirect(route('admin.kegiatan.index'));
        $this->assertDatabaseHas('kegiatans', $data);
    }

    /**
     * Test admin cannot create kegiatan with invalid data.
     */
    public function test_admin_cannot_create_kegiatan_with_invalid_data(): void
    {
        $data = [
            'judul' => '',
            'deskripsi' => '',
            'tanggal' => 'invalid-date',
        ];

        $response = $this->actingAs($this->admin)->post(route('admin.kegiatan.store'), $data);

        $response->assertSessionHasErrors(['judul', 'deskripsi', 'tanggal']);
        $this->assertDatabaseCount('kegiatans', 0);
    }

    /**
     * Test admin can view edit form.
     */
    public function test_admin_can_view_edit_form(): void
    {
        $kegiatan = Kegiatan::factory()->create();

        $response = $this->actingAs($this->admin)->get(route('admin.kegiatan.edit', $kegiatan));

        $response->assertStatus(200);
        $response->assertViewHas('kegiatan', $kegiatan);
    }

    /**
     * Test admin can update kegiatan.
     */
    public function test_admin_can_update_kegiatan(): void
    {
        $kegiatan = Kegiatan::factory()->create();

        $updatedData = [
            'judul' => 'Judul Diupdate',
            'deskripsi' => 'Deskripsi diupdate',
            'tanggal' => '2026-08-01',
        ];

        $response = $this->actingAs($this->admin)->put(route('admin.kegiatan.update', $kegiatan), $updatedData);

        $response->assertRedirect(route('admin.kegiatan.index'));
        $this->assertDatabaseHas('kegiatans', $updatedData);
    }

    /**
     * Test admin can delete kegiatan.
     */
    public function test_admin_can_delete_kegiatan(): void
    {
        $kegiatan = Kegiatan::factory()->create();

        $response = $this->actingAs($this->admin)->delete(route('admin.kegiatan.destroy', $kegiatan));

        $response->assertRedirect(route('admin.kegiatan.index'));
        $this->assertDatabaseMissing('kegiatans', ['id' => $kegiatan->id]);
    }

    /**
     * Test guest cannot access admin kegiatan routes.
     */
    public function test_guest_cannot_access_admin_kegiatan(): void
    {
        $response = $this->get(route('admin.kegiatan.index'));

        $response->assertRedirect(route('login'));
    }
}
