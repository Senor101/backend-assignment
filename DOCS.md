# Sales Management API

## Installation

To install this Sales Management Api on your local system follow these steps:

1. Clone the repo from github.

   ```bash
   git clone https://github.com/Senor101/backend-assignment.git
   ```

2. Navigate to the project directory.

   ```bash
    cd backend-assignment
   ```

3. Install the required dependencies.
   ```bash
   npm install
   ```
4. Configure environment variables.

- Create a `.env` file in the project root directory.
- Add the necessary environment variables like `SESSION_SECRET_KEY` , `DATABASE_URL` ,`DIRECT_URL` ,`SHADOW_DATABASE_URL`

5. Run the application

   ```bash
   npm start
   ```

6. Access this sales management api in your browser at
   ```bash
    http://localhost:8000/api/v1/
   ```

_Instead of this you can directly use the api hosted on render._

```bash
 https://sales-management-api.onrender.com/api/v1
```

## Rest API

The REST API for Sales Management Platform API is described below

## End-point: GET PRODUCTS

### Method: GET

> ```bash
> curl --location 'http://localhost:8000/api/v1/products'
> ```

## End-point: POST PRODUCTS

### Method: POST

> ```bash
> curl --location 'http://localhost:8000/api/v1/products'
> ```

### Body (**raw**)

```json
{
  "name": "Asus Zenboook",
  "description": "With the new 13th gen cpu",
  "price": 889.99
}
```

## End-point: GET PRODUCTS BY ID

### Method: GET

> ```bash
> curl --location 'http://localhost:8000/api/v1/products/product_id'
> ```

## End-point: DELETE PRODUCT

### Method: DELETE

> ```bash
> curl --location 'http://localhost:8000/api/v1/products/product_id'
> ```

## End-point: UPDATE PRODUCT

### Method: PUT

> ```bash
> curl --location 'http://localhost:8000/api/v1/products/product_id'
> ```

### Body (**raw**)

```json
{
  "name": "Iphone case",
  "price": 19.99
}
```

## End-point: GET USERS

### Method: GET

> ```bash
> curl --location 'http://localhost:8000/api/v1/users'
> ```

## End-point: REGISTER USER

### Method: POST

> ```bash
> curl --location 'http://localhost:8000/api/v1/users/register'
> ```

### Body (**raw**)

```json
{
  "name": "Admin User",
  "email": "admin@gmail.com",
  "password": "NewUser",
  "isAdmin": true
}

// {
//     "name" :"Test User",
//     "email" : "test@gmail.com",
//     "password" : "NewUser",
//     "isAdmin" : false
// }
```

## End-point: LOGIN USER

### Method: POST

> ```bash
> curl --location 'http://localhost:8000/api/v1/users/login'
> ```

### Body (**raw**)

```json
{
  "email": "admin@gmail.com",
  "password": "NewUser"
}
```

## End-point: LOGOUT USER

### Method: POST

> ```bash
> curl --location 'http://localhost:8000/api/v1/users/logout'
> ```

## End-point: GET ORDERS

### Method: GET

> ```bash
> curl --location 'http://localhost:8000/api/v1/orders'
> ```

## End-point: POST ORDERS

### Method: POST

> ```bash
> curl --location 'http://localhost:8000/api/v1/orders'
> ```

### Body (**raw**)

```json
{
  "products": [
    {
      "id": 4,
      "quantity": 1
    },
    {
      "id": 2,
      "quantity": 1
    }
  ]
}
```

## End-point: GET ORDER BY ID

### Method: GET

> ```bash
> curl --location 'http://localhost:8000/api/v1/orders/order_id'
> ```

## End-point: DELETE ORDER

### Method: DELETE

> ```bash
> curl --location 'http://localhost:8000/api/v1/orders/order_id'
> ```

## End-point: UPDATE ORDER

### Method: PUT

> ```bash
> curl --location 'http://localhost:8000/api/v1/orders/order_id'
> ```

### Body (**raw**)

```json
{
  "products": [
    {
      "id": 4,
      "quantity": 3
    },
    {
      "id": 3,
      "quantity": 1
    }
  ]
}
```

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
