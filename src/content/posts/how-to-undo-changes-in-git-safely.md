---
title: "How to undo changes in Git safely"
description: "Learn how to undo changes in Git without losing work or breaking your project history."
date: "2026-05-10"
author: "Alex Casal"
category: "Git"
tags: ["git", "github", "reset", "revert"]
level: "intermediate"
draft: false
slug: "how-to-undo-changes-in-git-safely"
---

## Introduction

Everyone makes mistakes while working with Git. You edit the wrong file, commit too early, delete something by accident, or realize that your last commit was not a good idea.

The important part is knowing which command to use.

Git gives you several ways to undo changes, but not all of them are equally safe. Some commands only affect your local files, while others change commit history.

This guide explains the most common situations and how to fix them safely.

## Before doing anything

First, check the current state of your repository:

```bash
git status
```

This command tells you:

- which files changed
- which files are staged
- which branch you are on
- whether you have commits to push

If you are not sure what is happening, start with `git status`.

## Undo changes in a file before staging

If you changed a file but did not run `git add`, you can restore it with:

```bash
git restore path/to/file
```

Example:

```bash
git restore src/pages/index.astro
```

This removes your local changes in that file and returns it to the last committed version.

Be careful: this deletes the current changes in that file.

## Undo all unstaged changes

If you want to remove all unstaged changes:

```bash
git restore .
```

This restores all modified files that are not staged.

Use this only when you are sure you do not need those changes.

## Unstage a file

Sometimes you run `git add .` and then realize you added too much.

To unstage one file:

```bash
git restore --staged path/to/file
```

Example:

```bash
git restore --staged src/content/posts/tutorial.md
```

The file will still keep its changes, but it will no longer be staged for commit.

## Unstage everything

To unstage all staged files:

```bash
git restore --staged .
```

This does not delete your changes. It only removes them from the staging area.

## Undo the last commit but keep the changes

If you created a commit too early and want to undo the commit while keeping the files changed:

```bash
git reset --soft HEAD~1
```

This removes the last commit but keeps the changes staged.

If you want to keep the changes but unstage them:

```bash
git reset HEAD~1
```

This is useful when you want to rewrite the commit or split it into smaller commits.

## Undo the last commit and delete the changes

If you want to delete the last commit and all its changes:

```bash
git reset --hard HEAD~1
```

Be very careful with this command.

It removes the commit and deletes the changes from your working directory.

Use it only if:

- the commit is local
- you have not pushed it
- you are completely sure you do not need the changes

## Revert a commit safely

If the commit was already pushed to GitHub, it is usually safer to use `git revert`.

```bash
git revert commit-hash
```

Example:

```bash
git revert a1b2c3d
```

This creates a new commit that undoes the selected commit.

It does not delete history, so it is safer for shared branches like `main` or `develop`.

## Find the commit hash

To see previous commits:

```bash
git log --oneline
```

Example output:

```bash
a1b2c3d docs(posts): add Git tutorial
e4f5g6h fix(layout): correct card spacing
```

The short code at the beginning is the commit hash.

## Reset vs revert

| Command | What it does | Best for |
| --- | --- | --- |
| `git reset` | Moves history backwards | Local commits |
| `git revert` | Creates a new commit that undoes another commit | Pushed commits |
| `git restore` | Restores files | Local file changes |

A simple rule:

- Use `restore` for files.
- Use `reset` for local commits.
- Use `revert` for commits already pushed to GitHub.

## Common situations

### I changed a file and want to discard the changes

```bash
git restore path/to/file
```

### I staged a file by mistake

```bash
git restore --staged path/to/file
```

### I committed too early but want to keep the changes

```bash
git reset --soft HEAD~1
```

### I pushed a bad commit to GitHub

```bash
git revert commit-hash
```

## Conclusion

Undoing changes in Git is normal. The key is choosing the right command for the situation.

When in doubt, avoid destructive commands like `git reset --hard`. Check `git status`, understand what changed, and use the safest option first.
