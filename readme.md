# Landon Schropp's Yeoman Generators

This is my personal, *opinionated* collection of Yeoman generators to make spinning up JavaScript
projects easy and enjoyable.

## Quick Start

Run the generator of your choice with [NPX](https://github.com/zkat/npx). NPX allows you to run the
generator once without having to install anything. Answer the generator's prompts, and you're done!

``` sh
npx -p yo -p @landonschropp/generator-<generator> yo @landonschropp/<generator>
```

For example, to run the ESLint generator:

``` sh
npx -p yo -p @landonschropp/generator-eslint yo @landonschropp/eslint
```

You can also see the documentation and options for each generator by including the `--help` flag.

``` sh
npx -p -p @landonschropp/generator-eslint yo @landonschropp/eslint --help
```

## The Generators

This project ships with several generators.

* [babel](packages/generator-babel/readme.md): Adds support for Babel along with my standard
  settings.
* [eslint](packages/generator-eslint/readme.md): Adds my personal ESLint configuration to a project.
* [webpack](packages/generator-webpack/readme.md): Configures Webpack to compile a source JavaScript
  file using Babel.
* [language-server](packages/generator-language-server/readme.md): Configures a JavaScript language
  server.
* [import-js](packages/generator-import-js/readme.md): Adds ImportJS to a project.

If you'd like, you can run any of these generators independently. However, please be aware that some
generators depend on others.

## Development

### Updating

Occasionally, you'll run into a need to update all of your packages. This can happen when you need
to fix GitHub security alerts.

To update all of the dependencies in all of the packages, run:

```
yarn upgrade && lerna exec yarn upgrade
```

### Publishing

Before you can publish your packages, you'll need to bump the package versions. The easiest way to
do this is to use Lerna.

``` sh
lerna version
```

To publish all of the packages, set the `NPM_AUTH_TOKEN` environment variable and then run the
following command:

``` sh
yarn publish-packages
```

### Example Project

While developing a generator, it's common to create an empty directory to run the generator in.
Because this is done so frequently, this repository includes a handy script that does this
automatically.

``` sh
yarn set-up-example-project
```

This script does a few things for you:

* It automatically calls `lerna boostrap` so you don't have to.
* It creates a new `example` directory, sets it up as a Node package, and initializes a Git
  repository so you can any changes your package may introduce.
* It links all of the packages in the `packages` directory via Yarn.

Once the script is done, all you need to do is change into the `example` directory and run
`yo @landonschropp/<generator>` to test out one of the generators.

## TODOs

See the [todo](/todo.md) document for more information on what still needs to be done.
