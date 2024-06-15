import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../user/user.constant';
import { zCarSchema } from './car.validation';
import { handleCreateCar, handleGetAllCars } from './car.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLES.admin),
  validateRequest(zCarSchema),
  handleCreateCar,
);
router.get('/',handleGetAllCars)
// router.post('/signin', validateRequest(zLoginSchema), handleSingInUser);

// router.get('/', auth(USER_ROLES.admin), handleGetAllUser);

export const CarRoutes = router;
