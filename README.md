
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
# using docker compose
$ docker-compose up -d --build

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
# CRUD API (USER creation-signup, EDIT, DELETE,GET USER, SignINUSER)
All APIs attached in request.http file:

### Create a new user
POST http://localhost:3000/auth/signup
content-type: application/json

{
  "email": "test50@test.com",
  "password": "12345"
}

### Sign in as an existing user
POST http://localhost:3000/auth/signin
content-type: application/json

{
  "email": "test50@test.com",
  "password": "12345"
}

### Get the currently signed in user
GET http://localhost:3000/auth/whoami

### Sign out
POST http://localhost:3000/auth/signout

### Find a particular user with a given ID
GET http://localhost:3000/auth/4

### Find all users with a given email
GET http://localhost:3000/auth?email=asdf@asdf.com

### Delete a user given id
DELETE http://localhost:3000/auth/3

### Update a user
PATCH http://localhost:3000/auth/4
content-type: application/json

{
  "password": "aaaaa"
}