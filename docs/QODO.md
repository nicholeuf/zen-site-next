# Qodo (Qodo Merge 2.0) in this repo

This repository uses **Qodo Merge 2.0** (previously PR-Agent) to automate PR reviews and descriptions. The project-oriented guidance lives in this file; the live configuration lives in the GitHub wiki.

## Where the configuration lives

Qodo reads its configuration from the GitHub wiki file:
- https://github.com/nicholeuf/zen-site-next/wiki/.pr_agent.toml

That wiki file is the source of truth for the commands Qodo runs and the PR events it responds to.

## What Qodo does here

When a PR is opened, reopened, or marked **Ready for review** (including draft PRs), Qodo will:
- Generate or improve the PR title and description
- Post review feedback with suggestions
- Offer automated improvements


## Current commands (summary)

The current command set is defined in the wiki config, but typically includes:
- `/describe` (with `--pr_description.final_update_message=false`)
- `/agentic_review`
- `/agentic_improve`

See the wiki for the exact, up-to-date command list:
- https://github.com/nicholeuf/zen-site-next/wiki/.pr_agent.toml

## Changelog updates

Changelog updates are **manual** in this repo and are initiated by contributors.
When the `/changelog` command is run (either manually in the PR or via the Qodo Chrome Extension), Qodo will **push the generated `CHANGELOG.md` updates automatically** because `push_changelog_changes=true` is enabled in the config.

Typical flow before merging:
1. Open the PR in GitHub
2. Run `/changelog` (manually in the PR or via the Qodo Chrome Extension)
3. Review/edit the generated entries if needed
4. Ensure the resulting `CHANGELOG.md` updates are committed to the PR branch

Chrome extension docs:
- https://docs.qodo.ai/qodo-documentation/qodo-merge/integrations/chrome-extension

## Related links

- Qodo config (wiki): https://github.com/nicholeuf/zen-site-next/wiki/.pr_agent.toml
- Qodo wiki home: https://github.com/nicholeuf/zen-site-next/wiki
- Migration context: https://github.com/nicholeuf/zen-site-next/issues/212
