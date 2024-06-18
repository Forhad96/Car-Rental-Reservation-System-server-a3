import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  handleCreateUser,
  handleGetAllUser,
  handleGetSingleUser,
  handleSingInUser,
} from './user.controller';
import { zLoginSchema, zUserSchema } from './user.validation';
import auth from '../../middlewares/auth';
import { USER_ROLES } from './user.constant';

const router = express.Router();

router.post('/signup', validateRequest(zUserSchema), handleCreateUser);
router.post('/signin', validateRequest(zLoginSchema), handleSingInUser);

router.get('/', handleGetAllUser);

router.get('/:userId',handleGetSingleUser)

export const UserRoutes = router;
