---
title: "How to write a clear pull request"
description: "Learn how to prepare a pull request that is easy to review and understand."
date: "2026-05-10"
author: "Alex Casal"
category: "GitHub"
tags: ["github", "pull-request", "git", "collaboration"]
level: "intermediate"
draft: false
slug: "how-to-write-a-clear-pull-request"
---

## Introduction

A pull request is more than a button you click on GitHub.

It is the place where you explain what changed, why it changed, and how someone else can review it.

A good pull request makes collaboration easier. It helps reviewers understand your work without having to guess your intention.

## Start from a focused branch

Before opening a pull request, create a branch for your task.

```bash
git checkout main
git pull origin main
git checkout -b feature/add-new-tutorial
```

Try to keep the branch focused on one task.

Good branch names:

```bash
feature/add-new-tutorial
fix/navbar-mobile-menu
docs/update-readme
```

Avoid names like:

```bash
changes
test
final
stuff
```

## Make focused commits

A pull request should not include unrelated changes.

For example, avoid mixing:

- a new tutorial
- a navbar redesign
- dependency updates
- random formatting changes

Keep the pull request small and easy to review.

## Use a clear pull request title

A good title summarizes the change.

Good examples:

```md
Add tutorial about Conventional Commits
Fix mobile spacing in post cards
Update README contribution guide
```

Bad examples:

```md
Changes
Fix
Update
Final version
```

The title should help someone understand the pull request before opening it.

## Write a useful description

A simple pull request description can follow this structure:

```md
## What changed

- Added a new tutorial about Conventional Commits.
- Included examples of commit types, scopes and descriptions.
- Added a checklist for writing better commits.

## Why

This helps contributors write clearer Git commit messages.

## Testing

- Ran the project locally.
- Checked that the post appears in the posts page.
- Ran the build command.
```

You do not need to write a long essay. You just need enough context.

## Mention visual changes

If your pull request changes the UI, add screenshots.

For example:

```md
## Screenshots

Before:

After:
```

Screenshots help reviewers understand visual changes faster.

For content-only changes, screenshots are usually not necessary.

## Add testing notes

Explain what you tested.

Examples:

```md
## Testing

- Ran `npm run dev`
- Checked the new post page
- Ran `npm run build`
```

If you did not test something, say it clearly.

```md
## Testing

Not tested yet.
```

Being honest is better than pretending everything was checked.

## Use a checklist

A checklist helps you review your own work before asking someone else to review it.

Example:

```md
## Checklist

- [x] The branch is up to date
- [x] The change is focused
- [x] I reviewed the changed files
- [x] I tested the project locally
- [x] The commit messages are clear
```

## Review your own changes first

Before opening the pull request, run:

```bash
git status
git diff --name-only
```

If you want to inspect the actual changes:

```bash
git diff
```

This helps you catch mistakes before someone else sees them.

## Push your branch

```bash
git push origin feature/add-new-tutorial
```

Then open GitHub and create the pull request.

## Responding to feedback

If someone asks for changes, update the same branch.

```bash
git add .
git commit -m "docs(posts): improve tutorial examples"
git push
```

You do not need to open a new pull request. The existing one updates automatically.

## Common mistakes

### Pull request is too big

Large pull requests are harder to review. Keep them focused.

### Description is empty

An empty description forces reviewers to guess what changed.

### No testing notes

Reviewers need to know what you checked.

### Unrelated files included

Always review your changed files before opening a pull request.

## Example pull request template

```md
## What changed

- 

## Why

- 

## Testing

- [ ] Ran `npm run dev`
- [ ] Ran `npm run build`
- [ ] Checked the affected page

## Screenshots

Optional.
```

## Conclusion

A clear pull request saves time for everyone.

The goal is simple: make your changes easy to understand, easy to review, and easy to merge.
