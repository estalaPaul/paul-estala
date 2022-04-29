<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class CreationsTest extends TestCase
{
    public function test_creations_page_loads_correctly()
    {
        $this->get(route('creations'))
             ->assertStatus(200)
             ->assertInertia(fn (AssertableInertia $page) => $page
                ->component('Creations')
             );
    }
}
