#!/bin/sh

# Script to push changes to the current Git branch with an optional commit message

branch_name="$(git rev-parse --abbrev-ref HEAD)"
commit_message="$1"

# Add changes to staging area and commit if a message is provided
if [ -n "$commit_message" ]; then
    git add .
    git commit -m "$commit_message"
    echo "Changes committed with message: '$commit_message'"
fi

# Push changes to the current branch
git push -u origin "$branch_name"
echo "Pushed changes to branch: $branch_name"
