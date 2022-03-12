<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Traits\HasUnauthenticatedNavBar;
use Tests\DuskTestCase;

class CreationsPageTest extends DuskTestCase
{
    use HasUnauthenticatedNavBar;

    public function test_home_page_renders_correctly()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/creations')
                    ->waitForText("Some projects I'm proud of")
                    ->assertTitle('Creations | Paul Estala')
                    ->assertSee('A website showcasing sports uniforms created by the company Seri-Color and allowing for contact with the company.')
                    ->assertSee('A command line interface that allows users to interact with their Google Tasks. Created utilizing Python and the Google Tasks API Python Library.')
                    ->assertVisible('img[src="/img/creations/sericolor.webp"]')
                    ->assertVisible('img[src="/img/creations/gtcli.webp"]')
                    ->assertVisible('a[href="https://github.com/estalaPaul/gtcli"]')
                    ->assertVisible('a[href="https://sericoloruniformes.com"]')
                    ->assertVisible('nav a[href="/"] > h1');

            $this->assertNavBarIsCorrectlyRendered($browser);
        });
    }
}
