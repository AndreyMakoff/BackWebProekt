import cors from "cors";
import express from "express";
import { applyTrpcToExpressApp } from "./lib/trpc.ts";
import { trpcRouter } from "./router/index.ts";

const expressApp = express();
expressApp.use(cors());
expressApp.get("/ping", (req, res) => {
  res.send("pong");
});

applyTrpcToExpressApp(expressApp, trpcRouter);
expressApp.listen("3000", () => {
  console.info("listening in http://localhost:3000");
});
