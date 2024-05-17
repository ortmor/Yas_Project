import express from "express";
import "dotenv/config";
import morgan from "morgan";
import dbConnect from "./config/connection.js";
import router from "./routes/router.js";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 7000;

app.use(morgan("dev"));
app.use(cookieParser());

app.use(express.json());


app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use('/', router)

//Database Connection
dbConnect();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  