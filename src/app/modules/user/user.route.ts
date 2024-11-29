import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';
import { UserValidationSchemas } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidationSchemas.zCreateUserSchema),
  UserControllers.createUser,
);
router.get('/', UserControllers.getAllUser);

router.get('/:userId', UserControllers.getSingleUser);

export const UserRoutes = router;
