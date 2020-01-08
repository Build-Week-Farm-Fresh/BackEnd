# Farm Fresh Produce API

Base URL:

https://farm-fresh-backend.herokuapp.com/

## Authentication

### Register

**[POST]** `/api/auth/register`

#### REQUEST

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must be unique         |
| `password` | String | Yes      |                        |
| `type`     | String | Yes      | "farmer" or "consumer" |

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

_example:_

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

## Produce

### Get Produce

**[GET]** `/api/produce`

#### REQUEST

| name | type    | required | description            |
| ---- | ------- | -------- | ---------------------- |
| `id` | Integer | Yes      | ID of logged in farmer |

_example:_

```
{
  id: 1
}
```

#### RESPONSE

##### 200 (OK)

```
[
  {
    id: 1,
    name: "Apple",
    price: 1.99,
    quantity: 1,
    farmer_id: 1
  },
  {
    id: 2,
    name: "Banana",
    price: 1.89,
    quantity: 3,
    farmer_id: 1
  },
  {
    id: 3,
    name: "Broccoli",
    price: 0.99,
    quantity: 1,
    farmer_id: 1
  }
]
```

### Add Produce

**[POST]** `/api/produce`

#### REQUEST

| name        | type    | required | description            |
| ----------- | ------- | -------- | ---------------------- |
| `farmer_id` | String  | Yes      | ID of logged in farmer |
| `name`      | String  | Yes      | Must be unique         |
| `price`     | Decimal | Yes      |                        |
| `quantity`  | Integer | Yes      |                        |

_example:_

```
{
  farmer_id: 1,
  name: "Apple",
  price: 1.99,
  quantity: 1
}
```

#### RESPONSE

##### 200 (OK)

```
{
  id: 1,
  name: "Apple",
  price: 1.99,
  quantity: 1,
  farmer_id: 1,
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
