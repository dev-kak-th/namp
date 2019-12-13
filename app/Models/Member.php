<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $table = 'member';

    protected $fillable = [
        'username', 'password', 'firstname', 'lastname',
        'image', 'address', 'districtId', 'amphurId'
    ];
}
