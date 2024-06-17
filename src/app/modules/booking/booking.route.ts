import { Router } from "express"
import validateRequest from "../../middlewares/validateRequest"
import { zBookingSchema } from "./booking.validation"
import { handleCreateBooking, handleGetAllBookings } from "./booking.controller"
import auth from "../../middlewares/auth"
import { USER_ROLES } from "../user/user.constant"

const router = Router()


router.post("/",auth(USER_ROLES.user),validateRequest(zBookingSchema),handleCreateBooking)

router.get("/",auth(USER_ROLES.admin),handleGetAllBookings)





export const BookingRoutes = router 