<?php

namespace Database\Factories;

use App\Models\Sejarah;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Sejarah>
 */
class SejarahFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'konten' => $this->faker->paragraphs(3, asText: true),
        ];
    }
}
