import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { createBooking, getAllBookings } from './booking.service';

const handleCreateBooking = catchAsync(async (req, res) => {
  const { userId } = req.user;
  const bookingData = req.body;

  const result = await createBooking(userId, bookingData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car booked successfully',
    data: result,
  });
});
const handleGetAllBookings = catchAsync(async (req, res) => {
  console.log('get');

  const result = await getAllBookings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings retrieved successfully',
    data: result,
  });
});

export { handleCreateBooking, handleGetAllBookings };
