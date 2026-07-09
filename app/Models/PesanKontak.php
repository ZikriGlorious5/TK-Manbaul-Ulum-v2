<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class PesanKontak extends Model
{
    use HasUuids;

    protected $fillable = ['nama', 'email', 'subjek', 'pesan'];
}