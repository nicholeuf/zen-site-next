#!/bin/sh
# Build Docker image using Node version from .nvmrc and docker-compose

NODE_VERSION=$(cat .nvmrc)
echo "Building with Node version: $NODE_VERSION using docker-compose"
docker-compose build --build-arg NODE_VERSION=$NODE_VERSION
