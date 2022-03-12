<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class CVTest extends TestCase
{
    public function test_example()
    {
        $this->get('/cv')
             ->assertStatus(200)
             ->assertInertia(fn (AssertableInertia $page) => $page
                ->component('CV')
             );
    }
}
