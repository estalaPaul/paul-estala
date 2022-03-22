<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Traits\HasUnauthenticatedNavBar;
use Tests\DuskTestCase;

class ContactPageTest extends DuskTestCase
{
    use HasUnauthenticatedNavBar;

    private $social = [
        'GitHub',
        'LinkedIn',
        'Twitter',
        'pestala495@tutanota.com',
    ];

    public function test_contact_page_renders_correctly()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/contact')
                    ->waitForText('You can find me on...')
                    ->assertTitle('Contact | Paul Estala')
                    ->assertSee('Or shoot me an email at pestala495@tutanota.com.');

            foreach ($this->social as $social) {
                $browser->assertSeeLink($social);
            }

            $this->assertNavBarIsCorrectlyRendered($browser);
        });
    }
}
