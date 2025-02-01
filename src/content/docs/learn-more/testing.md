---
title: End-to-end testing - Sendex
description: Sendex end-to-end testing
---

## Testing your API

Although Sendex doesn't have any built in testing features, the CLI based design means you can easily write shell scripts to perform basic tests for you. These shells scripts can then be added to your CI/CD pipelines to automate all you E2E tests. An example shell script could do a simple comparison of your endpoint response, with the contents of a file. The `--raw` flag is used here to prevent the color highlighting changing the output.

```bash
#!/bin/bash
output=$(sendex run tests/get-todo.yml --raw)
desired_output=$(cat tests/get-todo.output)

if [[ "$output" == "$desired_output" ]]; then
    echo "PASS: test matches expected output"
else
    echo "FAIL: test does not match output"
    exit 1
fi
```

Adding `exit 1` will make sure the CI/CD pipeline fails on any tests failing.

You could get pretty creative with these tests and there really aren't many limitations.
