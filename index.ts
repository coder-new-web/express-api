import express, { Express } from "express";
import randomGraph from "./router/random-graph";

const app: Express = express();

app.use(express.static(__dirname + "/public"));

app.use(randomGraph);

app.listen(5153, () => {
  console.log("Server run on http://localhost:5153");
});
