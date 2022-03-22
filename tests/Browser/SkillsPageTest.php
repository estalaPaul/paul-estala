<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Traits\HasUnauthenticatedNavBar;
use Tests\DuskTestCase;

class SkillsPageTest extends DuskTestCase
{
    use HasUnauthenticatedNavBar;

    private $tools = [
        'PHP' => true,
        'JavaScript' => true,
        'TypeScript' => true,
        'Python' => true,
        'Laravel' => true,
        'AdonisJS' => true,
        'React' => true,
        'Tailwind CSS' => true,
        'MySQL' => true,
        'Docker' => true,
        'Git' => true,
        'Linux' => false,
    ];

    public function test_skills_page_renders_correctly()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/skills')
                    ->assertSee('Skills')
                    ->assertSee('These are some of the frameworks, languages, technologies and other things I feel I\'m good at.')
                    ->assertSee('Languages')
                    ->assertSee('Frameworks / Libraries')
                    ->assertSee('Technologies');

            foreach ($this->tools as $tool => $isLink) {
                match ($isLink) {
                    true => $browser->assertSeeLink($tool),
                    false => $browser->assertSee($tool)
                };
            }

            $this->assertNavBarIsCorrectlyRendered($browser);
        });
    }
}
