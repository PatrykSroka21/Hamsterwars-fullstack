// Import npm-paket and modules
// Allmänna inställningar
import express from "express";
import cors from "cors";
import hamsters from "/routes/hamsters.js"
const app = express();
const PORT = 1338;
// import hamsters from "./routes/hamsters.js";
// Middleware
// CORS open ou project so we can open it from ather domine
app.use(cors());

// Parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// Logger - skriv ut information om inkommande request
app.use((req, res, next) => {
  console.log(`Logger: ${req.method}  ${req.url} `, req.body);
  next();
});
app.use("/Hamsters", hamsters)
// Serve static files in this folder
app.use(express.static("public"));

// Routes


// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
