#!/usr/bin/env bash
set -euo pipefail

# Read the Node version from .nvmrc and align @types/node with it.
NVMRC_RAW=$(tr -d '[:space:]' < .nvmrc)
NVMRC_VERSION=${NVMRC_RAW#v}
NODE_MAJOR=$(echo "$NVMRC_VERSION" | cut -d. -f1)

if [[ ! "$NODE_MAJOR" =~ ^[0-9]+$ ]]; then
  echo "Error: .nvmrc does not contain a numeric Node major version (got: '${NVMRC_RAW}')."
  exit 1
fi

if [[ "$NVMRC_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  NODE_TYPES_VERSION="${NVMRC_VERSION}"
  echo "Using Node version from .nvmrc: ${NVMRC_VERSION}"
else
  NODE_TYPES_VERSION="${NODE_MAJOR}.x"
  echo "Using Node major version from .nvmrc: ${NODE_MAJOR}"
fi

echo "Target @types/node version: ${NODE_TYPES_VERSION}"

echo "Updating all dependencies to latest..."
pnpm update --latest

if [ -n "$NODE_MAJOR" ]; then
  echo "Restoring @types/node to ${NODE_TYPES_VERSION}..."
  pnpm add -D @types/node@"$NODE_TYPES_VERSION"
else
  echo "Warning: .nvmrc did not contain a valid Node major version. Skipping @types/node restore."
fi