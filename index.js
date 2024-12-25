const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json()); 

// Authorization middleware
const authorization = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(403).json({ message: "No token provided." });
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET || "YOUR_SECRET_KEY");
        req.userId = data.id;
        req.userRole = data.role;
        return next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token." });
    }
};

// Routes
app.get("/", (req, res) => {
    return res.json({ message: "Hello World 🇵🇹 🤘" });
});

app.get("/login", (req, res) => {
    try {
        const token = jwt.sign({ id: 7, role: "captain" }, process.env.JWT_SECRET || "YOUR_SECRET_KEY");
        return res
            .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .json({ message: "Logged in successfully 😊 👌" });
    } catch (error) {
        return res.status(500).json({ message: "Error signing token." });
    }
});

app.get("/protected", authorization, (req, res) => {
    return res.json({ user: { id: req.userId, role: req.userRole } });
});

app.get("/logout", authorization, (req, res) => {
    return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out 😏 🍀" });
});

// Start server
const start = (port) => {
    try {
        app.listen(port, () => {
            console.log(`API up and running at: http://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit();
    }
};

start(3333);