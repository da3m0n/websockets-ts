"use strict";
// function sayMyName(name: string): void {
//   if (name === "Heisenberg") {
//     console.log("You're so damn right 👍");
//   } else {
//     console.log("You're wrong 👎");
//   }
// }
//
// sayMyName("Heisenberg");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
// const express = require("express");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello from TS");
});
app.get("/hi", (req, res) => {
    res.send("Hiii there");
});
const port = 1234;
app.listen(port, () => {
    console.log(`now listening on ${port}`);
});
//# sourceMappingURL=index.js.map