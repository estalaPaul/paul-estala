<?php

namespace Tests\Browser;

use Carbon\Carbon;
use Laravel\Dusk\Browser;
use Tests\Browser\Traits\HasUnauthenticatedNavBar;
use Tests\DuskTestCase;

class HomePageTest extends DuskTestCase
{
    use HasUnauthenticatedNavBar;

    public function test_home_page_renders_correctly()
    {
        $this->browse(function (Browser $browser) {
            $years = Carbon::now()->diffInYears(new Carbon('January 1st 2019'));
            $browser->visit('/')
                    ->waitForText('Hey there!')
                    ->assertTitle('Home | Paul Estala')
                    ->assertSee("I'm a software engineer specializing in full stack web development with $years years of professional experience.")
                    ->assertVisible('img[src="/img/logo.svg"]')
                    ->assertVisible('nav a[href="/"] > h1');

            $this->assertNavBarIsCorrectlyRendered($browser);
        });
    }
}
