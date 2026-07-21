<?php

namespace Database\Factories;

use App\Models\Prestasi;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Prestasi>
 */
class PrestasiFactory extends Factory
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
            'tahun' => $this->faker->year(),
        ];
    }
}
