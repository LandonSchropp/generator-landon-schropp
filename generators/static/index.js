const Generator = require('yeoman-generator');

module.exports = class StaticGenerator extends Generator {

  initializing() {
    this.composeWith(require.resolve('../gitignore'));
    this.composeWith(require.resolve('../package'));
    this.composeWith(require.resolve('../eslint'));
    this.composeWith(require.resolve('../babel'));
    this.composeWith(require.resolve('../webpack'));
    this.composeWith(require.resolve('../gulp'));
  }
};
