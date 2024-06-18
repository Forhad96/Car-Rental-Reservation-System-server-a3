/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import { UserModel } from './user.model';
import { TUser } from './user.interface';



const getAllUsers = async () => {
  const result = await UserModel.find()
  return result;
};
const getSingleUser = async (id:string) => {
  const result = await UserModel.findById(id)
  return result;
};



export { getAllUsers,getSingleUser };
