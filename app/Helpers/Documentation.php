<?php

namespace App\Helpers;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;

class Documentation
{
    public function __construct(private Filesystem $filesystem)
    {
    }

    public function getContents(string $path): ?string
    {
        $fullPath = base_path("resources/adonisjs-cache-docs/{$path}.md");

        if (App::isProduction()) {
            return Cache::rememberForever("adonisjs_cache_docs_$path", fn () => $this->getFileContents($fullPath));
        }

        return $this->getFileContents($fullPath);
    }

    private function getFileContents(string $path): ?string
    {
        if ($this->filesystem->exists($path)) {
            return $this->filesystem->get($path);
        }
    }
}
