#!/usr/bin/env bash
set -euo pipefail

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
echo "Enabling Corepack to ensure pnpm is available..."
corepack enable

# Read the Node version from .nvmrc and align @types/node with it.
NODE_VERSION_RAW=$(tr -d '[:space:]' < .nvmrc)
NODE_MAJOR=$(echo "$NODE_VERSION_RAW" | cut -d. -f1)

if [[ ! "$NODE_MAJOR" =~ ^[0-9]+$ ]]; then
  echo "Error: .nvmrc does not contain a numeric Node major version (got: '${NODE_VERSION_RAW}')."
  exit 1
fi

if [[ "$NODE_VERSION_RAW" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  NODE_TYPES_VERSION="${NODE_VERSION_RAW}"
  echo "Using Node version from .nvmrc: ${NODE_VERSION_RAW}"
else
  NODE_TYPES_VERSION="${NODE_MAJOR}.x"
  echo "Using Node major version from .nvmrc: ${NODE_MAJOR}"
fi

echo -n "Enter new Node version as a <major> (eg 24, 25): "
read NEW_NODE_MAJOR
if [[ ! "$NEW_NODE_MAJOR" =~ ^[0-9]+$ ]]; then
  echo "Error: Please enter a valid numeric Node major version (e.g., 18, 20, 22)."
  exit 1
fi

# Check if the new version is different from the current
if [[ "$NEW_NODE_MAJOR" == "$NODE_MAJOR" ]]; then
  echo "Error: New Node major version ($NEW_NODE_MAJOR) is the same as the current version ($NODE_MAJOR)."
  exit 1
fi
NEW_NODE_TYPES_VERSION="${NEW_NODE_MAJOR}.x"

echo "Updating Node version to ${NEW_NODE_MAJOR} in .nvmrc ..."
echo -n "$NEW_NODE_MAJOR" > .nvmrc

echo "Updating engines.node in package.json to ${NEW_NODE_TYPES_VERSION}..."
jq --arg new_version "$NEW_NODE_TYPES_VERSION" '.engines.node = $new_version' package.json > package.tmp.json && mv package.tmp.json package.json

echo "Installing Node version ${NEW_NODE_MAJOR} with nvm ..."
nvm install
nvm use

echo "Ensuring pnpm is up to date with the new Node version..."
corepack use pnpm@latest
corepack enable

echo "Removing node_modules and pnpm-lock.yaml..."
rm -rf node_modules pnpm-lock.yaml

echo "Adding @types/node to ${NEW_NODE_TYPES_VERSION}..."
pnpm add -D @types/node@"$NEW_NODE_TYPES_VERSION"

echo "Install dependencies with new Node version..."
pnpm install

echo "All dependencies updated to Node ${NEW_NODE_MAJOR}. Please review the changes and test your application."

