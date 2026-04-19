#!/bin/bash
cd "$(dirname "$0")"

# Build and push - GitHub Actions handles the rest
npm run build

git add .
git commit -m "$1"
git push

echo "Pushed! GitHub Actions will auto-deploy to https://juniper1947.github.io/manila-creatives/"
