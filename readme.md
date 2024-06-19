# Car Renting System Backend

## Live server

https://car-rental-backend-eta.vercel.app

## Overview
This project is the backend implementation for a Car Renting System. It focuses on error handling, CRUD operations, authentication, authorization, and transaction management.


## Features
- **Error Handling**: Global error handling middleware to catch and handle exceptions.
- **CRUD Operations**: Manage car entries and bookings with create, read, update, and delete operations.
- **Authentication & Authorization**: Secure routes with JWT-based authentication and role-based access control.
- **Transaction Management**: Handle transactions with rollback capabilities if necessary.

## Tech Stack

**Server:** Node, Express,mongoose,typescript,dotenv,bycript


## Models
The database is designed with the following models:
- Car
- User
- Booking

## Admin Actions
- **Car Management**: Create, update, and soft delete car entries.
- **Booking Oversight**: View all ongoing and past bookings.
- **Ride Cost Calculation**: Calculate total cost for completed rentals.

## User Actions
- **Book a Ride**: Book cars by specifying `carId` and `startTime`.
- **Rental History**: Access past booking records.

## API Endpoints
### Authentication
- POST `/api/auth/signup` - Register a new user or admin.
- POST `/api/auth/signin` - Login for users and admins.

### Car Management
- POST `/api/cars` - Create a new car entry.
- GET `/api/cars` - Retrieve all cars.
- GET `/api/cars/:carId` - Retrieve a single car.
- PUT `/api/cars/:carId` - Update a car entry.
- DELETE `/api/cars/:carId` - Soft delete a car entry.

### Booking Management
- GET `/api/bookings` - Retrieve all bookings.
- POST `/api/bookings` - Create a new booking.
- GET `/api/bookings/my-bookings` - Retrieve user's bookings.
- PUT `/api/cars/return` - Update booking with `endTime` and calculate cost.

## Error Responses
Proper error responses with status codes and messages for various exceptions.

## Not Found Handler
A global handler for unmatched routes with a generic "Not Found" message.

## Authentication Middleware
Middleware to authenticate routes and ensure proper access control.

## Validation
Input validation using Zod to ensure data consistency.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Forhad96/Car-Rental-Reservation-System-server-a3.git
    cd Car-Rental-Reservation-System-server-a3.git
    ```

2. Install dependencies:
    ```sh
    npm install
    ```
### Environment Variables
3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/car-renting-system
    JWT_SECRET=your_jwt_secret
    BCRYPT_SALT_ROUNDS=10
    ```

### Running the Application

1. Install necessary packages (if not already install):
    ```sh
    npm install 
    ```

2. Start the application:
    ```sh
    npm start
    or
    npm run dev
    ```

3. The server will start on `http://localhost:3000`.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
