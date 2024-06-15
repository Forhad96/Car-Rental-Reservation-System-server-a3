import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { handleCreateUser, handleSingInUser } from './user.controller';
import { zLoginSchema, zUserSchema } from './user.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/signup', validateRequest(zUserSchema), handleCreateUser);
router.post('/signin', auth(), validateRequest(zLoginSchema), handleSingInUser);

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
