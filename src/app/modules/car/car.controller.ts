import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { createCar, getAllCars } from './car.service';

const handleCreateCar = catchAsync(async (req, res) => {
  const result = await createCar(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
});


const handleGetAllCars = catchAsync(async (req,res)=>{
    const result = await getAllCars()


      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Cars retrieved successfully',
        data: result,
      });
})

export { handleCreateCar,handleGetAllCars };
