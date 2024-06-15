import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRoles } from '../modules/user/user.interface';

const auth = (...requiredRoles:TUserRoles[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // console.log(token);
    if (!token) {
      throw new AppError(httpStatus.NOT_FOUND, 'You are not authorized!');
    }

    // verify token valid or not
    jwt.verify(token, config.jwt_access_secret as string, function (err, decoded) {
      // err
      if (err) {
        throw new AppError(httpStatus.NOT_FOUND, 'You are not authorized!');
      }

      const role = (decoded as JwtPayload).role

      if(requiredRoles && !requiredRoles.includes(role)){
        throw new AppError(httpStatus.NOT_FOUND, 'You are not authorized!');
      }

      // decoded undefined
      req.user = decoded as JwtPayload
    });
    next();
  });
};

export default auth;
