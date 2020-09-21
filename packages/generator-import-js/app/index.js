const Generator = require('yeoman-generator');

module.exports = class BabelGenerator extends Generator {

  install() {
    this.yarnInstall([ "import-js" ], { dev: true });
  }

  writing() {
    this.fs.copy(
      this.templatePath('.importjs.js'),
      this.destinationPath('.importjs.js')
    );
  }
};
