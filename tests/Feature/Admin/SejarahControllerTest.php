<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use App\Models\Sejarah;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SejarahControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create();
    }

    public function test_admin_can_view_sejarah_form(): void
    {
        $response = $this->actingAs($this->admin)->get(route('admin.sejarah.edit', 1));

        $response->assertStatus(200);
    }

    public function test_admin_can_update_sejarah(): void
    {
        Sejarah::factory()->create();
        $sejarah = Sejarah::first();

        $data = [
            'konten' => 'Konten Sejarah yang diupdate panjang...',
        ];

        $response = $this->actingAs($this->admin)->put(route('admin.sejarah.update', $sejarah), $data);

        $response->assertRedirect(route('admin.sejarah.edit', 1));
        $this->assertDatabaseHas('sejarahs', $data);
    }

    public function test_guest_cannot_edit_sejarah(): void
    {
        $response = $this->get(route('admin.sejarah.edit', 1));

        $response->assertRedirect(route('login'));
    }
}
