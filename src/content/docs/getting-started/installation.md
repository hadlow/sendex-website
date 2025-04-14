---
title: Installation
description: How to install Sendex
---

### Homebrew installation

Install Sendex via Homebrew Tap:

```sh
brew tap hadlow/sendex
brew install sendex
```

Installation can be validated by running:

```sh
sendex help
```

Which should give:

```
Sendex is a lightweight, file-based tool to make requests to your API

Get started by running:
sendex new requests/get-blog.yml

Usage:
  sendex [command]

Available Commands:
  help        Help about any command
  new         Create a Sendex request file
  run         Run a request file
  save        Save a response to a file

Flags:
  -h, --help   help for sendex

Use "sendex [command] --help" for more information about a command.
```
