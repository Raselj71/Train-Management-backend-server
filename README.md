
# Train Management System

This project is a **Train Management System** with ticket purchasing capabilities. It allows users to manage train schedules, purchase tickets,user wallet, station create ,train create, and handle fare calculations. The server is built using **Node.js**, **Express**, and **MongoDB**.

## Features

- **Train Management**: Create, update, and retrieve train schedules.
- **Staion Management**: Create,update and get all the station informaiton.
- **User Management**: A user can create an account and login in to her account and add fund to her wallet.
- **Ticket Purchase**: Users can purchase tickets for trains based on available routes.
- **Fare Calculation**: Fares are automatically calculated based on the number of stops between stations.
- **Error Handling**: Proper validation and error handling for insufficient funds and invalid routes.

---

## Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js** (v12.x or higher)
- **npm** or **yarn**
- **MongoDB** (local or hosted)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Raselj71/Train-Management-backend-server.git
```

### 2. Install Dependencies

After cloning the project, install the required dependencies by running:

```bash
npm install
```

or

```bash
yarn install
```

### 3. Set Up .env file

At first , you have setup your .env file. 

```
PORT=5000
JWT_SECRET="Rasel"
MONGO_URL="mongodb+srv://alexkrein9:forall123@trainmanagementdatabase.lttk4.mongodb.net/train"
```
### 4. Start the Server

To start the server, run:

```bash
npm start
```

The server will start on **http://localhost:5000** by default.

---

## API Endpoints

Here are the main API endpoints for managing trains and purchasing tickets. You can check my API using Postman

### User Management

#### 1. Create a user
- **Method**: `POST `
- **Endpoint**: `/api/v1/user/signup`
- **Body**:
  ```json
  {
    "name":"Rasel Ahmed",
    "email":"raselj71@gmail.com",
    "password":"123456"
  }
  ```
  
#### 2. login
- **Method**: `POST `
- **Endpoint**: `/api/v1/user/signin`
- **Body**:
 ```json
  {
    
    "email":"raselj71@gmail.com",
    "password":"123456"
  }

```
### Wallet Management
#### 1. add fund to wallet
- **Method**: `POST `
- **Endpoint**: `/api/v1/wallet/add-balance`
- **Body**:
 ```json
  {
    
    "amount":500,
    "transactionType":"debit"
  }

```
#### 2. Check Wallet Balance
- **Method**: `GET `
- **Endpoint**: `/api/v1/wallet/check-balance`

#### 3. Check Transaction History
- **Method**: `GET `
- **Endpoint**: `/api/v1/wallet/check-transaction`

### Station Management

#### 1. Create Station
- **Method**: `POST `
- **Endpoint**: `/api/v1/station/create`
- **Body**:
 ```json
  {
    
    "stationName":"Pahar pur",
    "location":"Dinajpur"
  }

```
#### 2. get all Station
- **Method**: `GET `
- **Endpoint**: `/api/v1/station/getall`


#### 3. update Station
- **Method**: `PUT `
- **Endpoint**: `/api/v1/station/update/:id`
- **Example**: `http://localhost:5000/api/v1/station/update/6711451ad59dd577b7b1d897`
- **Body**:
 ```json
  {
    
    "stationName":"Pahar pur",
    "location":"Dinajpur"
  }
````
### Train Management
#### 1. Create a Train

- **Method**: `POST`
- **Endpoint**: `/api/v1/train/create-train`
- **Body**:

  ```json
  {
  "trainNumber": "80A3-50B6-9085",
  "trainName": "Express Train",
  "stopages": [
    {
      "station_id": "6711465b1736d3e583204bec",
      "arrivalTime": "2024-10-17T10:00:00Z",
      "departureTime": "2024-10-17T10:30:00Z"
    },
    {
     "station_id": "671146771736d3e583204bee",
      "arrivalTime": "2024-10-17T12:00:00Z",
      "departureTime": "2024-10-17T12:30:00Z"
    }
  ]
  }
  ```


#### 2. Update a Train

- **Method**: `PUT`
- **Endpoint**: `/api/v1/train//update-train/:id`
- **Example**: `http://localhost:5000/api/v1/train//update-train/671147c31736d3e583204bf0`
- **Body**:

  ```json
  {
  "trainNumber": "80A3-50B6-9085",
  "trainName": "Express Train",
  "stopages": [
    {
      "station_id": "6711465b1736d3e583204bec",
      "arrivalTime": "2024-10-17T10:00:00Z",
      "departureTime": "2024-10-17T10:30:00Z"
    },
    {
     "station_id": "671146771736d3e583204bee",
      "arrivalTime": "2024-10-17T12:00:00Z",
      "departureTime": "2024-10-17T12:30:00Z"
    }
  ]
  }
  ```
#### 3. Get single Train
- **Method**: `GET`
- **Endpoint**: `/api/v1/update-train/:id`

#### 4. Get All Train
- **Method**: `GET`
- **Endpoint**: `/api/v1/getall-train`


#### 3. Get a Train by ID

- **Method**: `GET`
- **Endpoint**: `/api/train/:id`

#### 4. Get All Trains

- **Method**: `GET`
- **Endpoint**: `/api/trains`

### Ticket Management 

#### 1. buy ticket
Please be careful when entering bordingStation and destinationStation. If you enter the same name station, this time it will work; otherwise, you will get an invalid train route error.
- **Method**: `POST`
- **Endpoint**: `/api/v1/ticket/buy-ticket`
- **Body**:

  ```json
  {
    "train_id":"671147c31736d3e583204bf0",
    "boardingStation":"komulapur",
     "destinationStation":"Rangpur staton"
  }
  ```

This project is licensed under the **MIT License**.

---

## Contact

For any questions or feedback, contact me at:

- Email: rasel.cse.green@gmail.com
- GitHub: [Rasel](https://github.com/Raselj71)

  

  


