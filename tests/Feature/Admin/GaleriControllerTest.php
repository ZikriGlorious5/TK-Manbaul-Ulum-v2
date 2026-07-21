<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use App\Models\Galeri;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GaleriControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create();
    }

    public function test_admin_can_view_galeri_list(): void
    {
        Galeri::factory(5)->create();

        $response = $this->actingAs($this->admin)->get(route('admin.galeri.index'));

        $response->assertStatus(200);
        $response->assertViewHas('galeris');
    }

    public function test_admin_can_create_galeri_photo(): void
    {
        $data = [
            'caption' => 'Foto Kegiatan Bermain',
        ];

        $response = $this->actingAs($this->admin)->post(route('admin.galeri.store'), $data);

        $response->assertRedirect(route('admin.galeri.index'));
        $this->assertDatabaseHas('galeris', $data);
    }

    public function test_admin_can_delete_galeri(): void
    {
        $galeri = Galeri::factory()->create();

        $response = $this->actingAs($this->admin)->delete(route('admin.galeri.destroy', $galeri));

        $response->assertRedirect(route('admin.galeri.index'));
        $this->assertDatabaseMissing('galeris', ['id' => $galeri->id]);
    }

    public function test_guest_cannot_access_admin_galeri(): void
    {
        $response = $this->get(route('admin.galeri.index'));

        $response->assertRedirect(route('login'));
    }
}
