import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';


const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users is retrieve successfully',
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
const {userId} = req.params
  const result = await UserServices.getSingleUser(userId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users is retrieve successfully',
    data: result,
  });
});


export const UserControllers =  {  createUser,getAllUser,getSingleUser };
