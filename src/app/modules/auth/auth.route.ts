import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { zSignInSchema, zSignUpSchema } from "./auth.validation";
import { handleUserSignIn, handleUserSignUp } from "./auth.controller";

const router = Router()


router.post('/signup', validateRequest(zSignUpSchema), handleUserSignUp);
router.post('/signin', validateRequest(zSignInSchema), handleUserSignIn);



export const AuthRoutes = router
