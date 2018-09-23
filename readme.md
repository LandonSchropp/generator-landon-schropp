# Landon Schropp's Yeoman Generators

This is an *opinionated* collection of Yeoman generators to make spinning up JavaScript projects
easy and enjoyable.

## Quick Start

Create a directory for your project and change into it.

``` sh
mkdir example
cd example
```

Next, initialize the directory as a git repository.

```
git init
```

Run the generator with [NPX](https://github.com/zkat/npx). This allows you to run the
generator once without having to install anything. Answer all the prompts, and you're done!

``` sh
npx -p yo -p https://github.com/LandonSchropp/generator-landon-schropp yo landon-schropp:static
```

Finally, add all of your files and commit them.

``` sh
git add .
git commit -m "Generate a static site build environment"
```

That's it! You're ready to start working on your static site.

## Running the Generators

This project ships with several generators. If you'd like, these generators can all

* `gitignore`: Generates a project `.gitignore` file.
* `package`: Creates a clean `package.json` file.
* `eslint`: Adds ESLint along with a preconfigured
* `babel`: Adds support for Babel.
* `webpack`: Configures Webpack to compile a source JavaScript file using Babel.
* `static`: Sets up a static site development environment.

If you'd like, you can run any of these generators independently. However, please be aware that some
generators depend on others.

``` sh
npx -p yo -p https://github.com/LandonSchropp/generator-landon-schropp yo landon-schropp:<GENERATOR>
```

For example, to run the ESLint generator:

``` sh
npx -p yo -p https://github.com/LandonSchropp/generator-landon-schropp yo landon-schropp:eslint
```

You can also see the documentation and options for each generator by including the `--help` flag.

``` sh
npx \
  -p yo \
  -p https://github.com/LandonSchropp/generator-landon-schropp \
  yo landon-schropp:<GENERATOR> --help
```

## TODOs

See the [todo](/todo.md) document for more information on what still needs to be done.
