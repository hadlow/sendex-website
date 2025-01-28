---
title: Basic usage - Sendex
description: Basic guide on using Sendex
---

## Create a new request

Requests can be created using Sendex via the `new` command. This command will create a file at the specified file path using a standard template which you can use as a starting point.

```sh
sendex new requests/get-todo.yml
```

This command will create a file at `requests/get-todo.yml` using the default GET template.

## Editing your request

Opening the file will give us this:

```yml
args:
  - id: 1 # specify 1 as default
method: GET
endpoint: http://localhost:8000/blog/{id} # we can use 'id' here
headers:
  - Content-Type: application/json
  - Accept: application/json
whitelist-headers:
  - Content-Type
  - Accept
```

> [Click here](/learn-more/request-configuration) for full explanation of all parameters that can be used.

- The args parameter allows us to pass in command line arguments. Formatted like `id=2`
- Method can be any HTTP method
- Endpoint is the API URL
- Headers must be used in list format
- Whitelist headers keeps the output clean, but only showing the headers listed

If you're just trying out Sendex, feel free to use a test API, such as [JSON Placeholder](https://jsonplaceholder.typicode.com). Replace the default endpoint with `https://jsonplaceholder.typicode.com/todos/{id}`.

## Running a request

Once your request file has been updated for your API, it can then be ran using:

```sh
sendex run request/get-todo.yml id=123
```

This should give the following response:

```sh
200 OK
Content-Type: application/json; charset=utf-8
{
  "userId": 7,
  "id": 123,
  "title": "esse et quis iste est earum aut impedit",
  "completed": false
}
```
