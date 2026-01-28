import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { validate } from "../middlewares/validation.middleware";
import { registerSchema } from "../validations/auth.validation";

const authRouter = Router();

// authRouter.post("/register", validate(registerSchema), register);

authRouter.route("/register").post(register);

export default authRouter;
