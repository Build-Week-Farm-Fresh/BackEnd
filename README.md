# Farm Fresh Produce API

Base URL:

https://farm-fresh-backend.herokuapp.com/

## Authentication

### Register

**[POST]** `/api/auth/register`

#### REQUEST

##### Body

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must be unique         |
| `password` | String | Yes      |                        |
| `type`     | String | Yes      | "farmer" or "consumer" |

_example:_

```
{
  username: "test@test.com",
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

##### Body

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

### Get all produce for user

**[GET]** `/api/produce/user/:id`

#### REQUEST

##### URL Parameters

| name | type    | required | description            |
| ---- | ------- | -------- | ---------------------- |
| `id` | Integer | Yes      | ID of logged in farmer |

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

### Get individual produce item

**[GET]** `/api/produce/:id`

#### REQUEST

##### URL Parameters

| name | type    | required | description        |
| ---- | ------- | -------- | ------------------ |
| `id` | Integer | Yes      | ID of produce item |

#### RESPONSE

##### 200 (OK)

```
{
  id: 1,
  name: "Apple",
  price: 1.99,
  quantity: 1,
  farmer_id: 1
}
```

### Add Produce

**[POST]** `/api/produce`

#### REQUEST

##### Body

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
