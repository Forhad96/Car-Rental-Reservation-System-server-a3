import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { createCar } from './car.service';

const handleCreateCar = catchAsync(async (req, res) => {
  const result = await createCar(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
});

export { handleCreateCar };
