<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ContactTest extends TestCase
{
    public function test_adonisjs_page_loads_correctly()
    {
        $this->get('')
             ->assertStatus(200)
             ->assertInertia(fn (AssertableInertia $page) => $page
                ->component('AdonisJSCache')
             );
    }
}
