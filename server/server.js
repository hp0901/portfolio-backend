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
const contactRoutes = require("./contact");

const app = express();

// ✅ ALLOW CORS from specific origins
app.use(cors({
  origin: ["http://localhost:3000", "https://your-frontend-domain.vercel.app"], // add both local and deployed frontend
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

app.use("/contact", contactRoutes);

app.get("/", (req, res) => res.send("✅ Server running"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌐 Server: http://localhost:${PORT}`);
});
