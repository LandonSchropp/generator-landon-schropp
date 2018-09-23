const Generator = require('yeoman-generator');

module.exports = class ESLintGenerator extends Generator {

  writing() {
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
  }
};
