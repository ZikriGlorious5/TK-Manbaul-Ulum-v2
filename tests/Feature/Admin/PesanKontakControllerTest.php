<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use App\Models\PesanKontak;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PesanKontakControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create();
    }

    public function test_admin_can_view_pesan_list(): void
    {
        PesanKontak::factory(5)->create();

        $response = $this->actingAs($this->admin)->get(route('admin.pesan'));

        $response->assertStatus(200);
        $response->assertViewHas('pesans');
    }

    public function test_public_can_submit_contact_form(): void
    {
        $data = [
            'nama' => 'Budi Santoso',
            'email' => 'budi@example.com',
            'subjek' => 'Pertanyaan Pendaftaran',
            'pesan' => 'Saya ingin menanyakan....',
        ];

        $response = $this->post(route('kontak.store'), $data);

        $response->assertRedirect(route('kontak'));
        $this->assertDatabaseHas('pesan_kontaks', $data);
    }

    public function test_contact_form_requires_valid_email(): void
    {
        $data = [
            'nama' => 'Budi',
            'email' => 'invalid-email',
            'subjek' => 'Pertanyaan',
            'pesan' => 'Pesan',
        ];

        $response = $this->post(route('kontak.store'), $data);

        $response->assertSessionHasErrors('email');
    }
}
