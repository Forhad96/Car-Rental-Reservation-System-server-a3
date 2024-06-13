import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { handleCreateUser } from './user.controller';
import { zUserSchema } from './user.validation';

const router = express.Router();

router.post('/signup', validateRequest(zUserSchema), handleCreateUser);

// router.post(
//   '/create-faculty',
//   validateRequest(createFacultyValidationSchema),
//   UserControllers.createFaculty,
// );

// router.post(
//   '/create-admin',
//   validateRequest(createAdminValidationSchema),
//   UserControllers.createAdmin,
// );

export const UserRoutes = router;
