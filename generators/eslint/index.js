const Generator = require('yeoman-generator');

module.exports = class ESLintGenerator extends Generator {

  constructor(args, opts) {
    super(args, opts);

    this.option('browser', {
      desc: 'Generats browser ESLint configuration',
      type: Boolean,
      default: false
    });
  }

  // Override the default Yeoman installation any only use Yarn.
  install() {
    this.yarnInstall([
      "eslint",
      "eslint-config-optimum-energy",
      "babel-eslint"
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('eslintrc.js.ejs'),
      this.destinationPath('.eslintrc.js'),
      this.options
    );

    this.fs.copy(
      this.templatePath('eslintignore'),
      this.destinationPath('.eslintignore')
    );
  }
};
