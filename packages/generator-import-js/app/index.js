const Generator = require("yeoman-generator");

module.exports = class BabelGenerator extends Generator {

  install() {
    this.addDevDependencies([ "import-js" ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath(".importjs.js"),
      this.destinationPath(".importjs.js")
    );
  }

  end() {
    this.spawnCommandSync("git", [ "add", ".importjs.js" ]);
    this.spawnCommandSync("git", [ "commit", "-m", "Add ImportJS" ]);
  }
};
