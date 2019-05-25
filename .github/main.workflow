workflow "Auto approve PR" {
  on = "pull_request"
  resolves = ["Approve PR"]
}

action "Filter for dependabot" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "actor dependabot[bot]"
}

action "Approve PR" {
  uses = "hmarr/auto-approve-action"
  needs = ["Filter for dependabot"]
  secrets = ["GITHUB_TOKEN"]
}
