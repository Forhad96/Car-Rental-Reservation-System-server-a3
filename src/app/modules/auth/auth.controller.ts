import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userSignUp, userSignIn } from "./auth.service";


const handleUserSignUp = catchAsync(async (req, res) => {
  const result = await userSignUp(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  });
});
const handleUserSignIn = catchAsync(async (req, res) => {
  const result = await userSignIn(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

export {handleUserSignUp,handleUserSignIn}