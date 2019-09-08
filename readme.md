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

This project ships with several generators. If you'd like, these generators can all

* [eslint](packages/generator-eslint/readme.md): Adds my personal ESLint configuration to a project.
* [babel](packages/generator-babel/readme.md): Adds support for Babel along with my standard
  settings.
* [webpack](packages/generator-webpack/readme.md): Configures Webpack to compile a source JavaScript
  file using Babel.

If you'd like, you can run any of these generators independently. However, please be aware that some
generators depend on others.

## Local Development

### Publishing

To publish all of the packages, set the `NODE_AUTH_TOKEN` environment variable and then run the
following command:

``` sh
yarn publish-packages
```

### Development Environment

While developing a generator, it's common to create an empty directory to run the generator in. This
is easy with the following steps:

First, if you haven't done so already, bootstrap the repo with Lerna. Then, switch into your
generator's directory and link it.

``` sh
lerna bootstrap
cd packages/<generator>
yarn link
```

Next, initialize the Git repository in your empty folder and add `node_modules` to the `.gitignore`
file.

``` sh
git init
echo '/node_modules' > ~/.gitignore
```

Generate a `package.json` file and install `yo`.

``` sh
yarn init
yarn add -D yo
```

Link your generator to the empty directory.

``` sh
yarn link @landonschropp/<generator>
```

Finally, you can run the `yo` command normally.

``` sh
yo @landonschropp/<generator>
```

## TODOs

See the [todo](/todo.md) document for more information on what still needs to be done.
