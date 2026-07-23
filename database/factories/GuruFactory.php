<?php

namespace Database\Factories;

use App\Models\Guru;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Guru>
 */
class GuruFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->name(),
            'nip' => $this->faker->unique()->numerify('###############'),
            'jabatan' => $this->faker->jobTitle(),
            'foto_url' => $this->faker->image(),
            'bio' => $this->faker->paragraph(),
            'urutan' => $this->faker->numberBetween(1, 10),
        ];
    }
}
