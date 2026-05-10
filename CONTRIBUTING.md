# Contributing to DevNotes Lab

Thanks for helping improve DevNotes Lab. This project accepts practical developer tutorials through GitHub pull requests.

## Contribution flow

1. Fork the repository.
2. Clone your fork.
3. Install dependencies with `npm install`.
4. Create a new Markdown file with `npm run new-post` or copy `templates/post-template.md`.
5. Put the post inside `src/content/posts/`.
6. Run the project locally with `npm run dev`.
7. Run `npm run build`.
8. Open a pull request.
9. Alex reviews it and merges it if it fits the project.

## Tutorial guidelines

- Write for developers who want to solve a concrete task.
- Keep the scope narrow.
- Use a clear title that describes the task.
- Write a useful description that explains the outcome.
- Use existing categories and tags when possible.
- Include an introduction, requirements, steps, common errors and conclusion.
- Keep posts practical and easy to read.
- Test commands before submitting.
- Use `beginner`, `intermediate` or `advanced` for `level`.
- Mark unfinished posts as `draft: true`.
- Use `draft: false` only when the post is ready to publish.
- Submit new posts through a pull request.

## Frontmatter rules

Each post must include:

```yaml
---
title: "How to do something useful"
description: "A short, specific summary of what the reader will accomplish."
date: "2026-05-10"
author: "Your Name"
category: "Category"
tags: ["tag-one", "tag-two"]
level: "beginner"
draft: true
slug: "how-to-do-something-useful"
---
```

The `slug` field is optional. If it is missing, the post URL uses the filename.

## File naming

Use lowercase slugs separated by hyphens:

```text
how-to-install-zsh-on-linux.md
```

## Before opening a pull request

Run:

```bash
npm run build
```

This validates the Astro content collection schema and catches broken pages.
