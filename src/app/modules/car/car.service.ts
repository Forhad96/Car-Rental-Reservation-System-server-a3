import { isValidObjectId } from 'mongoose';
import { TCar, TReturnCar } from './car.interface';
import CarModel from './car.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { BookingModel } from '../booking/booking.model';
import { TBooking } from '../booking/booking.interface';
import { calculateTotalCost } from './car.utils';

const createCar = async (payload: TCar) => {
  const result = await CarModel.create(payload);
  return result;
};
const getAllCars = async () => {
  const result = await CarModel.find();
  return result;
};
const getSingleCar = async (id:string)  => {
  const result = await CarModel.findById(id);
  return result;
};

const updateSingleCar = async (carId: string, payload: TCar) => {
  // check id valid or or not
  if (!isValidObjectId(carId)) {
    throw new AppError(httpStatus.NOT_FOUND, 'Booking id is not valid');
  }
  const result = await CarModel.findByIdAndUpdate(carId, payload, {
    upsert: true,
    new: true,
  });
  return result;
};
const deleteSingleCar = async (carId: string) => {
  // check id valid or or not
  if (!isValidObjectId(carId)) {
    throw new AppError(httpStatus.NOT_FOUND, 'Booking id is not valid');
  }
  const result = await CarModel.findByIdAndUpdate(
    carId,
    { isDeleted: true },
    { upsert: true, new: true },
  );
  return result;
};

// return car
const returnCar = async (payload: TReturnCar): Promise<TBooking> => {
  const { bookingId, endTime } = payload;

  // Check if the ID is valid
  if (!isValidObjectId(bookingId)) {
    throw new AppError(httpStatus.NOT_FOUND, 'Booking ID is not valid');
  }

  // Find the booking and populate the user and car details
  const booking = await BookingModel.findById(bookingId)
    .populate('user')
    .populate('car')
    .exec();

  // Check if the booking exists
  if (!booking) {
    throw new AppError(httpStatus.NOT_FOUND, 'Booking not found');
  }

  // Find the associated car
  const car = await CarModel.findById(booking.car);

  if (!car) {
    throw new AppError(httpStatus.NOT_FOUND, 'Car not found');
  }

  const startTime = booking.startTime;
  const pricePerHour = car.pricePerHour;

  // Calculate the total cost
  const totalCost = calculateTotalCost(startTime, endTime, pricePerHour);

  // Update the booking with the total cost and end time
  booking.totalCost = totalCost;
  booking.endTime = endTime;
  await booking.save();

  // Update the car's availability
  car.status = 'available';
  await car.save();

  return booking;
};
export { createCar, getAllCars,getSingleCar, updateSingleCar, deleteSingleCar, returnCar };
