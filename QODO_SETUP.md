# Qodo Merge GitHub Actions Setup

This document explains how to set up and use the Qodo Merge GitHub Actions workflow for automated PR reviews and changelog updates.

## Overview

The workflow provides two separate jobs:

1. **Standard Qodo Tools**: Runs on PR open, reopen, and synchronize events
   - `/describe` - Generates PR descriptions with AI-generated titles
   - `/review` - Provides comprehensive PR feedback
   - `/improve` - Suggests code improvements
   - `/compliance` - Checks for compliance issues

2. **Changelog Update**: Runs specifically when a PR is marked as "ready for review"
   - `/update_changelog` - Automatically updates the CHANGELOG.md file

## Required Secrets

You need to add the following secrets to your GitHub repository:

### 1. Qodo API Key

- **Secret Name**: `QODO_API_KEY`
- **Description**: Your Qodo API key for Qodo Merge (no OpenAI account needed)
- **How to get**:
  1. Go to [Qodo Dashboard](https://qodo.ai) and sign up
  2. Get your API key from the dashboard
  3. Copy the key and add it to your repository secrets

### 2. GitHub Token (PAT)

- **Secret Name**: `REPO_WRITE_TOKEN`
- **Description**: Personal Access Token for repository write access
- **How to get**:
  1. Go to GitHub Settings → Developer settings → Personal access tokens
  2. Generate a new token with `repo` and `workflow` permissions
  3. Add it to your repository secrets

## Configuration

The workflow uses the `.pr_agent.toml` configuration file to customize behavior:

- **File patterns to ignore**: Coverage reports, node_modules, build artifacts
- **Custom instructions**: Tailored feedback for your project
- **Changelog format**: Follows your existing changelog structure
- **AI-generated titles**: Automatically generates PR titles
- **Draft PR support**: Provides feedback on draft PRs
- **Compliance checking**: Includes compliance analysis in reviews

## How It Works

### Standard PR Events

When a PR is:

- **Opened**: Runs describe, review, improve, and compliance tools
- **Reopened**: Runs describe, review, improve, and compliance tools
- **Updated (synchronize)**: Runs describe and review tools
- **Draft PRs**: Also provides feedback (configurable)

### Ready for Review Event

When a PR is marked as "ready for review":

- **Only** runs the changelog update tool
- Automatically updates `CHANGELOG.md` with the PR changes
- Pushes the changelog changes back to the PR branch

## Benefits

1. **Separation of Concerns**: Standard tools run on all PR events, changelog only on ready-for-review
2. **No Conflicts**: Avoids the issue where changelog automation breaks other Qodo tools
3. **Flexible**: Can be easily customized via the configuration file
4. **Efficient**: Only runs necessary tools for each event type

## Customization

You can customize the behavior by editing `.pr_agent.toml`:

```toml
[pr_reviewer]
extra_instructions = "Your custom review instructions here"

[pr_description]
generate_ai_title = true
publish_labels = true

[pr_update_changelog]
extra_instructions = "Your custom changelog instructions here"

[github_app]
feedback_on_draft_pr = true
```

## Troubleshooting

### Workflow Not Running

- Check that the required secrets are properly set
- Verify the workflow file is in `.github/workflows/`
- Check the Actions tab for error messages

### Changelog Not Updating

- Ensure the PR is marked as "ready for review" (not just opened)
- Check that the `QODO_API_KEY` secret is valid
- Verify the `GITHUB_TOKEN` has write permissions

### Tools Not Running

- Check the workflow logs in the Actions tab
- Verify the event triggers match your PR workflow
- Ensure the configuration file is properly formatted

## Manual Usage

You can still use Qodo Merge manually by commenting on PRs:

```
/review
/describe
/improve
/compliance
/ask "What's going on in this PR?"
/update_changelog
```

## Support

For more information about Qodo Merge, visit:

- [Qodo Documentation](https://docs.qodo.ai/)
- [GitHub Actions Guide](https://docs.qodo.ai/qodo-documentation/qodo-merge/getting-started/usage-guide#github-action)
