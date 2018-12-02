workflow "Main" {
  on = "push"
  resolves = ["Publish"]
}

action "Build" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "install"
}

action "Lint" {
  needs = "Build"
  uses = "docker://node:10"
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
  uses = "docker://node:10"
  runs = "yarn"
  args = "publish-packages"
  secrets = ["NPM_AUTH_TOKEN"]
}
