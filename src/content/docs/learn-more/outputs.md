---
title: Sendex outputs
description: Sendex outputs
---

### Different output types

With Sendex, you can specify whether you want to output to the terminal, or save to a file. This can be done with either the `run` or `save` commands.

To output to terminal, use `run`:

```sh
sendex run requests/get-todo.yml
```

Or to print to a file:

```sh
sendex save requests/get-todo.yml
```

This will default the save path to `requests/get-todo.yml.out`.

### Specify output file path

To specify where to save the output, use the `--output` flag.

```sh
sendex save requests/get-todo.yml --output=responses/get-todo.txt
```

### Output flags

With both `run` and `save`, you can narrow down which is outputted. For example, the `--body` flag will only show the body of the output, and leave out the status and headers.

```sh
# only show status code
sendex run requests/get-blog.yml --status
```

```sh
# only show body
sendex run requests/get-blog.yml --body
```

```sh
# only show headers
sendex run requests/get-blog.yml --headers
```
