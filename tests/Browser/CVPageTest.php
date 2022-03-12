<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Traits\HasUnauthenticatedNavBar;
use Tests\DuskTestCase;

class CVPageTest extends DuskTestCase
{
    use HasUnauthenticatedNavBar;

    public function test_cv_page_renders_correctly()
    {
        $this->markTestIncomplete();
        $this->browse(function (Browser $browser) {
            $browser->visit('/cv')
                    ->waitForText('Paul Estala')
                    ->assertTitle('Software Engineer')
                    ->assertSee("I'm a software engineer specializing in full stack web development with 2 years of professional experience.")
                    ->assertVisible('img[src="/img/logo.svg"]')
                    ->assertVisible('nav a[href="/"] > h1');

            $this->assertNavBarIsCorrectlyRendered($browser);
        });
    }
}
