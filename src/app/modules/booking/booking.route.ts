import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { zBookingSchema } from './booking.validation';
import {
  handleCreateBooking,
  handleGetAllBookings,
  handleGetUserBookings,
} from './booking.controller';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../user/user.constant';

const router = Router();

router.post(
  '/',
  auth(USER_ROLES.user),
  validateRequest(zBookingSchema),
  handleCreateBooking,
);

router.get('/', auth(USER_ROLES.admin), handleGetAllBookings);

router.get('/my-bookings', auth(USER_ROLES.user), handleGetUserBookings);

export const BookingRoutes = router;
