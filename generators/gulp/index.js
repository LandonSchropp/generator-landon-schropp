const Generator = require('yeoman-generator');
const _ = require('lodash');

module.exports = class ESLintGenerator extends Generator {

  install() {
    this.yarnInstall([
      'autoprefixer',
      'del',
      'gulp-connect',
      'gulp-ejs',
      'gulp-gh-pages',
      'gulp-if',
      'gulp-imagemin',
      'gulp-plumber',
      'gulp-postcss',
      'gulp-rename',
      'gulp-sass',
      'gulp-sass-glob',
      'gulp-sitemap',
      'gulp-sourcemaps',
      'gulp-util',
      'gulp@^4.0.0',
      'postcss-import',
      'normalize.css',
      'webpack-stream'
    ]);
  }

  async writing() {
    this.fs.copy(
      this.templatePath('gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js')
    );

    this.fs.copy(
      this.templatePath('robots.txt'),
      this.destinationPath('source/robots.txt')
    );

    this.fs.copy(
      this.templatePath('index.sass'),
      this.destinationPath('source/stylesheets/index.sass')
    );

    let metadata = _.pick(
      await this.fs.readJSON(this.destinationPath('package.json')),
      [
        'name',
        'description'
      ]
    );

    this.fs.copyTpl(
      this.templatePath('index.ejs'),
      this.destinationPath('source/pages/index.ejs'),
      metadata
    );

    this.fs.copy(
      this.templatePath('postcss.config.js'),
      this.destinationPath('postcss.config.js')
    );

    this.fs.extendJSON(
      this.destinationPath('package.json'),
      {
        scripts: {
          "clean": "gulp clean",
          "build": "gulp build",
          "deploy": "gulp deploy",
          "watch": "gulp watch"
        }
      }
    );
  }
};
