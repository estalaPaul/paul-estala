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

To use you can just import the Cache manager and make use of the provider.

```
import Cache from '@ioc:EstalaPaul/AdonisJSCache'

await Cache.remember('products', async () => {
    const images = await Image.query().orderBy('categoryId').orderBy('updatedAt', 'desc')
    return await this.buildImagesObject(images)
})
```

### [Available Methods](#available-methods)

