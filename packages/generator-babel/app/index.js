const _ = require("lodash");
const Generator = require("yeoman-generator");

const PIPELINE_PLUGIN = [ "@babel/plugin-proposal-pipeline-operator", { "proposal": "smart" } ];
const DECORATORS_PLUGIN = [ "@babel/plugin-proposal-decorators", { "legacy": true } ];
const CLASS_PROPERITES_PLUGIN = [ "@babel/plugin-proposal-class-properties", { "loose": false } ];

module.exports = class BabelGenerator extends Generator {

  async prompting() {
    Object.assign(this, await this.prompt([
      {
        type: "confirm",
        name: "react",
        message: "Is this a React project?"
      },
      {
        type: "checkbox",
        name: "plugins",
        message: "Which plugins would you link to install?",
        choices: [
          {
            name: "Pipeline Operator",
            value: "pipeline"
          },
          {
            name: "Decorators",
            value: "decorators"
          },
          {
            name: "Class Properties",
            value: "classProperties"
          }
        ]
      }
    ]));
  }

  async install() {
    await this.addDependencies([
      "@babel/cli",
      "@babel/core",
      "@babel/node",
      "@babel/preset-env",
      "@babel/register"
    ]);

    if (this.react) {
      await this.addDependencies([ "babel-preset-react-app" ]);
    }

    if (_.includes(this.plugins, "pipeline")) {
      await this.addDependencies([ "@babel/plugin-proposal-pipeline-operator" ]);
    }

    if (_.includes(this.plugins, "decorators")) {
      await this.addDependencies([ "@babel/plugin-proposal-decorators" ]);
    }

    if (_.includes(this.plugins, "classProperties")) {
      await this.addDependencies([ "@babel/plugin-proposal-class-properties" ]);
    }
  }

  writing() {
    let babelConfiguration = {
      "presets": [ this.react ? "babel-preset-react-app" : "@babel/preset-env" ],
      "plugins": _.reject([
        _.includes(this.plugins, "pipeline") ? PIPELINE_PLUGIN : null,
        _.includes(this.plugins, "decorators") ? DECORATORS_PLUGIN : null,
        _.includes(this.plugins, "classProperties") ? CLASS_PROPERITES_PLUGIN : null
      ], _.isNil)
    };

    this.fs.writeJSON(
      this.destinationPath(".babelrc"),
      babelConfiguration
    );
  }

  end() {
    this.spawnCommandSync("git", [ "add", ".babelrc", "package.json", "yarn.lock" ]);
    this.spawnCommandSync("git", [ "commit", "-m", "Add Babel" ]);
  }
};
