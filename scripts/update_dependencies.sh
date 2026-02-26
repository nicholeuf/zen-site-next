#!/usr/bin/env bash
set -euo pipefail


# Read the Node version from .node-version and align @types/node with it.
NODE_VERSION_RAW=$(tr -d '[:space:]' < .node-version)
NODE_MAJOR=$(echo "$NODE_VERSION_RAW" | cut -d. -f1)

if [[ ! "$NODE_MAJOR" =~ ^[0-9]+$ ]]; then
  echo "Error: .node-version does not contain a numeric Node major version (got: '${NODE_VERSION_RAW}')."
  exit 1
fi

if [[ "$NODE_VERSION_RAW" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  NODE_TYPES_VERSION="${NODE_VERSION_RAW}"
  echo "Using Node version from .node-version: ${NODE_VERSION_RAW}"
else
  NODE_TYPES_VERSION="${NODE_MAJOR}.x"
  echo "Using Node major version from .node-version: ${NODE_MAJOR}"
fi

echo "Target @types/node version: ${NODE_TYPES_VERSION}"

echo "Upgrade next"
pnpm next upgrade

echo "Upgrade storybook"
npx storybook@latest upgrade

echo "Updating all dependencies to latest..."
pnpm update --latest

if [ -n "$NODE_MAJOR" ]; then
  echo "Restoring @types/node to ${NODE_TYPES_VERSION}..."
  pnpm add -D @types/node@"$NODE_TYPES_VERSION"
else
  echo "Warning: .node-version did not contain a valid Node major version. Skipping @types/node restore."
fi

echo "All dependencies updated. Please review the changes and test your application."

pnpm run test:update