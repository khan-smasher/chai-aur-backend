import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import

import userRouter from "./routes/user.routes.js";

// routes declaration

// set base route to /api/v1/users
app.use("/api/v1/users", userRouter);



// ✅ Global error handler — must come after routes
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    // 👇 Print error in console
    // console.error(`[${new Date().toISOString()}] ${err.stack}`);

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

export { app };
