#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Check if the branch gh-pages exists, create it if not
if ! git show-ref --quiet refs/heads/gh-pages; then
  echo "Creating gh-pages branch..."
  git branch gh-pages
else
  echo "gh-pages branch already exists."
fi

# Make sure all changes are committed
if [[ -n $(git status --porcelain) ]]; then
  echo "You have uncommitted changes. Please commit or stash them before deploying."
  exit 1
fi

# Switch to gh-pages branch and merge main branch changes
echo "Switching to gh-pages branch and merging changes from main..."
git checkout gh-pages && git merge main --no-edit

# Bundle the application using Webpack
echo "Bundling the application with Webpack..."
npx webpack

# Add and commit changes in the dist folder
echo "Adding and committing changes in dist folder..."
git add dist -f && git commit -m "Deployment commit"

# Push the dist folder subtree to gh-pages branch
echo "Pushing dist folder to gh-pages branch on GitHub..."
git subtree push --prefix dist origin gh-pages

# Switch back to main branch
echo "Switching back to main branch..."
git checkout main

# Reminder to check GitHub Pages settings
echo "Deployment complete. Make sure your GitHub Pages source branch is set to 'gh-pages' in repository settings."

