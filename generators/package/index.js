const Generator = require('yeoman-generator');

module.exports = class PackageGenerator extends Generator {

  async prompting() {

    this.packageConfiguration = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What's your package's name?",
        default: this.appname,
        store: true
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your package?',
        default: "",
        store: true
      },
      {
        type: 'input',
        name: 'repository',
        message: "What's your package's repository URL?",
        store: true
      },
      {
        type: 'input',
        name: 'authorName',
        message: "What's your name?",
        default: this.user.git.name(),
        store: true
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: "What's your email?",
        default: this.user.git.email(),
        store: true
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license would you like to use?',
        default: 'UNLICENSED',
        store: true
      },
      {
        type: 'confirm',
        name: 'private',
        message: 'Would you like to make the package private?',
        store: true
      }
    ]);
  }

  configuring() {
    this.fs.copyTpl(
      this.templatePath('package.json.ejs'),
      this.destinationPath('package.json'),
      this.packageConfiguration
    );
  }

  install() {
    this.yarnInstall();
  }
};
