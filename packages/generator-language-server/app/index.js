const Generator = require('yeoman-generator');

module.exports = class LanguageServerGenerator extends Generator {

  install() {
    this.yarnInstall([ "javascript-typescript-langserver" ], { dev: true });
  }

  writing() {
    this.fs.copy(
      this.templatePath("jsconfig.json"),
      this.destinationPath("jsconfig.json")
    );

    this.spawnCommandSync('git', [
      "git add jsconfig.json",
      "commit -m 'Add TypeScript language server'"
    ]);
  }
};
