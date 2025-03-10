/* The lines of code you provided are importing various modules and functions in a Node.js application
using ES6 module syntax. Here's a breakdown of what each import statement is doing: */
import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./src/lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/authRoutes.js";

/* `dotenv.config();` is a function call that loads the environment variables from a `.env` file into
`process.env`. This allows you to store configuration settings in a separate file (`.env`) and
access them in your Node.js application using `process.env`. It helps keep sensitive information
like API keys, database URLs, and other configuration details separate from your codebase. */
dotenv.config();

/* `const app = express();` creates an instance of the Express application. Express is a popular web
framework for Node.js that simplifies the process of building web applications and APIs. */
const app = express();
const PORT = process.env.PORT;

/* These lines of code are setting up middleware functions in an Express application: */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes)

/* The `app.listen(PORT, () => { ... });` code block is starting the Express application server to
listen for incoming requests on a specified port. Here's what each part of this code block does: */
app.listen(PORT, () => {
  ConnectDB();
  console.log(`Server is running on port: ${PORT}`);
});
