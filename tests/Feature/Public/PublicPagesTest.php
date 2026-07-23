<?php

namespace Tests\Feature\Public;

use App\Models\Kegiatan;
use App\Models\Prestasi;
use App\Models\Guru;
use App\Models\Galeri;
use App\Models\Sejarah;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PublicPagesTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_loads(): void
    {
        $response = $this->get(route('home'));

        $response->assertStatus(200);
    }

    public function test_kegiatan_page_loads_with_data(): void
    {
        Kegiatan::factory(3)->create();

        $response = $this->get(route('kegiatan'));

        $response->assertStatus(200);
        $response->assertViewHas('kegiatans');
    }

    public function test_prestasi_page_loads_with_data(): void
    {
        Prestasi::factory(3)->create();

        $response = $this->get(route('prestasi'));

        $response->assertStatus(200);
        $response->assertViewHas('prestasis');
    }

    public function test_guru_page_loads_with_data(): void
    {
        Guru::factory(3)->create();

        $response = $this->get(route('guru'));

        $response->assertStatus(200);
        $response->assertViewHas('gurus');
    }

    public function test_galeri_page_loads_with_data(): void
    {
        Galeri::factory(5)->create();

        $response = $this->get(route('galeri'));

        $response->assertStatus(200);
        $response->assertViewHas('galeris');
    }

    public function test_sejarah_page_loads(): void
    {
        Sejarah::factory()->create();

        $response = $this->get(route('sejarah'));

        $response->assertStatus(200);
        $response->assertViewHas('sejarah');
    }

    public function test_kontak_page_loads(): void
    {
        $response = $this->get(route('kontak'));

        $response->assertStatus(200);
    }

    public function test_public_pages_do_not_require_auth(): void
    {
        $routes = [
            'home',
            'kegiatan',
            'prestasi',
            'guru',
            'galeri',
            'sejarah',
            'kontak',
        ];

        foreach ($routes as $route) {
            $response = $this->get(route($route));
            $this->assertNotEquals(302, $response->status(), "Route '$route' requires auth but shouldn't");
        }
    }
}
