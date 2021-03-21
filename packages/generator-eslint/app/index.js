const Generator = require("yeoman-generator");

module.exports = class ESLintGenerator extends Generator {

  async prompting() {
    Object.assign(this, await this.prompt([
      {
        type: "confirm",
        name: "browser",
        message: "Is this a browser project?"
      }
    ]));
  }

  // Override the default Yeoman installation any only use Yarn.
  install() {
    this.addDevDependencies([
      "eslint",
      "eslint-config-optimum-energy",
      "babel-eslint"
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("eslintrc.js.ejs"),
      this.destinationPath(".eslintrc.js"),
      this
    );

    this.fs.copy(
      this.templatePath("eslintignore"),
      this.destinationPath(".eslintignore")
    );

    this.fs.extendJSON(
      this.destinationPath("package.json"),
      { scripts: { "lint": "eslint --max-warnings=0 ." } }
    );
  }

  end() {
    this.spawnCommandSync("git", [ "add", ".eslintrc.js", ".eslintignore", "package.json" ]);
    this.spawnCommandSync("git", [ "commit", "-m", "Add ESLint" ]);
  }
};
