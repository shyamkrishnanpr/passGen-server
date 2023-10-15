import express from "express";
import cors from "cors";
import {db} from './dbConnection'


db()

const app = express();
const port = 8080;


app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:8000"],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
