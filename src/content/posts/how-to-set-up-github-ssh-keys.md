---
title: "How to set up GitHub SSH keys"
description: "Create an SSH key, add it to GitHub, and connect to repositories without typing your password."
date: "2026-05-09"
author: "Alex Casal"
category: "GitHub"
tags: ["github", "git", "ssh"]
level: "beginner"
draft: false
---

## Introduction

SSH keys let your computer authenticate with GitHub securely. After setup, you can clone, pull and push using SSH URLs without entering your GitHub password.

## Requirements

- Git installed
- A GitHub account
- Access to a terminal

## Steps

### 1. Check for existing keys

```bash
ls ~/.ssh
```

If you already see files like `id_ed25519` and `id_ed25519.pub`, you may be able to reuse them.

### 2. Create a new SSH key

Replace the email with the one you use on GitHub.

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Press Enter to accept the default file path. Add a passphrase if you want extra protection.

### 3. Start the SSH agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 4. Copy the public key

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the full output. It starts with `ssh-ed25519`.

### 5. Add the key to GitHub

Open GitHub, go to Settings, then SSH and GPG keys. Add a new SSH key, paste the public key and save it.

### 6. Test the connection

```bash
ssh -T git@github.com
```

You should see a message confirming that GitHub recognized your account.

## Common errors

- `Permission denied (publickey)`: make sure the key was added to GitHub and loaded with `ssh-add`.
- `Could not open a connection to your authentication agent`: start the agent again with `eval "$(ssh-agent -s)"`.
- You cloned with HTTPS: change the remote URL to SSH with `git remote set-url origin git@github.com:USER/REPO.git`.

## Conclusion

Your machine can now authenticate with GitHub over SSH. Use SSH clone URLs for a smoother Git workflow.
