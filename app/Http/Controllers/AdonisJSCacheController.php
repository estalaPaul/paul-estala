<?php

namespace App\Http\Controllers;

use App\Helpers\Documentation;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class AdonisJSCacheController extends Controller
{
    public function __construct(private Documentation $documentation)
    {
    }

    public function render(Request $request): View
    {
        $content = $this->documentation->getContents($request->path());

        if (empty($content)) {
            abort(404);
        }

        return view('adonisjs-cache', ['content' => $content]);
    }
}
