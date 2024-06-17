import { Types } from "mongoose";

export type TBooking = {
  date: string; // The date of the booking in YYYY-MM-DD format
  user: Types.ObjectId; // Identifier for the user (reference to user model)
  car: Types.ObjectId; // Identifier for the booked car (reference to car model)
  startTime: string; // The start time of the booking in 24hr format (HH:mm)
  endTime: string; // The end time of the booking in 24hr format (HH:mm)
  totalCost: number; // The total cost of the booking, default is 0
};

