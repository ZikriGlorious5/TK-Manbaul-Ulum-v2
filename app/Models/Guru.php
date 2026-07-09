<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Guru extends Model
{
    use HasUuids;

    protected $fillable = ['nama', 'nip', 'jabatan', 'foto_url', 'bio', 'urutan'];
}