const Generator = require('yeoman-generator');

module.exports = class BabelGenerator extends Generator {

  // Override the default Yeoman installation to only use Yarn.
  install() {
    this.yarnInstall([
      "@babel/cli",
      "@babel/core",
      "@babel/node",
      "@babel/preset-env",
      "@babel/register"
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
  }
};
