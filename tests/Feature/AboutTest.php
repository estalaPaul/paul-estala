<?php

namespace Tests\Feature;

use Illuminate\Support\Carbon;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class AboutTest extends TestCase
{
    public function test_about_page_loads_correctly()
    {
        $this->travelTo(Carbon::parse('February 23rd, 2022'));
        $this->get('/about')
             ->assertStatus(200)
             ->assertInertia(fn (AssertableInertia $page) => $page
                ->component('About')
                ->where('age', 24)
             );
    }
}
