#!/bin/sh
 # Build Docker image using Node version from .nvmrc and docker-compose

NODE_VERSION=$(cat .nvmrc | tr -d '[:space:]')
echo "Building with Node version: $NODE_VERSION using docker-compose"
docker compose build --build-arg NODE_VERSION=$NODE_VERSION

echo "Build complete. You can now run the container with 'docker compose up'."
