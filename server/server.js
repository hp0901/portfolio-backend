// const express = require("express");
// const cors = require("cors");
// const contactRoutes = require("./contact");

// const app = express();
// app.use(cors());
// app.use(express.json());
// console.log("going to use contact routes");
// app.use("/contact", contactRoutes); // << important!

// app.get("/", (req, res) => res.send("✅ Server running"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🌐 Server: http://localhost:${PORT}`);
// });

// server/api/index.js (or your main backend file, e.g., server.js)

const express = require("express");
const cors = require("cors");
const contactRoutes = require("./contact"); // Assuming this path is correct for your routes

const app = express();

// --- Secure CORS Configuration ---
// Get allowed origin from environment variable, default to localhost for development
// IMPORTANT: In production, ensure process.env.CORS_ORIGIN is set to your Netlify frontend URL.
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

const corsOptions = {
    origin: allowedOrigin, // This will be 'http://localhost:3000' in dev, or your Netlify URL in prod
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow common HTTP methods
    credentials: true, // Allow cookies and authorization headers to be sent
    allowedHeaders: ['Content-Type', 'Authorization'], // Explicitly allow these headers
};

app.use(cors(corsOptions)); // Apply CORS middleware with specific options

// --- Other Middleware ---
app.use(express.json()); // To parse JSON request bodies
// app.use(express.urlencoded({ extended: true })); // Uncomment if you handle URL-encoded data

console.log("going to use contact routes");
app.use("/contact", contactRoutes); // Your contact form route

// Default route for Vercel functions (e.g., if you access https://your-backend.vercel.app/)
app.get("/", (req, res) => res.send("✅ Server running"));

// --- Server Listening (for local development) ---
// Vercel itself doesn't use app.listen() in production serverless functions,
// but it's needed for local testing with 'node server.js' or 'npm start'.
const PORT = process.env.PORT || 3000; // Use process.env.PORT provided by Vercel in production
app.listen(PORT, () => {
    console.log(`🌐 Server: http://localhost:${PORT}`);
});

// --- Export the Express app for Vercel ---
// Vercel expects your Express app to be exported from the main file in the 'api' directory.
module.exports = app;
