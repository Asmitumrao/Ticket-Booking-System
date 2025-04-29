import { Router } from "express";
import { registerUser,verifyEmail,loginUser,logout,getUser} from "../controllers/user.controller.js";
import authenticate from "../middlewares/authenticate.js";


const router = Router();

router.route("/register").post(registerUser);
router.route("/verify-email").get(verifyEmail);
router.route("/login").post(loginUser);
router.route("/logout").post(authenticate,logout);
router.route("/status").get(authenticate,getUser)


export default router;