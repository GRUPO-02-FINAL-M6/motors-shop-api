import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";

import { routes } from "./routers";
import { handleError } from "./errors";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors);

app.use("/users", routes.user);
app.use("/advertisement", routes.advertisement);

app.use(handleError);

export default app;
