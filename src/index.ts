import express, { Express, Request, Response } from "express";
import { getUser } from "./user";
import dotenv from "dotenv";

//For env File
dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, from Express and TS!");
});

app.get("/user", getUser);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
