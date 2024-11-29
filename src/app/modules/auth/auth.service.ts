import httpStatus from 'http-status';
import { TUser } from '../user/user.interface';
import { UserModel } from '../user/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import config from '../../config';
import { startSession } from 'mongoose';
import { createToken } from './auth.utils';

const loginUser = async (payload: TUser) => {
  const { email, password } = payload;

  const session = await startSession();
  session.startTransaction();

  try {
    const user = await UserModel.findOne({ email })
      .select('+password')
      .session(session);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "User doesn't exist");
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        'Password incorrect, please provide the correct password',
      );
    }

    const jwtPayload = {
      userId: user?._id,
      email: user?.email,
      role: user?.role,
    };

    // const accessToken = jwt.sign(
    //   jwtPayload,
    //   config.jwt_access_secret as string,
    //   {
    //     expiresIn: config.jwt_access_expired_in,
    //   },
    // );

    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expired_in as string,
    );

    const refreshToken = createToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expired_in as string,
    );

    await session.commitTransaction();
    session.endSession();

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
export const AuthServices= {  loginUser };
