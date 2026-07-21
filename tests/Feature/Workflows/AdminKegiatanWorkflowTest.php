<?php

namespace Tests\Feature\Workflows;

use App\Models\User;
use App\Models\Kegiatan;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminKegiatanWorkflowTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create();
    }

    /**
     * Test complete kegiatan creation workflow.
     */
    public function test_admin_full_kegiatan_workflow(): void
    {
        // Step 1: Admin views list (empty)
        $response = $this->actingAs($this->admin)->get(route('admin.kegiatan.index'));
        $response->assertStatus(200);

        // Step 2: Admin clicks create, views form
        $response = $this->actingAs($this->admin)->get(route('admin.kegiatan.create'));
        $response->assertStatus(200);

        // Step 3: Admin submits create form
        $kegiatanData = [
            'judul' => 'Workshop Edukatif',
            'deskripsi' => 'Workshop pembelajaran interaktif untuk anak-anak TK',
            'tanggal' => '2026-08-15',
        ];

        $response = $this->actingAs($this->admin)->post(route('admin.kegiatan.store'), $kegiatanData);
        $response->assertRedirect(route('admin.kegiatan.index'));

        // Step 4: Verify data persisted in database
        $this->assertDatabaseHas('kegiatans', $kegiatanData);
        $kegiatan = Kegiatan::where('judul', 'Workshop Edukatif')->first();
        $this->assertNotNull($kegiatan);

        // Step 5: Admin views list again (should see the new item)
        $response = $this->actingAs($this->admin)->get(route('admin.kegiatan.index'));
        $response->assertStatus(200);
        $response->assertViewHas('kegiatans');

        // Step 6: Admin edits the kegiatan
        $response = $this->actingAs($this->admin)->get(route('admin.kegiatan.edit', $kegiatan));
        $response->assertStatus(200);

        $updateData = [
            'judul' => 'Workshop Edukatif - Update',
            'deskripsi' => 'Updated description',
            'tanggal' => '2026-08-20',
        ];

        $response = $this->actingAs($this->admin)->put(route('admin.kegiatan.update', $kegiatan), $updateData);
        $response->assertRedirect(route('admin.kegiatan.index'));

        // Step 7: Verify update persisted
        $this->assertDatabaseHas('kegiatans', $updateData);

        // Step 8: Admin deletes the kegiatan
        $response = $this->actingAs($this->admin)->delete(route('admin.kegiatan.destroy', $kegiatan->fresh()));
        $response->assertRedirect(route('admin.kegiatan.index'));

        // Step 9: Verify deletion
        $this->assertDatabaseMissing('kegiatans', ['id' => $kegiatan->id]);
    }

    /**
     * Test unauthorized user cannot access admin workflow.
     */
    public function test_unauthorized_user_cannot_access_admin_workflow(): void
    {
        $response = $this->get(route('admin.kegiatan.index'));
        $response->assertRedirect(route('login'));

        $response = $this->post(route('admin.kegiatan.store'), [
            'judul' => 'Hacked',
            'deskripsi' => 'Hack attempt',
            'tanggal' => '2026-08-15',
        ]);
        $response->assertRedirect(route('login'));

        $this->assertDatabaseMissing('kegiatans', ['judul' => 'Hacked']);
    }
}
