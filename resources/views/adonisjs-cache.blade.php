<!DOCTYPE html>
<html class="scroll-smooth">
    <head>
        <title>AdonisJS Cache</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="description" content="AdonisJS Cache is a cache service provider for the AdonisJS framework with support for file cache." />
        <meta name="keywords" content="AdonisJS, Cache, File Cache"/>

        <meta name="twitter:creator" content="@EstalaPaul">
        <meta name="twitter:url" content="https://adonisjs-cache.estalapaul.me/home" />
        <meta name="twitter:image" content="https://adonisjs-cache.estalapaul.me/favicon.ico" />
        <meta name="twitter:image:alt" content="AdonisJS Cache" />
        <meta name="twitter:title" content="Cache provider for AdonisJS">
        <meta name="twitter:card" content="app">

        <meta name="og:image" content="https://adonisjs-cache.estalapaul.me/favicon.ico" />
        <meta name="og:url" content="https://adonisjs-cache.estalapaul.me/home" />
        <meta name="og:title" content="Cache provider for AdonisJS">
        <meta name="og:description" content="Cache provider for AdonisJS">
        <meta name="og:type" content="website">

        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <link href="{{ mix('/css/adonisjs-cache.css') }}" rel="stylesheet" />
    </head>
    <body>
        <nav class="text-center w-full mt-10">
            <h1>
                <a class="transition-color duration-300 border-white hover:border-black border-b-2 text-4xl font-bold text-center" href="/introduction">
                    AdonisJS Cache
                </a>
            </h1>
        </nav>
        <main class="p-5 flex overflow-x-hidden">
            <div class="w-2/3 mx-auto">
                <x-markdown theme="github-dark">
                    {!! $content !!}
                </x-markdown>
            </div>
        </main>
    </body>
</html>
