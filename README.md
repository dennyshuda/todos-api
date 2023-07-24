# TODOS REST API

To start local environment run `yarn dev` or `npm run dev`

## Endpoint

### AUTH

#### Register

> http://localhost:4000/register

- method: `POST`
- body:

```json
{
  "name": "John Doe",
  "email": "example@mail.com",
  "password": "Password123"
}
```

#### Login

> http://localhost:4000/login

- method: `POST`
- body:

```json
{
  "email": "example@mail.com",
  "password": "Password123"
}
```

### Todos

#### Create Todos (Auth)

> http://localhost:4000/todos

- method: `POST`
- Content-Type: `application/json`
- Authorization: `Bearer token`
- body:

```json
{
  "authorId": "0b2e0cc3-7e44-45e7-be98-8bc7a806bc98",
  "title": "tester 2",
  "description": "gatauuu",
  "deadline": "2008-01-01T00:00:00.000Z"
}
```

#### Update Todos (Auth)

> http://localhost:4000/todos/:todoId

- method: `POST`
- Content-Type: `application/json`
- Authorization: `Bearer token`
- body:

```json
{
  "authorId": "0b2e0cc3-7e44-45e7-be98-8bc7a806bc98",
  "title": "tester 2",
  "description": "gatauuu",
  "deadline": "2008-01-01T00:00:00.000Z"
}
```

#### Get Todos by ID (Auth)

> http://localhost:4000/todos/:todoId

- method: `GET`

#### Get All Todos (Auth)

> http://localhost:4000/todos

- method: `GET`


#### Delete Todos by ID (Auth)

> http://localhost:4000/todos/:todoId

- method: `DELETE`
- parameter is todo's ID
