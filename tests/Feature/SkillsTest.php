<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class SkillsTest extends TestCase
{
    public function test_skills_page_loads_correctly()
    {
        $this->get(route('skills'))
             ->assertStatus(200)
             ->assertInertia(fn (AssertableInertia $page) => $page
                ->component('Skills')
             );
    }
}
