<?php

namespace Database\Factories;

use App\Models\Galeri;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Galeri>
 */
class GaleriFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'foto_url' => $this->faker->image(),
            'caption' => $this->faker->sentence(),
        ];
    }
}
