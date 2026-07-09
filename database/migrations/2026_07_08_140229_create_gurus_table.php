<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('gurus', function (Blueprint $table) {
        $table->uuid('id')->primary();
        $table->string('nama');
        $table->string('nip')->nullable();
        $table->string('jabatan');
        $table->string('foto_url')->nullable();
        $table->text('bio')->nullable();
        $table->integer('urutan')->nullable();
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gurus');
    }
};
