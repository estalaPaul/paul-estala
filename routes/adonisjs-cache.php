<?php

use App\Http\Controllers\AdonisJSCacheController;
use Illuminate\Support\Facades\Route;

Route::domain('adonisjs-cache.estalapaul.me')->group(function () {
    Route::get('/', fn () => redirect()->route('documentation', ['section' => 'home']));

    Route::get('{section}', [AdonisJSCacheController::class, 'render'])->name('documentation');
});
