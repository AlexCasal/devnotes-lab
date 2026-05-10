import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import readline from 'node:readline/promises';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');
const levels = ['beginner', 'intermediate', 'advanced'];

function slugify(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function escapeYaml(value) {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

async function askRequired(rl, question) {
  while (true) {
    const answer = (await rl.question(question)).trim();

    if (answer) {
      return answer;
    }

    console.log('Please enter a value.');
  }
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const title = await askRequired(rl, 'Title: ');
    const description = await askRequired(rl, 'Description: ');
    const category = await askRequired(rl, 'Category: ');
    const tagsInput = await askRequired(rl, 'Tags (comma-separated): ');
    const author = await askRequired(rl, 'Author: ');
    const levelInput = (await rl.question('Level (beginner/intermediate/advanced) [beginner]: ')).trim().toLowerCase();
    const draftInput = (await rl.question('Draft? (Y/n) [Y]: ')).trim().toLowerCase();

    const level = levelInput || 'beginner';
    if (!levels.includes(level)) {
      throw new Error(`Invalid level "${level}". Use: ${levels.join(', ')}.`);
    }

    const tags = tagsInput
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (tags.length === 0) {
      throw new Error('Add at least one tag.');
    }

    const slug = slugify(title);
    if (!slug) {
      throw new Error('Could not create a slug from the title.');
    }

    const filename = `${slug}.md`;
    const filePath = path.join(postsDir, filename);

    if (existsSync(filePath)) {
      throw new Error(`A post already exists at src/content/posts/${filename}.`);
    }

    const date = new Date().toISOString().slice(0, 10);
    const draft = draftInput === '' || draftInput === 'y' || draftInput === 'yes';
    const tagList = tags.map((tag) => `"${escapeYaml(tag)}"`).join(', ');

    const content = `---
title: "${escapeYaml(title)}"
description: "${escapeYaml(description)}"
date: "${date}"
author: "${escapeYaml(author)}"
category: "${escapeYaml(category)}"
tags: [${tagList}]
level: "${level}"
draft: ${draft}
slug: "${slug}"
---

## Introduction

Explain what this guide helps the reader do and when they should use it.

## Requirements

- Requirement one
- Requirement two

## Steps

### 1. First step

Explain the first action clearly.

\`\`\`bash
example-command
\`\`\`

### 2. Second step

Continue with the smallest useful next action.

## Common errors

- Error or symptom: explain how to fix it.
- Another common issue: explain what to check.

## Conclusion

Summarize what the reader accomplished and suggest a practical next step.
`;

    await mkdir(postsDir, { recursive: true });
    await writeFile(filePath, content, { flag: 'wx' });

    console.log(`Created src/content/posts/${filename}`);
    console.log('Run npm run dev to preview it locally.');
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
