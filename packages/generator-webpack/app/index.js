const Generator = require("yeoman-generator");

module.exports = class WebpackGenerator extends Generator {

  // Override the default Yeoman installation any only use Yarn.
  install() {
    this.yarnInstall([ "webpack", "babel-loader" ]);
  }

  writing() {
    this.fs.write(this.destinationPath("source/javascript/index.js"), "");

    this.fs.copy(
      this.templatePath("webpack.config.babel.js"),
      this.destinationPath("webpack.config.babel.js")
    );
  }
};
