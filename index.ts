import express, { Express } from "express";
import randomGraphRouter from "./router/random-graph";

const app: Express = express();

app.use(express.static(__dirname + "/public"));

app.use(randomGraphRouter);

app.listen(5153, () => {
  console.log("Server run on http://localhost:5153");
});
