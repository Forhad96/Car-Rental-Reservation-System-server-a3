import httpStatus from 'http-status';
import { TUser } from '../user/user.interface';
import { UserModel } from '../user/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import config from '../../config';
const userSignUp = async (payload: TUser) => {
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

  const isPasswordMatched = bcrypt.compare(payload.password, user.password);
  if (!isPasswordMatched) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'Password incorrect, please give correct password',
    );
  }

  const jwtPayload = {
    userId: user._id,
    userEmail: user.email,
    role: user?.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expired_in,
  });

  return {
    user,
    token: accessToken,
  };
};

export { userSignUp, userSingIn };
