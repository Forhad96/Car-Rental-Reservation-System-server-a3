/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import { UserModel } from './user.model';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const createUser = async (payload: TUser) => {
  const isExistsUser = await UserModel.findOne({ email: payload?.email });
  if (isExistsUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User already exist');
  }
  const result = await UserModel.create(payload);
  return result;
};

const userSingIn = async (payload: TUser) => {
  const user = await UserModel.findOne({ email: payload.email }).lean();
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User doesn't exist");
  }

  const isPasswordMatched = bcrypt.compare(payload.password,user.password)
    if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, "Password incorrect, please give correct password");
  }

  const jwtPayload = {

    userId: user._id,
    userEmail:user.email,
    role:user?.role,
  };

  const accessToken = jwt.sign(jwtPayload,config.jwt_access_secret as string,{ expiresIn: '1h' },
  );


  return {
    user,
    token:accessToken};
};

const getAllUsers = async () => {
  const result = await UserModel.find()
  return result;
};
const getSingleUser = async (id:string) => {
  const result = await UserModel.findById(id)
  return result;
};



export { createUser, userSingIn,getAllUsers,getSingleUser };
