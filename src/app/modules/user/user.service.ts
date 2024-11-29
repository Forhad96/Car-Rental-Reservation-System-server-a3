/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import { UserModel } from './user.model';
import { TUser } from './user.interface';


const createUser = async (payload: TUser) => {
  const isExistsUser = await UserModel.findOne({ email: payload?.email });
  if (isExistsUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User already exist');
  }
  const result = await UserModel.create(payload);
  return result;
};

const getAllUsers = async () => {
  const result = await UserModel.find()
  return result;
};
const getSingleUser = async (id:string) => {
  const result = await UserModel.findById(id)
  return result;
};



export const UserServices= { createUser, getAllUsers,getSingleUser };
