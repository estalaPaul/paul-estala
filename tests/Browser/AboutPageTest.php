<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Traits\HasUnauthenticatedNavBar;
use Tests\DuskTestCase;

class AboutPageTest extends DuskTestCase
{
    use HasUnauthenticatedNavBar;

    private $tools = [
        'PHP',
        'JavaScript',
        'Python',
        'Node.js',
        'Laravel',
        'AdonisJS',
        'React',
        'Tailwind CSS',
        'MySQL',
    ];

    public function test_about_page_renders_correctly()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/about')
                    ->waitForText("I'm Paul Estala, a 24 year old Software Engineer from Chihuahua, Mexico.")
                    ->assertTitle('About | Paul Estala')
                    ->assertSee("Currently coding full time for a living but also as a hobby. If I'm not coding, I'm probably spending time with my family or doing some sort of exercise.")
                    ->assertSee('See some of the languages and tools I work with')
                    ->assertVisible('div.w-24.h-24 img[src="/img/headshot.webp"]');

            $browser->click('a[href="#tech"]')
                    ->assertFragmentIs('tech')
                    ->assertSee('Languages and Tools')
                    ->assertSee('These are some of the languages and tools that I enjoy working with and use on a regular basis.');

            foreach ($this->tools as $tool) {
                $browser->assertSeeLink($tool);
            }

            $this->assertNavBarIsCorrectlyRendered($browser);
        });
    }
}
