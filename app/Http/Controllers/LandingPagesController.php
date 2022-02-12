<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LandingPagesController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'years' => date('Y') - date('Y', strtotime('1 June 2019'))
        ]);
    }
}
