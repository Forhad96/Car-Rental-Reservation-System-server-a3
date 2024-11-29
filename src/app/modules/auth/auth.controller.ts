import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {  userSignIn } from "./auth.service";



const handleUserSignIn = catchAsync(async (req, res) => {
  const result = await userSignIn(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

export {handleUserSignIn}