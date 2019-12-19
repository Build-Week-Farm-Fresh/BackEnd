# Farm Fresh Produce API

## Authentication

### Register

**[POST]** `/api/auth/register`

#### REQUEST

| name       | type   | required | description           |
| ---------- | ------ | -------- | --------------------- |
| `username` | String | Yes      | Must be unique        |
| `password` | String | Yes      |                       |
| `type`     | String | Yes      | "farmer" or "consumer |

_example:_

```
{
  username: "test@testing.com",
  password: "password",
  type: "farmer"
}
```

#### RESPONSE

##### 200 (OK)

```
{
  message: "User registration successful."
}
```

### Login

**[POST]** `/api/auth/login`

#### REQUEST

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must exist in database |
| `password` | String | Yes      | Must exist in database |

```
{
  username: "test@testing.com",
  password: "password"
}
```

#### RESPONSE

##### 200 (OK)

```
{
  id: 1,
  username: "test@testing.com",
  token: "eyJhbGciOiJIUzI1NiIsInR5"
}
```

<!-- ## Farmer

- CRUD produce from my inventory
  - POST e.g.:
    {
    name: "",
    farmer_id: "", // Store user_id in context
    location: "",
    image: ""
    }
  - GET (all, individual item?)
  - PUT e.g.:
    {
    id: "",
    name: "",
    farmer_id: "",
    location: ""
    }
  - DELETE (grab produce_id from route)
- view orders for my produce
  - GET

## Consumer Endpoints

- view produce local to me
  - GET (all produce)
- add produce to shopping cart
  - Context API
- place an order
  - POST e.g.:
    {
    items: [
    { name: "Apple", farmer_id: "1" },
    { name: "Carrot", farmer_id: "1" }
    ],
    consumer_id: 2
    } -->
