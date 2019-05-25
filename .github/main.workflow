workflow "Auto approve PR" {
  resolves = ["hmarr/auto-approve-action"]
  on = "pull_request"
}

action "Filter for dependabot" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "actor dependabot[bot]"
}

action "hmarr/auto-approve-action" {
  uses = "hmarr/auto-approve-action"
  needs = ["Filter for dependabot"]
  secrets = ["GITHUB_TOKEN"]
}
