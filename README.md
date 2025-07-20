## Todo Web App

A simple full-stack Todo application built with React (frontend) and Express/MongoDB (backend).

### Features

- Create new todos with a title and description
- View all existing todos
- Mark todos as completed

### Project Structure

```
todo-web-app/
├── backend/   # Express.js + MongoDB REST API
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   ├── types.js
├── frontend/  # React + Vite SPA
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── CreateTodo.jsx
│   │   │   └── Todos.jsx
```

### Backend

- **Express.js** REST API
- **MongoDB** for data storage (via Mongoose)
- **Endpoints:**
  - `GET /todos` - List all todos
  - `POST /todo` - Create a new todo
  - `PUT /completed` - Mark a todo as completed
- **Validation:** Uses Zod for input validation
- **CORS** enabled for frontend-backend communication

### Frontend

- **React** SPA bootstrapped with Vite
- **Components:**
  - `CreateTodo` - Form to add new todos
  - `Todos` - Displays list of todos and completion status
- **Fetches** data from backend API

### Getting Started

#### 1. Backend

- Install dependencies:
  ```
  cd backend
  npm install
  ```
- Set up `.env` with your MongoDB connection string:
  ```
  DATABASE_PATH=<your_mongodb_connection_string>
  ```
- Start the server:
  ```
  node index.js
  ```
  The backend runs on `http://localhost:3000`.

#### 2. Frontend

- Install dependencies:
  ```
  cd frontend
  npm install
  ```
- Start the development server:
  ```
  npm run dev
  ```
  The frontend runs on `http://localhost:5173` (default Vite port).

### Author

- Sujal Kyal
**Website:** [sujalkyal.dev.in](https://sujaldev-ten.vercel.app/)