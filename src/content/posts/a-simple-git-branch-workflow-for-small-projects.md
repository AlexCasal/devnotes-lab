---
title: "A simple Git branch workflow for small projects"
description: "Learn how to use main, develop and feature branches in a simple and practical way."
date: "2026-05-10"
author: "Alex Casal"
category: "Git"
tags: ["git", "github", "branches", "workflow"]
level: "intermediate"
draft: false
slug: "a-simple-git-branch-workflow-for-small-projects"
---

## Introduction

When a project grows, working directly on `main` can become risky.

A simple branch workflow helps you organize changes, test them before merging, and keep your stable version clean.

You do not need a complex enterprise workflow. For a small project, a simple structure is enough:

```txt
main
develop
feature/*
```

## What each branch means

### main

`main` is the stable branch.

It should contain the version that is ready to deploy or show publicly.

Avoid working directly on `main`.

### develop

`develop` is the working branch.

It contains changes that are almost ready but not necessarily production-ready yet.

You can use it to collect finished features before merging them into `main`.

### feature branches

Feature branches are small branches created for one task.

Examples:

```bash
feature/conventional-commits-tutorial
feature/post-search
fix/navbar-mobile-spacing
docs/update-readme
```

Each feature branch should focus on one change.

## Create the develop branch

Start from `main`:

```bash
git checkout main
git pull origin main
git checkout -b develop
git push -u origin develop
```

Now your repository has a remote `develop` branch on GitHub.

After this first push, you can use:

```bash
git push
```

when you are on `develop`.

## Start a new feature

Always start from an updated `develop` branch.

```bash
git checkout develop
git pull origin develop
git checkout -b feature/conventional-commits-tutorial
```

Now you can work safely without touching `develop` or `main` directly.

## Commit your changes

After editing files:

```bash
git status
git add .
git commit -m "docs(posts): add conventional commits tutorial"
```

Use clear commit messages. Conventional Commits work well for this.

## Push the feature branch

```bash
git push -u origin feature/conventional-commits-tutorial
```

Then open a pull request on GitHub.

The pull request should usually be:

```txt
feature/conventional-commits-tutorial → develop
```

Not directly to `main`.

## Merge develop into main

When `develop` is ready and tested, open a pull request:

```txt
develop → main
```

This keeps `main` stable and makes the final merge more intentional.

Before merging, run:

```bash
npm run build
```

If the build passes, the project is safer to merge.

## Example workflow

```bash
git checkout develop
git pull origin develop
git checkout -b feature/add-git-stash-tutorial

# make changes

git add .
git commit -m "docs(posts): add git stash tutorial"
git push -u origin feature/add-git-stash-tutorial
```

Then on GitHub:

```txt
feature/add-git-stash-tutorial → develop
```

Later:

```txt
develop → main
```

## When to use fix branches

Not every branch has to start with `feature`.

For bugs, use:

```bash
fix/post-card-spacing
fix/broken-link
fix/mobile-menu
```

For documentation:

```bash
docs/update-readme
docs/add-contribution-guide
```

For cleanup:

```bash
chore/remove-unused-component
refactor/post-list-rendering
```

The branch name should explain the task.

## Keep branches small

A good branch usually does one thing.

Good:

```txt
feature/add-search
```

Bad:

```txt
feature/add-search-and-redesign-home-and-update-readme
```

Small branches are easier to review, test and merge.

## Delete merged branches

After a branch is merged, delete it on GitHub.

You can also delete it locally:

```bash
git checkout develop
git pull origin develop
git branch -d feature/conventional-commits-tutorial
```

This keeps your local repository clean.

## Common mistakes

### Working directly on main

This makes it easier to break the stable version.

### Creating feature branches from outdated develop

Always run:

```bash
git pull origin develop
```

before creating a new branch.

### Mixing unrelated changes

Do not put a tutorial, a layout fix and a dependency update in the same branch.

### Forgetting to push with upstream

The first time you push a new branch, use:

```bash
git push -u origin branch-name
```

After that, normal `git push` is enough.

## Simple branch map

```txt
main
  ↑
develop
  ↑
feature/my-task
```

The usual direction is:

```txt
feature branch → develop → main
```

## Conclusion

A simple branch workflow makes your project easier to manage.

Use `main` for stable code, `develop` for upcoming changes, and small feature branches for each task. This gives you more control without making the process too complicated.
