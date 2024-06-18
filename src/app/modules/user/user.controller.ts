import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { createUser, getAllUsers, getSingleUser, userSingIn } from './user.service';

const handleCreateUser = catchAsync(async (req, res) => {
  const result = await createUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  });
});
const handleSingInUser = catchAsync(async (req, res) => {
  const result = await userSingIn(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});
const handleGetAllUser = catchAsync(async (req, res) => {
  console.log(req.user);
  const result = await getAllUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users is retrieve successfully',
    data: result,
  });
});
const handleGetSingleUser = catchAsync(async (req, res) => {
const {userId} = req.params
  const result = await getSingleUser(userId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users is retrieve successfully',
    data: result,
  });
});











export { handleCreateUser, handleSingInUser, handleGetAllUser,handleGetSingleUser };
