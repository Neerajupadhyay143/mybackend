import { Router } from "express";
import { regesterUSers } from "../controllers/User.controllers.js";

const router = Router();
router.route("/regester").post(regesterUSers)


export default router 