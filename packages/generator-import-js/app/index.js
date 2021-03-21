const Generator = require("yeoman-generator");

module.exports = class BabelGenerator extends Generator {

  async install() {
    await this.addDevDependencies([ "import-js" ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath(".importjs.js"),
      this.destinationPath(".importjs.js")
    );
  }

  end() {
    this.spawnCommandSync("git", [ "add", ".importjs.js", "package.json", "yarn.lock" ]);
    this.spawnCommandSync("git", [ "commit", "-m", "Add ImportJS" ]);
  }
};
