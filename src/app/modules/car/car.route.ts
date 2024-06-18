import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../user/user.constant';
import { zCarSchema, zCarUpdateSchema } from './car.validation';
import { handleCreateCar, handleDeleteSingleCar, handleGetAllCars, handleReturnCar, handleUpdateSingleCar } from './car.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLES.admin),
  validateRequest(zCarSchema),
  handleCreateCar,
);
router.put(
  '/:carId',
  auth(USER_ROLES.admin),
    validateRequest(zCarUpdateSchema),
  handleUpdateSingleCar,
);
router.delete(
  '/:carId',
  auth(USER_ROLES.admin),
  handleDeleteSingleCar,
);
router.get('/', handleGetAllCars);


router.patch('/return',auth(USER_ROLES.admin),handleReturnCar);
// router.post('/signin', validateRequest(zLoginSchema), handleSingInUser);

// router.get('/', auth(USER_ROLES.admin), handleGetAllUser);

export const CarRoutes = router;
