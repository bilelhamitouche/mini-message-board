import express from "express";
import path from "path";
import indexRouter from "./routes/indexRouter.js";

// Initialize the application and declare a few variables
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

// Set the views directory and engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware functions
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// Setup Main router
app.use("/", indexRouter);

// Listen to port 3000
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
