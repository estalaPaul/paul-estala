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

    public function about()
    {
        return Inertia::render('About', [
            'age' => Carbon::now()->diffInYears(new Carbon('September 14th, 1997'))
        ]);
    }
}
