# Sales Management API

## Tech Stacks Used

- Express
- Postgresql
- prisma

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

# Rest API

The sample response body recived will contain:

```js

```

The REST API for Sales Management Platform API is described below

## End-point: GET PRODUCTS

### Method: GET

> ```bash
> curl --location 'http://localhost:8000/api/v1/products'
> ```

### Response

```json
   "message": "Products fetched successfully",
   "data": [
       {
           "id": 3,
           "name": "Macbook air",
           "description": "The new M2",
           "price": 999.99,
           "createdAt": "2023-07-06T09:44:27.600Z",
           "updatedAt": "2023-07-06T09:44:27.600Z"
       },
       {
           "id": 4,
           "name": "Asus Zenboook",
           "description": "With the new 13th gen cpu",
           "price": 889.99,
           "createdAt": "2023-07-06T09:45:00.220Z",
           "updatedAt": "2023-07-06T09:45:00.220Z"
       },
       {
           "id": 5,
           "name": "Product 3",
           "description": "Prodcut 3 is quite good",
           "price": 45.99,
           "createdAt": "2023-07-06T09:45:08.856Z",
           "updatedAt": "2023-07-06T09:45:08.856Z"
       },
       {
           "id": 2,
           "name": "Iphone case",
           "description": "Prodcut 2 is quite good",
           "price": 19.99,
           "createdAt": "2023-07-06T09:44:07.284Z",
           "updatedAt": "2023-07-06T09:48:00.331Z"
       }
   ]
```

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

### Response

```json
{
  "message": "Product created successfully",
  "data": {
    "id": 6,
    "name": "Asus Zenboook",
    "description": "With the new 13th gen cpu",
    "price": 889.99,
    "createdAt": "2023-07-06T16:09:36.236Z",
    "updatedAt": "2023-07-06T16:09:36.236Z"
  }
}
```

## End-point: GET PRODUCTS BY ID

### Method: GET

> ```bash
> curl --location 'http://localhost:8000/api/v1/products/product_id'
> ```

### Response

```json
{
  "message": "Product fetched successfully",
  "data": {
    "id": 3,
    "name": "Macbook air",
    "description": "The new M2",
    "price": 999.99,
    "createdAt": "2023-07-06T09:44:27.600Z",
    "updatedAt": "2023-07-06T09:44:27.600Z"
  }
}
```

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

### Response

```json
{
  "message": "Product updated successfully",
  "data": {
    "id": 2,
    "name": "Iphone case",
    "description": "Prodcut 2 is quite good",
    "price": 19.99,
    "createdAt": "2023-07-06T09:44:07.284Z",
    "updatedAt": "2023-07-06T16:10:50.017Z"
  }
}
```

## End-point: GET USERS

### Method: GET

> ```bash
> curl --location 'http://localhost:8000/api/v1/users'
> ```

### Response

```json
{
  "message": "Users fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "Test User",
      "email": "test@gmail.com",
      "password": "$2b$10$P5SKbT0jGALY0GRq1lsACO28h8.LQ.H.fQXY1FLkzeiggNOh.NQE6",
      "isAdmin": false,
      "createdAt": "2023-07-06T09:42:48.040Z",
      "updatedAt": "2023-07-06T09:42:48.040Z"
    },
    {
      "id": 2,
      "name": "Admin User",
      "email": "admin@gmail.com",
      "password": "$2b$10$LDlDby0O6/2YcuVzh.7pvOsTGhV90cjvbBy4xI5BC6o.ZWzZuasRq",
      "isAdmin": true,
      "createdAt": "2023-07-06T09:42:58.283Z",
      "updatedAt": "2023-07-06T09:42:58.283Z"
    }
  ]
}
```

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

### Response

```json
{
  "message": "User logged in successfully",
  "data": {
    "id": 2,
    "name": "Admin User",
    "email": "admin@gmail.com",
    "password": "$2b$10$LDlDby0O6/2YcuVzh.7pvOsTGhV90cjvbBy4xI5BC6o.ZWzZuasRq",
    "isAdmin": true,
    "createdAt": "2023-07-06T09:42:58.283Z",
    "updatedAt": "2023-07-06T09:42:58.283Z"
  }
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

### Response

```json
{
  "message": "Orders fetched successfully",
  "data": [
    {
      "id": 2,
      "createdAt": "2023-07-06T09:59:30.173Z",
      "updatedAt": "2023-07-06T09:59:30.173Z",
      "userId": 2,
      "totalPrice": 2889.97,
      "products": [
        {
          "id": 2,
          "quantity": 2,
          "productId": 3,
          "orderId": 2,
          "product": {
            "id": 3,
            "name": "Macbook air",
            "description": "The new M2",
            "price": 999.99,
            "createdAt": "2023-07-06T09:44:27.600Z",
            "updatedAt": "2023-07-06T09:44:27.600Z"
          }
        },
        {
          "id": 3,
          "quantity": 1,
          "productId": 4,
          "orderId": 2,
          "product": {
            "id": 4,
            "name": "Asus Zenboook",
            "description": "With the new 13th gen cpu",
            "price": 889.99,
            "createdAt": "2023-07-06T09:45:00.220Z",
            "updatedAt": "2023-07-06T09:45:00.220Z"
          }
        }
      ],
      "user": {
        "id": 2,
        "name": "Admin User",
        "email": "admin@gmail.com",
        "password": "$2b$10$LDlDby0O6/2YcuVzh.7pvOsTGhV90cjvbBy4xI5BC6o.ZWzZuasRq",
        "isAdmin": true,
        "createdAt": "2023-07-06T09:42:58.283Z",
        "updatedAt": "2023-07-06T09:42:58.283Z"
      }
    }
  ]
}
```

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
