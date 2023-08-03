import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";
import { routes } from "./routers";

const app = express();
app.use(json());

app.use("/users", routes.user);
app.use("/car", routes.car);

export default app;
