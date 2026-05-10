# DevNotes Lab

DevNotes Lab is a static developer tutorial blog built with Astro, TypeScript, Markdown/MDX and Tailwind CSS.

It exists to publish short, practical guides that live inside the repository. Contributors can suggest new tutorials or improve existing ones by opening GitHub pull requests.

## Tech stack

- Astro
- TypeScript
- Markdown and MDX
- Astro content collections
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

To build the site:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Content system

Tutorials are stored as Markdown or MDX files inside:

```text
src/content/posts/
```

The post schema is defined in:

```text
src/content.config.ts
```

Each post must include frontmatter with:

- `title`
- `description`
- `date`
- `author`
- `category`
- `tags`
- `level`
- `draft`
- `slug`, optional when the filename is already the desired URL slug

Draft posts are hidden from the public pages when `draft: true`.

## How to add a new post

You can add a post manually from the template or generate one from the terminal.

### Option 1: Use the helper script

Run:

```bash
npm run new-post
```

Answer the prompts for:

- title
- description
- category
- tags
- author
- level
- draft status

The script creates a slugified Markdown file inside:

```text
src/content/posts/
```

For example, a title like `How to install Zsh on Linux` creates:

```text
src/content/posts/how-to-install-zsh-on-linux.md
```

### Option 2: Copy the Markdown template

Copy:

```text
templates/post-template.md
```

Create a new Markdown or MDX file inside:

```text
src/content/posts/
```

Use a lowercase, hyphen-separated filename:

```text
how-to-install-zsh-on-linux.md
```

Then replace the template placeholders and write the tutorial content.

### Frontmatter reference

Every published post needs frontmatter like this:

````md
---
title: "How to do something useful"
description: "A short description of what the tutorial helps readers accomplish."
date: "2026-05-10"
author: "Your Name"
category: "Category"
tags: ["tag-one", "tag-two"]
level: "beginner"
draft: true
slug: "how-to-do-something-useful"
---
````

Use `draft: true` while a post is unfinished. Draft posts are hidden from the homepage, posts page, category pages and production builds.

### Preview the post locally

Run:

```bash
npm run dev
```

Open the local URL printed by Astro and check:

- the post appears when `draft: false`
- the post does not appear when `draft: true`
- the post page renders headings, lists and code blocks correctly

Before submitting a pull request, run:

```bash
npm run build
```

This validates the content collection schema and catches missing frontmatter.

## Post template example

The full copyable template lives in `templates/post-template.md`. It uses this structure:

````md
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

## Introduction

Explain what the guide covers and when someone should use it.

## Requirements

- Requirement one
- Requirement two

## Steps

### 1. First step

Explain the action clearly.

```bash
example-command
```

### 2. Second step

Continue with the smallest useful next action.

## Common errors

- Error message or symptom: how to fix it.
- Another common issue: what to check.

## Conclusion

Summarize what the reader accomplished and suggest the next practical step.
````

## Contribute a tutorial

1. Fork the repository.
2. Clone your fork.
3. Install dependencies with `npm install`.
4. Create a new Markdown file with `npm run new-post` or copy `templates/post-template.md`.
5. Write the post inside `src/content/posts/`.
6. Run the project locally with `npm run dev`.
7. Run `npm run build`.
8. Open a pull request.
9. Alex reviews it and merges it if it fits the project.

## Pull request tips

- Keep tutorials short and practical.
- Use real commands that you have tested.
- Include common errors when they are likely.
- Prefer clear wording over long explanations.
- Use existing categories and tags when possible.
- Mark unfinished posts as `draft: true`.
- Do not add authentication, databases, comments, newsletters or CMS features.
