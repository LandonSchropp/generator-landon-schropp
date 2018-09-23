const Generator = require('yeoman-generator');

const GitignoreGenerator = require('gitignore');
const PackageGenerator = require('package');
const ESLintGenerator = require('eslint');
const BabelGenerator = require('babel');
const WebpackGenerator = require('webpack');

module.exports = class StaticGenerator extends Generator {

  initializing() {
    this.composeWith(GitignoreGenerator);
    this.composeWith(PackageGenerator);
    this.composeWith(ESLintGenerator);
    this.composeWith(BabelGenerator);
    this.composeWith(WebpackGenerator);
  }
};
