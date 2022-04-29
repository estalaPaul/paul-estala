<!DOCTYPE html>
<html class="scroll-smooth">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="description" content="AdonisJS Cache is a cache service provider for the AdonisJS framework with support for file cache." />
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <link href="{{ mix('/css/adonisjs-cache.css') }}" rel="stylesheet" />
    </head>
    <body>
        <nav>
            <ul class="flex justify-evenly py-5 px-1">
                <li>
                    <h1>
                        <a class="transition-color duration-300 border-white hover:border-black border-b-2 text-2xl font-bold text-center" href="/introduction">
                            AdonisJS Cache
                        </a>
                    </h1>
                </li>
            </ul>
        </nav>
        <main class="px-5 flex">
            <div class="w-2/3 mx-auto">
                <x-markdown theme="github-dark">
                    {!! $content !!}
                </x-markdown>
            </div>
        </main>
    </body>
</html>
