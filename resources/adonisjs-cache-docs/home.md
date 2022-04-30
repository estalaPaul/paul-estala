## [Introduction](#introduction)

AdonisJS Cache is an open source cache service provider for the [AdonisJS framework](https://adonisjs.com/) with full test coverage and TypeScript support. You can view the source code on [GitHub](https://github.com/estalaPaul/adonisjs-cache).

Currently, it only has support for a file driver but there are more drivers coming.

## [Installation](#installation)

To install, you can use NPM.

```
npm i --save adonisjs-cache
```

Once installed, you should run the following command to generate the config file and add the provider.

```
node ace invoke adonisjs-cache
```

## [Usage](#usage)

### [Checking For Existence](#checking-for-existence)

You can use the `has` method to determine if the given key exists in the cache store. A boolean will be returned indicating if the key exists or not.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

const existsInCache: boolean = await Cache.has('key')
```

### [Retrieving Item](#retrieving-item)

The `get` method is used to retrieve an item from the cache store. If the item exists, we get the data stored, otherwise we get null.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

const value = await Cache.get('key')
```

### [Storing Item](#retrieving-item)

To store an item in cache, we can use the `set` method.

The third parameter in this function, indicates the amount of seconds you'd like to store the cache entry for.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

await Cache.set('key', 'value', 10) // Store for 10 seconds.
```

If you'd like to store the item until you explicitly delete it, you can omit the third parameter.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

await Cache.set('key', 'value') // Store until you delete the entry.
```

The set method will overwrite any existing data under the given key, if you'd like to store the item only if it doesn't exist, use the `add` method.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

await Cache.add('key', 'value', 10)
```

### [Retrieve and Store](#retrieving-and-store)

If you'd like to get a cache entry and also store a default value if it doesn't exist, you can use the `remember` method.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

await Cache.remember('key', () => {                                                                                                                                          
    return 'value'
}, 10) // Store for 10 seconds.
```

Similar to the `set` method, you can omit the third parameter to store until you delete the item.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

await Cache.remember('key', () => {                                                                                                                                          
    return 'value'
}) // Store until explicitly delete.
```
