// function sayMyName(name: string): void {
//   if (name === "Heisenberg") {
//     console.log("You're so damn right 👍");
//   } else {
//     console.log("You're wrong 👎");
//   }
// }
//
// sayMyName("Heisenberg");

// import express from "express";
// import { Express, Request, Response, Application, NextFunction } from "express";
// import { Server } from "http";

// const express = require("express");
// const app: Application = express();
// let port = 3000;
//
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("hello from ts app");
// });
//
// const server: Server = app.listen(port, () => {
//   console.log(`Server is on port ${port} `);
// });

import express, {
  Express,
  Request,
  Response,
  Application,
  NextFunction,
} from "express";
// const express = require("express");
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TS");
});

app.get("/hi", (req: Request, res: Response) => {
  res.send("Hiii there");
});

const port = 1234;
app.listen(port, () => {
  console.log(`now listening on ${port}`);
});
