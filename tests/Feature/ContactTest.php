<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ContactTest extends TestCase
{
    public function test_contact_page_loads_correctly()
    {
        $this->get(route('contact'))
             ->assertStatus(200)
             ->assertInertia(fn (AssertableInertia $page) => $page
                ->component('Contact')
             );
    }
}
