import express from "express";
import { dbConnect } from "./src/config/dbConfig.js";
const PORT = process.env.PORT || 8001;

const app = express();

//DB connection and server status
dbConnect()
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose
    instance. */
    app.listen(PORT, "0.0.0.0", (error) => {
      return !error
        ? console.log(`server is running at http://localhost:${PORT}`)
        : console.log(error);
    });
  })
  .catch((error) => console.log(error));
