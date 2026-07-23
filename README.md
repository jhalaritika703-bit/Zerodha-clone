# Zerodha Clone

A full-stack **MERN-based Zerodha Clone** that replicates the core functionality of the Zerodha trading platform. The project is divided into three separate applications for better modularity and scalability.

## Project Structure

```text
Zerodha-clone/
├── backend/      # Express.js + MongoDB + JWT Authentication
├── frontend/     # React Authentication (Login & Signup)
├── dashboard/    # React Dashboard (Trading Interface)
```

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Dashboard Access
* Logout Support

### Dashboard

* Watchlist
* Holdings
* Positions
* Orders
* Funds
* Apps Section
* Responsive UI

### Backend

* REST API using Express.js
* MongoDB Database
* Mongoose ODM
* JWT Authentication
* Password Hashing with bcrypt
* CORS Configuration

---

## Tech Stack

### Frontend

* React.js
* Bootstrap
* Axios
* React Router

### Dashboard

* React.js
* Material UI / CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* CORS

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/jhalaritika703-bit/Zerodha-clone.git
```

---

### Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

#### Dashboard

```bash
cd ../dashboard
npm install
```

---

## Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=3000
MONGO_URL=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

---

## Running the Project

### Start Backend

```bash
cd backend
npm start
```

or

```bash
npm run dev
```

---

### Start Frontend

```bash
cd frontend
npm start
```

Runs on:

```
http://localhost:3001
```

---

### Start Dashboard

```bash
cd dashboard
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Authentication Flow

1. User signs up or logs in.
2. Backend validates credentials.
3. JWT token is generated.
4. Token is stored in Local Storage.
5. User is redirected to the Dashboard.
6. Protected routes require a valid JWT.

---

## Future Improvements

* Portfolio Analytics
* Buy/Sell Order Execution
* Live Stock Market Data
* Charts and Candlestick Graphs
* User Profile
* Watchlist Persistence
* Dark Mode
* Deployment with Vercel and Render

---

## Author

**Ritika Jhala**

GitHub: https://github.com/jhalaritika703-bit

---

## License

This project is created for educational and portfolio purposes.
