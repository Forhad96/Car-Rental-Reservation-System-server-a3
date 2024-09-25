import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {  getAllUsers, getSingleUser } from './user.service';


const handleGetAllUser = catchAsync(async (req, res) => {
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











export {  handleGetAllUser,handleGetSingleUser };
