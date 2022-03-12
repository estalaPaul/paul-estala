<?php

namespace Tests\Browser\Traits;

use Laravel\Dusk\Browser;

trait HasUnauthenticatedNavBar
{
    public function assertNavBarIsCorrectlyRendered(Browser $browser)
    {
        $browser->assertSeeLink('Paul Estala')
                ->assertSeeLink('Creations')
                ->assertSeeLink('About')
                ->assertSeeLink('Contact')
                ->assertVisible('nav a[href="/"] > h1');
    }
}
