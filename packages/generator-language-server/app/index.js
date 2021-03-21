const Generator = require("yeoman-generator");

module.exports = class LanguageServerGenerator extends Generator {

  async install() {
    await this.addDevDependencies([ "javascript-typescript-langserver" ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath("jsconfig.json"),
      this.destinationPath("jsconfig.json")
    );
  }

  end() {
    this.spawnCommandSync("git", [ "add", "jsconfig.json", "package.json", "yarn.lock" ]);
    this.spawnCommandSync("git", [ "commit", "-m", "Add TypeScript language server" ]);
  }
};
