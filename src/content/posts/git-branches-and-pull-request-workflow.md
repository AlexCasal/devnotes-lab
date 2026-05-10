---
title: "Git branches and pull request workflow"
description: "Learn how to work with branches, make changes safely, and prepare a clean pull request for a project."
date: "2026-05-10"
author: "Alex Casal"
category: "Git"
tags: ["git", "github", "branches", "pull-request"]
level: "intermediate"
draft: false
slug: "git-branches-and-pull-request-workflow"
---

## Introduction

When you work on a project, you should avoid making every change directly on the main branch. A better workflow is to create a new branch, make your changes there, test everything, and then open a pull request.

This is useful when you collaborate with other people, but it is also a good habit for your own projects. It keeps your work organized and makes it easier to review what changed.

## Requirements

Before starting, you should already know how to:

- Use the terminal
- Clone a GitHub repository
- Run basic Git commands
- Make small changes in a project

You will also need:

- Git installed
- A GitHub account
- A local copy of the project

## 1. Check the current branch

Inside your project folder, run:

```bash
git branch
```

The branch with the `*` symbol is the branch you are currently using.

Example:

```bash
* main
```

This means you are on the `main` branch.

## 2. Update your local main branch

Before creating a new branch, make sure your local `main` branch is updated.

```bash
git checkout main
git pull origin main
```

This downloads the latest changes from GitHub.

Starting from an updated branch helps you avoid conflicts later.

## 3. Create a new branch

Now create a branch for your change.

```bash
git checkout -b add-new-tutorial
```

The branch name should describe what you are doing.

Good examples:

```bash
add-new-tutorial
fix-navbar-hover
update-readme-template
improve-post-layout
```

Avoid vague names like:

```bash
changes
test
final-version
stuff
```

## 4. Make your changes

Now you can edit the project.

For example, you could add a new tutorial inside:

```bash
src/content/posts/
```

After making changes, check what Git detected:

```bash
git status
```

You will see modified, deleted or new files.

## 5. Review your changes before committing

Before creating a commit, it is useful to inspect the exact changes.

```bash
git diff
```

This shows what changed inside the files.

If you only want to see the file names:

```bash
git diff --name-only
```

This step helps you catch mistakes before committing.

## 6. Stage the files

To add all changed files:

```bash
git add .
```

If you only want to add one specific file:

```bash
git add src/content/posts/my-new-post.md
```

After staging, check the status again:

```bash
git status
```

## 7. Create a clear commit

A commit should explain what changed.

```bash
git commit -m "Add Git branches tutorial"
```

Good commit messages are short and specific.

Examples:

```bash
git commit -m "Add tutorial about pull request workflow"
git commit -m "Update README contribution steps"
git commit -m "Fix post metadata validation"
```

Avoid messages like:

```bash
git commit -m "changes"
git commit -m "fix"
git commit -m "update stuff"
```

## 8. Push the branch to GitHub

After committing, push your branch.

```bash
git push origin add-new-tutorial
```

GitHub will usually show a link in the terminal to create a pull request.

You can also open the repository on GitHub and click **Compare & pull request**.

## 9. Open a pull request

A pull request explains what you changed and why.

A simple pull request description could be:

```md
## What changed

- Added a new tutorial about Git branches and pull requests.
- Included examples for branch names, commits and basic review commands.

## Why

This helps contributors understand how to work safely without pushing directly to main.

## Checklist

- [x] I tested the project locally.
- [x] I checked the changed files.
- [x] I used a clear commit message.
```

You do not need a huge description, but it should be clear enough for someone else to understand the change.

## 10. Make changes after feedback

Sometimes someone will ask you to change something in the pull request.

You do not need to create a new pull request. Just edit the same branch, commit again and push.

```bash
git add .
git commit -m "Improve tutorial examples"
git push origin add-new-tutorial
```

The pull request will update automatically.

## 11. Delete the branch after merging

After the pull request is merged, you can delete the branch on GitHub.

You can also delete it locally:

```bash
git checkout main
git pull origin main
git branch -d add-new-tutorial
```

This keeps your local repository clean.

## Useful commands summary

```bash
git branch
git checkout main
git pull origin main
git checkout -b branch-name
git status
git diff
git add .
git commit -m "Commit message"
git push origin branch-name
git branch -d branch-name
```

## Common mistakes

### Working directly on main

It works, but it is not a good habit. Use a separate branch for every change.

### Forgetting to pull before creating a branch

If your local `main` is outdated, you may have conflicts later.

### Using unclear commit messages

A commit message should help you understand the history of the project.

### Adding unrelated changes

Try to keep each branch focused on one task. Do not mix a tutorial, a layout change and a bug fix in the same pull request.

## Conclusion

Using branches and pull requests makes your workflow cleaner and safer. It helps you organize your work, review changes before merging, and collaborate with other people without breaking the main version of the project.
