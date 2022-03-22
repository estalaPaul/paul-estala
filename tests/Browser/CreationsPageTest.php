<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Traits\HasUnauthenticatedNavBar;
use Tests\DuskTestCase;

class CreationsPageTest extends DuskTestCase
{
    use HasUnauthenticatedNavBar;

    public function test_creations_page_renders_correctly()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/creations')
                    ->waitForText("Some projects I'm proud of")
                    ->assertTitle('Creations | Paul Estala')
                    ->assertSee('A website showcasing sports uniforms created by the company Seri-Color and allowing for contact with the company.')
                    ->assertSee('I also created the website you\'re currently looking at! You can see the source code on GitHub.')
                    ->assertSeeLink('GitHub')
                    ->assertVisible('img[src="/img/creations/sericolor.webp"]')
                    ->assertVisible('a[href="https://sericoloruniformes.com"]');

            $this->assertNavBarIsCorrectlyRendered($browser);
        });
    }
}
