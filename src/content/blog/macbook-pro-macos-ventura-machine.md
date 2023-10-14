---
title: 'My Apple MacBook Pro M2 Pro + macOS Ventura Machine Setup'
description: 'The machine setup of my MacBook Pro M2 Pro with macOS Ventura.'
pubDate: '2023-04-16'
heroImage: '/blog/macbook.jpeg'
---

This is the documentation of my Apple MacBook Pro M2 Pro with MacOS Ventura
machine setup.

## Install the Fira Code fonts

- Follow the instruction for MacOS [here](https://github.com/tonsky/FiraCode/wiki/Installing).
- In Visual Studio Code, the font will automatically be used without
  restarting the editor.
- In `kitty` terminal, you need to completely quit and restart the app.

## Install the `kitty` terminal and personal configs

- Follow the instruction in the *Binary install* section [here](https://sw.kovidgoyal.net/kitty/binary/#binary-install).
- Install the `.dotfiles` configs to the `~` directory if not already.
- Create a symlink of the `kitty.conf` file to `~/.config/kitty/` directory.
  ```bash
  ln -s ~/.dotfiles/kitty.conf ~/.config/kitty/
  ```
- Restart the `kitty` terminal to use the configs.

## Install the `pnpm` package manager

```
brew install pnpm
```

## Configure the Option key to act like as Ctrl key

This configuration is currently on the testing phase. So, from the `System
Settings > Keyboard > Keyboard Shortcuts > Modifier Keys`. Swap the between the
`Option` key and the `Control` key.

## Setup `tmux-resurrect` and `tmux-continuum` for `tmux` environment persistence

Install the `tmux-resurrect` and `tmux-continuum` in the `~/.config` directory.

```
cd ~/.config
git clone git@github.com:tmux-plugins/tmux-continuum.git
git clone git@github.com:tmux-plugins/tmux-resurrect.git
```

Set these configs in the `.tmux.conf` file.

```
# Persist tmux sessions on reboots
run-shell ~/.config/tmux-resurrect/resurrect.tmux
# Auto-save tmux sessions for persistence
run-shell ~/.config/tmux-continuum/continuum.tmux
```

## Setup conventional and emojified commits

Install `commitizen`.

```bash
pnpm install -g commitizen
```

Install `cz-conventional-changelog` to enable conventional commits.

```bash
pnpm install -g cz-conventional-changelog
```

**Note:** Always use the latest LTS version of Node.

Create a symbolic link of the `.czrc` file to the `~` directory.

```bash
ln -s ~/.dotfiles/.czrc ~/
```

Install `devmoji` to enable emojified commit messages.

```bash
pnpm install -g devmoji
```

## Setup `mkcert` and `local-ssl-proxy` to enable local HTTPS proxy servers

```bash
brew install mkcert
mkcert -install
mkcert localhost
```

```bash
pnpm install -g local-ssl-proxy
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```
