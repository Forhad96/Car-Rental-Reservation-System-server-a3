import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  handleGetAllUser,
  handleGetSingleUser,
} from './user.controller';
const router = express.Router();



router.get('/', handleGetAllUser);

router.get('/:userId',handleGetSingleUser)

export const UserRoutes = router;
