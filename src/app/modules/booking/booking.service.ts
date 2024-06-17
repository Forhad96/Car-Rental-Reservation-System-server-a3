import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { UserModel } from '../user/user.model';
import { TBooking } from './booking.interface';
import { BookingModel } from './booking.model';
import CarModel from '../car/car.model';
import { startSession } from 'mongoose';

const createBooking = async (userId: string, payload: TBooking) => {
  const session = await startSession();
  session.startTransaction();

  try {
    // Find user by ID
    const user = await UserModel.findById(userId).session(session);
    if (!user) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        `User with ID ${userId} not found`,
      );
    }

    // Find car by ID
    const car = await CarModel.findById(payload.car).session(session);
    if (!car) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        `Car with ID ${payload.car} not found`,
      );
    }

    // Check for existing booking
    const existingBooking = await BookingModel.findOne({
      user: userId,
      car: payload.car,
    }).session(session);

    if (existingBooking) {
      throw new AppError(
        httpStatus.CONFLICT,
        `Booking already exists for user ID ${userId} and car ID ${payload.car}`,
      );
    }

    // Assign user ID to payload
    payload.user = user._id;

    // Create booking
    const booking = await BookingModel.create([payload], { session });

    // Populate the user and car fields
    const populatedBooking = await BookingModel.findById(booking[0]._id)
      .populate('user')
      .populate('car')
      .session(session);

    await session.commitTransaction();
    session.endSession();

    return populatedBooking;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getAllBookings = () => {
  const result = BookingModel.find().populate('user').populate('car');
  return result;
};

const getUserBooking = async (userId: string) => {
  const userBookings = await BookingModel.find({ user: userId })
    .populate('user')
    .populate('car');
if(!userBookings.length){
       throw new AppError(httpStatus.NOT_FOUND, "Booking Doesn't exists");
}

  return userBookings;
};

export { createBooking, getAllBookings, getUserBooking };
