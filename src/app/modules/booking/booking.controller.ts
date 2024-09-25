import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  createBooking,
  getAllBookings,
  getUserBooking,
} from './booking.service';

const handleCreateBooking = catchAsync(async (req, res) => {
  const { email } = req.user;

  const bookingData = req.body;

  const result = await createBooking(email, bookingData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car booked successfully',
    data: result,
  });
});
const handleGetAllBookings = catchAsync(async (req, res) => {
  const result = await getAllBookings();

  // if (!result.length) {
  //   sendResponse(res, {
  //     statusCode: httpStatus.NOT_FOUND,
  //     success: false,
  //     message: 'No Data Found',
  //     data: result,
  //   });
  // }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings retrieved successfully',
    data: result,
  });
});
const handleGetUserBookings = catchAsync(async (req, res) => {
  const { userId } = req.user;
  console.log(userId);
  const result = await getUserBooking(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My Bookings retrieved successfully',
    data: result,
  });
});
export { handleCreateBooking, handleGetAllBookings, handleGetUserBookings };
