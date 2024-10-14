import { Router } from "express";
import UserRouter from "./users.js";

const router = Router();

router.use("/users", UserRouter);

export default router;
