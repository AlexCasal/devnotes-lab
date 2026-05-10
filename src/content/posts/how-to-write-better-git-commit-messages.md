---
title: "How to write better Git commit messages"
description: "A practical pattern for writing commits that are easier to review, search, and understand later."
date: "2026-05-09"
author: "Alex Casal"
category: "Git"
tags: ["git", "workflow", "commits"]
level: "beginner"
draft: false
---

## Introduction

A good commit message explains the intent behind a change. Future you, your teammates and reviewers should be able to scan the history and understand what changed without opening every diff.

## Requirements

- A Git repository
- Changes ready to commit
- A few extra seconds before running `git commit`

## Steps

### 1. Keep the subject short

Use a short sentence that describes the change.

```bash
git commit -m "Add post category pages"
```

Aim for about 50 characters when possible. It is fine if a practical message is slightly longer.

### 2. Use the imperative mood

Write the subject like a command:

- Add login validation
- Fix broken navigation link
- Update README contribution steps

This matches Git's own style, such as `Revert` and `Merge`.

### 3. Explain context in the body

For larger changes, add a body after a blank line.

```bash
git commit
```

Then write:

```text
Add post category pages

Group tutorials by category so readers can browse Linux, Git
and deployment guides without scanning the full post list.
```

### 4. Commit one idea at a time

Avoid mixing unrelated work. A commit that updates styles, fixes a bug and rewrites documentation is harder to review and harder to revert.

## Common errors

- `git commit -m "changes"`: too vague to be useful later.
- Huge commits: split the work into smaller logical commits with `git add -p`.
- Describing the file instead of the reason: prefer `Fix empty post list state` over `Edit posts page`.

## Conclusion

Better commit messages make a project easier to maintain. Keep the subject clear, add context when needed and commit focused changes.
