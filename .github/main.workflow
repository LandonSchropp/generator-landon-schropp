workflow "Main" {
  on = "push"
  resolves = ["Publish"]
}

action "Build" {
  uses = "actions/npm@master"
  runs = "yarn"
  args = "install"
}

action "Lint" {
  needs = "Build"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "lint"
}

action "Master" {
  needs = "Lint"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Publish" {
  needs = "Master"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
