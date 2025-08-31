<div align="center">
  <h1>🗄️ Task Manager App <sup>(Backend)</sup></h1>
  <p>A robust, secure, and scalable backend API for the Task Manager App, built with <b>Node.js</b>, <b>Express</b>, and <b>TypeScript</b>.</p>
  <img src="https://img.shields.io/badge/Node.js-20.x-brightgreen?logo=node.js" />
  <img src="https://img.shields.io/badge/Express-4.x-black?logo=express" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</div>

---

## 🚀 Features

- 🔐 **JWT Authentication** (login/signup, protected routes)
- 📝 **Task CRUD**: Create, read, update, delete tasks
- ⭐ **Task Priority**: Set and update priority (1-5)
- 👤 **User Management**: Register, login, user info
- 🛡️ **Auth Middleware**: Protects task routes
- 🗄️ **MongoDB** (via Mongoose) for data persistence
- 🧩 **Modular Structure**: Controllers, routes, middleware, models, config
- 🛠️ **TypeScript**: Type safety throughout
- 🌱 **Environment Variables** via `.env`
- 📦 **Ready for deployment**

---

## 📁 Project Structure

```text
backend/
├── src/
│   ├── server.ts              # Entry point
│   ├── config/
│   │   └── db.ts              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.ts  # Auth logic
│   │   └── taskController.ts  # Task logic
│   ├── middleware/
│   │   └── auth.ts            # Auth middleware
│   ├── models/
│   │   ├── Task.ts            # Task schema/model
│   │   └── User.ts            # User schema/model
│   ├── routes/
│   │   ├── authRoutes.ts      # Auth endpoints
│   │   └── taskRoutes.ts      # Task endpoints
│   └── types/
│       ├── index.d.ts         # Global types
│       └── express/index.d.ts # Express type overrides
├── .env                       # Environment variables
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
└── .gitignore
```

---

## 🛠️ Tech Stack
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="24"/> **Node.js**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="24"/> **Express.js**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="24"/> **TypeScript**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="24"/> **MongoDB** (Mongoose)
- 🛡️ **JWT** for authentication
- 🌱 **dotenv** for environment variables

---

## ⚡ Quick Start

1. 📦 **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```
2. 📝 **Configure environment:**
   - Copy `.env.example` to `.env` and fill in your MongoDB URI and JWT secret.
3. ▶️ **Run the server:**
   ```bash
   npm run dev
   ```
   The server runs on `http://localhost:5000` by default.

---

## 🔑 API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT

### Tasks (Protected)
- `GET /api/tasks` — Get all tasks for user
- `POST /api/tasks` — Create a new task
- `PUT /api/tasks/:id` — Update a task (including priority)
- `DELETE /api/tasks/:id` — Delete a task

> All `/api/tasks` routes require a valid JWT in the `Authorization` header.

---

## 🧩 Folder Details
- **controllers/**: Business logic for auth and tasks
- **models/**: Mongoose schemas for User and Task
- **middleware/**: Auth middleware for JWT verification
- **routes/**: Express routers for auth and tasks
- **config/**: Database connection logic
- **types/**: TypeScript types and Express overrides

---

## 📦 Environment Variables
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — Secret for signing JWTs
- `PORT` — (optional) Server port (default: 5000)

---

## 🤝 Contributing
Pull requests are welcome! Please open an issue or discussion for major changes.

---

## 📄 License
MIT

---

## 👨‍💻 Author
- [Dimpal Gogoi](https://github.com/dkg1212)

---

## 📚 Learn More
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [JWT Introduction](https://jwt.io/introduction)

