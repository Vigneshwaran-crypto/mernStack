import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoute from "./routes/posts.js";

const app = express();

// The body-parser middleware is used to parse the incoming request body in various formats, such as JSON or URL-encoded data. It extracts the data and makes it available in the req.body object for further processing.
app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));

// CORS is a security feature implemented by web browsers to prevent cross-origin requests
app.use(cors());

//localhost:5000/post
app.use("/post", postRoute); //routing hits according to the api's

//connection url from mongodb/atlas site (mongodb's official site)
const CONNECTION_URL = `mongodb+srv://vigneshdev8055:VigneshDev8055@cluster0.dasrarw.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

//connecting mongodb server using mongoose
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port : ${PORT}`)); //listening after successfully connected
  })
  .catch((err) => console.log("ERROR WHILE CONNECTING DB :", err.message));
