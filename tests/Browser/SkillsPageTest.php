<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Traits\HasUnauthenticatedNavBar;
use Tests\DuskTestCase;

class SkillsPageTest extends DuskTestCase
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

    public function test_skills_page_renders_correctly()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/skills')
                    ->assertSee('Languages and Tools')
                    ->assertSee('These are some of the languages and tools that I enjoy working with and use on a regular basis.');

            foreach ($this->tools as $tool) {
                $browser->assertSeeLink($tool);
            }

            $this->assertNavBarIsCorrectlyRendered($browser);
        });
    }
}
