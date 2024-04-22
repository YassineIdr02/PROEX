#!/bin/sh

# Script to delete a Git branch

branch_name="$1"

# Delete the specified branch
git branch -d "$branch_name"
git push origin --delete "$branch_name"
echo "Deleted branch: $branch_name"
