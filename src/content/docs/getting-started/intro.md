---
title: Introduction
description: What is Sendex?
---

## What is Sendex?

Sendex is a lightweight, file-based tool to make requests to your API. Sendex can be used as a lightweight alternative to Postman. With Sendex, your requests are stored in YAML files in your project's source code. This means whenever your backend changes, your request config files can change with it, keeping everything consistent.

## How does Sendex work?

An example request file would look something like:

```yaml
args:
  - id: 1 # specify 1 as default
method: GET
endpoint: http://jsonplaceholder.typicode.com/todos/{id} # we can use 'id' here
headers:
  - Content-Type: application/json
  - Accept: application/json
whitelist-headers: # only show these headers in the output
  - Content-Type
```

This request can be called with:

```sh
sendex run get-blog.yml id=5
```

Which will then make a request to the URL http://jsonplaceholder.typicode.com/todos/5, and the response will be displayed in the terminal, only showing the Content-Type headers.

A response will look something like:

```json
200 OK
Content-Type: application/json; charset=utf-8
{
  "userId": 1,
  "id": 5,
  "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  "completed": false
}
```
