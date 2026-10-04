# CRUD Application

## Overview
This repository contains a simple full‑stack CRUD example built with:
- **Backend**: Node.js, Express, Mongoose (MongoDB)
- **Frontend**: React (Vite) with TailwindCSS (via the Vite template)

It demonstrates a basic blog API and a React UI to interact with it.

---

## Folder Structure
```
Crud/
├─ backend/                # Express API
│   ├─ src/
│   │   ├─ app.js               # Express app configuration
│   │   ├─ index.js             # Entry point (starts server & DB connection)
│   │   ├─ db/
│   │   │   └─ index.js         # MongoDB connection helper
│   │   ├─ models/
│   │   │   └─ Blog.model.js    # Mongoose schema for a blog post
│   │   ├─ controllers/
│   │   │   └─ blog.controller.js  # CRUD controller logic
│   │   ├─ routes/
│   │   │   └─ blog.route.js    # Express router for blog endpoints
│   │   └─ constants.js          # (currently empty placeholder)
│   ├─ package.json          # Backend dependencies & scripts
│   └─ .env                  # Environment variables (example below)
│
├─ frontend/                # React + Vite UI
│   ├─ src/
│   │   ├─ App.jsx               # Main React component
│   │   ├─ index.css             # Global CSS (Tailwind entry point)
│   │   ├─ main.jsx              # React entry point
│   │   ├─ assets/               # Static assets (images, icons …)
│   │   ├─ components/           # UI components (you can add here)
│   │   └─ context/              # React context for shared state (optional)
│   ├─ public/                # Static files served by Vite
│   ├─ vite.config.js         # Vite configuration (includes Tailwind)
│   └─ package.json           # Frontend dependencies & scripts
│
├─ .gitignore                # Ignored files for both sides
├─ Readme.md                  # This documentation (you are reading it!)
└─ .DS_Store                 # macOS metadata file (ignore)
```

---

## Prerequisites
- **Node.js** (v20 or later recommended) – includes `npm`
- **MongoDB** instance (local or remote). You can use the free Atlas cloud service or run `mongod` locally.
- **Git** (optional, for version control)

---

## Backend Setup
1. **Navigate to the backend folder**
   ```bash
   cd /Users/fahad/Documents/Crud/backend
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Create an `.env` file** (you already have a template). Add at minimum:
   ```dotenv
   PORT=5000                # Port the API will listen on
   MONGODB_URI=mongodb://localhost:27017/crud-demo   # Adjust if using Atlas
   ```
4. **Run the development server**
   ```bash
   npm run dev   # Uses nodemon (see package.json scripts)
   ```
   The server should start and output something like:
   `Server is running on port 5000`
5. **API is now available** at `http://localhost:5000/api/blogs`.

---

## Frontend Setup
1. **Navigate to the frontend folder**
   ```bash
   cd /Users/fahad/Documents/Crud/frontend
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the Vite development server**
   ```bash
   npm run dev
   ```
   This will launch Vite and display a local URL, typically `http://localhost:5173`.

---

## Running the Full Stack Locally
1. **Start MongoDB** (if not already running).
2. **Start the backend** (`npm run dev` in `backend`).
3. **Start the frontend** (`npm run dev` in `frontend`).
4. Open the frontend URL in your browser. The UI will communicate with the backend API at the default `http://localhost:5000`.

---

## Useful Scripts
- **Backend**
  - `npm run dev` – Run with **nodemon** for hot‑reloading.
  - `npm run lint` – (If configured) run Prettier / ESLint checks.
- **Frontend**
  - `npm run dev` – Starts Vite dev server.
  - `npm run build` – Produces a production‑ready bundle.
  - `npm run preview` – Serves the built app locally.
  - `npm run lint` – Runs **oxlint** (configured in `package.json`).

---

## API Endpoints (Backend)
| Method | Path | Description |
|--------|------|-------------|
| `POST`   | `/api/blogs` | Create a new blog post |
| `GET`    | `/api/blogs` | Retrieve all blog posts |
| `GET`    | `/api/blogs/:id` | Retrieve a single blog by ID |
| `PUT`    | `/api/blogs/:id` | Update a blog post |
| `DELETE` | `/api/blogs/:id` | Delete a blog post |

---

## License
This project is for educational purposes. Feel free to modify and extend it as needed.
# vigilant-system
