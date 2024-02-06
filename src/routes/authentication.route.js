import { Router } from "express";
import {
  login,
  logout,
  loginWithGoogle,
} from "../controller/authentication.controller.js";

const router = Router();

router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/login-google").post(loginWithGoogle);

export {router};
