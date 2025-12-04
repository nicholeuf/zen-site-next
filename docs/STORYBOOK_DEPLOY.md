# Storybook deployment to GitHub Pages

This repository publishes Storybook to GitHub Pages on pushes to `main`.

How it works

- A GitHub Actions workflow (`.github/workflows/deploy-storybook.yml`) runs on `push` to `main` and on manual dispatch.
- The workflow installs dependencies with `pnpm`, runs `pnpm build-storybook` and uploads the `storybook-static` folder as a Pages artifact.
- The `actions/deploy-pages` action then publishes the artifact to GitHub Pages.

Notes

- This repo uses `pnpm` (see `packageManager` in `package.json`). The workflow enables Corepack and prepares `pnpm` before installing.
- `build-storybook` script already exists in `package.json` and runs `storybook build`.
- The Pages deployment URL will be the repository pages URL, typically `https://nicholeuf.github.io/zen-site-next/` unless a custom domain or organization pages settings are configured.

To trigger a manual deploy

1. Go to the Actions tab in GitHub and run the `Deploy Storybook` workflow via the manual `workflow_dispatch` button.

Troubleshooting

- If the workflow fails during install, ensure the repository's lockfile (`pnpm-lock.yaml`) is committed and up to date.
- If deployment fails due to Pages permissions, ensure the repo's Pages settings allow GitHub Actions to publish (this is normally automatic when the `actions/deploy-pages` step runs and the workflow has `pages: write` permission).

More information

- Storybook docs: https://storybook.js.org/docs/sharing/publish-storybook#github-pages
- GitHub Pages actions: https://github.com/actions/configure-pages and https://github.com/actions/deploy-pages
