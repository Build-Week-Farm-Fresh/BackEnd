# Farm Fresh Produce API Endpoints

## Authentication

### Register

**[POST]** `/api/auth/register`

#### Request

```
{
  username: "test@testing.com",       // required, string
  password: "test",                   // required, string
  farmer: true,                       // boolean
  consumer: false                     // boolean
}
```

#### Responses

##### 200 (OK)

```
{
  message: "User created successfully. Please log in."
}
```

### Login

**Logs in an existing user**

_Method Url:_ `/api/auth/login`

_HTTP method:_ **[POST]**

##### Request Body

```
{
  username: "test@testing.com",       // required, string
  password: "test"                    // required, string
}
```

##### Responses

###### 200 (OK)

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
    location: ""
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
