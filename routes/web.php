<?php

use App\Http\Controllers\LandingPagesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(LandingPagesController::class)->group(function () {
    Route::get('/', 'home')->name('home');

    Route::get('/about', 'about')->name('about');
});

Route::inertia('/projects', 'Home')->name('projects');

Route::inertia('/contact', 'Home')->name('contact');
