- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
    - [Checking For Existence](#checking-for-existence)
    - [Retrieving Items](#retrieving-items)
    - [Storing Items](#storing-items)
    - [Retrieving and Storing](#retrieving-and-storing)
    - [Deleting Items](#deleting-items)
    - [Listing Keys](#listing-keys)

{ #introduction }
## [Introduction](#introduction)

AdonisJS Cache is an open source cache service provider for the [AdonisJS framework](https://adonisjs.com/) with full test coverage and TypeScript support. You can view the source code on [GitHub](https://github.com/estalaPaul/adonisjs-cache).

Currently, it only has support for a file driver but there are more drivers coming.

{ #installation }
## [Installation](#installation)

To install, you can use NPM.

```
npm i --save adonisjs-cache
```

Once installed, you should run the following command to generate the config file and add the provider.

```
node ace invoke adonisjs-cache
```

{ #usage }
## [Usage](#usage)

{ #checking-for-existence }
### [Checking For Existence](#checking-for-existence)

You can use the `has` method to determine if the given key exists in the cache store. A boolean will be returned indicating if the key exists or not.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

const existsInCache: boolean = await Cache.has('key')
```

{ #retrieving-items }
### [Retrieving Items](#retrieving-items)

The `get` method is used to retrieve an item from the cache store. If the item exists, we get the data stored, otherwise we get null.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

const value = await Cache.get('key')
```

{ #storing-items }
### [Storing Items](#storing-items)

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

{ #retrieving-and-storing }
### [Retrieving and Storing](#retrieving-and-storing)

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
}) // Store until you explicitly delete.
```

{ #deleting-items }
### [Deleting Items](#deleting-items)

To delete an entry, you can use the `delete` method. The method will return a boolean indicating if the deletion was completed successfully.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

await Cache.delete('key')
```

If you'd like to remove all entries in cache, you can use the `flush` method. This removes all existing cache entries.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

await Cache.flush()
```

{ #listing-keys }
### [Listing Keys](#listing-keys)

If you need a list of all keys currently stored in cache, you can use the `keys` method to get an array of key names.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

const allKeys: string[] = await Cache.keys()
```
