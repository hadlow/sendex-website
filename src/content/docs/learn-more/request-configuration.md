---
title: Request configuration
description: Sendex request configuration
---

## List of parameters that can be used

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| args | list | Custom arguments which are used to give more control in request. Can be added to the endpoint, headers or body parameters using a {} syntax. The args can then be defaulted to a string or integer | `args: - id: 1` |
| method | get / post / put / patch / delete / options / head | HTTP method | get |
| endpoint | string | URL of your endpoint | http://localhost:8000/blog/1 |
| headers | list | List of headers in format `- Header-Name: value` | `- Content-Type: application/json` |
| body | string | Simple string containing body data | `{ id: 123 }` |
| allow-headers | list | List of headers you want to show, will remove any other header and keep the output clean | `- Content-Type` |

## Examples

### Simple get

```yml
method: GET
endpoint: https://jsonplaceholder.typicode.com/todos/5
headers:
  - Content-Type: application/json
  - Accept: application/json
```

### Get with args

```yml
args:
  - id: 1 # specify 1 as default value
method: GET
endpoint: https://jsonplaceholder.typicode.com/todos/{id} # use ID value here
headers:
  - Content-Type: application/json
  - Accept: application/json
```

Args can be used on the run command.

```sh
sendex run get-example.yml id=5
```

### Get hiding all headers from output

```yml
args:
  - id: 1 # specify 1 as default value
method: GET
endpoint: https://jsonplaceholder.typicode.com/todos/{id} # use ID value here
headers:
  - Content-Type: application/json
  - Accept: application/json
allow-headers:
  - Nil
```

### Get with only listed headers being shown

```yml
args:
  - id: 1 # specify 1 as default value
method: GET
endpoint: https://jsonplaceholder.typicode.com/todos/{id} # use ID value here
headers:
  - Content-Type: application/json
  - Accept: application/json
allow-headers:
  - Content-Type
```

### Simple post

```yml
method: POST
endpoint: https://jsonplaceholder.typicode.com/todos
body: |
  {
    "userId": 222,
    "title": "delectus aut autem",
    "completed": false
  }
headers:
  - Content-Type: application/json
  - Accept: application/json
```

### Post with args

```yml
args:
  - id: 1 # specify 1 as default value
method: POST
endpoint: https://jsonplaceholder.typicode.com/todos
body: |
  {
    "userId": {id},
    "title": "delectus aut autem",
    "completed": false
  }
headers:
  - Content-Type: application/json
  - Accept: application/json
```

Args can be used on the run command.

```sh
sendex run post-example.yml id=5
```
