#!/usr/bin/env bash
set -euo pipefail

# Read the Node major version from .nvmrc and align @types/node with it.
NODE_MAJOR=$(tr -d 'v' < .nvmrc | cut -d. -f1 | tr -d '[:space:]')
NODE_TYPES_VERSION="^${NODE_MAJOR}"

echo "Using Node major version: ${NODE_MAJOR}"
echo "Target @types/node version: ${NODE_TYPES_VERSION}"

echo "Updating all dependencies to latest..."
pnpm update --latest

if [ -n "$NODE_MAJOR" ]; then
  echo "Restoring @types/node to ${NODE_TYPES_VERSION}..."
  pnpm add -D @types/node@"$NODE_TYPES_VERSION"
else
  echo "Warning: .nvmrc did not contain a valid Node major version. Skipping @types/node restore."
fi