import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';

const router = express.Router();

// router.post(
//   '/create-student',
//   validateRequest(createStudentValidationSchema),
//   UserControllers.createStudent,
// );

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
