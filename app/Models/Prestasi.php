<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Prestasi extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = ['judul', 'deskripsi', 'foto_url', 'tahun'];
}