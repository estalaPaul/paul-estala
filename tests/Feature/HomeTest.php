<?php

namespace Tests\Feature;

use Illuminate\Support\Carbon;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia;

class HomeTest extends TestCase
{
    public function test_the_homepage_renders_correctly()
    {
        $this->travelTo(Carbon::parse('February 23rd, 2022'));
        $this->get('/')
             ->assertStatus(200)
             ->assertInertia(fn (AssertableInertia $page) => $page
                ->component('Home')
                ->where('years', 2)
             );
    }
}
