#!/bin/bash
# Deploy Script for Marcus Piper Portfolio
# Automatically stages, commits, and pushes changes to GitHub

echo "🚀 Starting deployment process..."
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository"
    exit 1
fi

# Check for uncommitted changes
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ No changes to commit"
    echo "Repository is up to date!"
    exit 0
fi

# Show status
echo "📋 Current changes:"
git status --short
echo ""

# Prompt for commit message
read -p "Enter commit message (or press Enter for default): " commit_msg

# Use default message if none provided
if [ -z "$commit_msg" ]; then
    commit_msg="Update portfolio - $(date '+%Y-%m-%d %H:%M')"
fi

echo ""
echo "📦 Staging all changes..."
git add .

echo "💾 Committing changes..."
git commit -m "$commit_msg"

echo "⬆️  Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo "🌐 Your changes will be live on GitHub Pages shortly"
    echo "🔄 Remember to pull changes in Replit to sync"
else
    echo ""
    echo "❌ Push failed. Please check your connection and try again."
    exit 1
fi
