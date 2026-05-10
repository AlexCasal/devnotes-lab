---
title: "How to install Zsh on Linux"
description: "A simple guide to install Zsh, Oh My Zsh, and configure it as your default shell."
date: "2026-05-09"
author: "Alex Casal"
category: "Linux"
tags: ["linux", "terminal", "zsh"]
level: "beginner"
draft: false
---

## Introduction

Zsh is a fast, flexible shell that works well for daily development. It supports themes, plugins, smarter completion and a nicer terminal experience than the default setup on many Linux systems.

## Requirements

- A Linux machine
- A user account with `sudo` access
- A terminal application

## Steps

### 1. Install Zsh

On Ubuntu or Debian:

```bash
sudo apt update
sudo apt install zsh
```

On Fedora:

```bash
sudo dnf install zsh
```

On Arch Linux:

```bash
sudo pacman -S zsh
```

### 2. Check the installed version

```bash
zsh --version
```

### 3. Make Zsh your default shell

```bash
chsh -s "$(which zsh)"
```

Log out and log back in so the change takes effect.

### 4. Start Zsh

```bash
zsh
```

If this is your first time running it, Zsh may ask how you want to create a starter configuration. The default options are fine for a first setup.

## Common errors

- `chsh: command not found`: install the package that provides `chsh`, usually `util-linux` or `passwd`.
- `zsh is not in /etc/shells`: add the path from `which zsh` to `/etc/shells`, then run `chsh` again.
- Your terminal still opens Bash: log out fully, restart the terminal, or check the shell setting inside your terminal app.

## Conclusion

You now have Zsh installed and set as your default shell. The next step is to add a framework like Oh My Zsh or configure your own `.zshrc`.
