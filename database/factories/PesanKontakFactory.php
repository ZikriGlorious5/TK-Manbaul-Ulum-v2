<?php

namespace Database\Factories;

use App\Models\PesanKontak;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PesanKontak>
 */
class PesanKontakFactory extends Factory
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
            'email' => $this->faker->email(),
            'subjek' => $this->faker->sentence(),
            'pesan' => $this->faker->paragraph(),
        ];
    }
}
