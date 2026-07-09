<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Kegiatan extends Model
{
    use HasUuids;

    protected $fillable = ['judul', 'deskripsi', 'foto_url', 'tanggal'];
}