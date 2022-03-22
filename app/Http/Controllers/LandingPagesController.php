<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;

class LandingPagesController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'years' => Carbon::now()->diffInYears(new Carbon('January 1st 2019'))
        ]);
    }
}
