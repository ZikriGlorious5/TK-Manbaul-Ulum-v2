<?php

namespace Database\Factories;

use App\Models\Kegiatan;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Kegiatan>
 */
class KegiatanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'judul' => $this->faker->sentence(3),
            'deskripsi' => $this->faker->paragraph(),
            'foto_url' => $this->faker->image(),
            'tanggal' => $this->faker->date(),
        ];
    }
}
