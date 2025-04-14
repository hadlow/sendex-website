---
title: Environment variables
description: Sendex environment variables
---

### Usage

Using environment variables is similar to using args. Use curley braces and prepend your variable name with `env.`. This will use any environment variable you have set.

Set your environment variable.

```sh
export AUTH_TOKEN="token123"
```

Then use by adding `{env.AUTH_TOKEN}` anywhere in your configuration file.

```yml
method: GET
endpoint: https://jsonplaceholder.typicode.com/todos/5
headers:
  - Authorization: Bearer {env.AUTH_TOKEN}
  - Content-Type: application/json
```
