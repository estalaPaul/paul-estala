<?php

use App\Http\Controllers\LandingPagesController;
use Illuminate\Support\Facades\Route;

Route::controller(LandingPagesController::class)->group(function () {
    Route::get('/', 'home')->name('home');
});

Route::inertia('/skills', 'Skills')->name('skills');

Route::inertia('/creations', 'Creations')->name('creations');

Route::inertia('/contact', 'Contact')->name('contact');
