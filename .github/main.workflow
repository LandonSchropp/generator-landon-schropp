workflow "Main" {
  on = "push"
  resolves = ["Publish"]
}

action "Build" {
  uses = "./actions/yarn"
  args = "install"
}

action "Lint" {
  needs = "Build"
  uses = "./actions/yarn"
  args = "lint"
}

action "Master" {
  needs = "Lint"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Publish" {
  needs = "Master"
  uses = "./actions/yarn"
  args = "publish-packages"
  secrets = ["NPM_AUTH_TOKEN"]
}
