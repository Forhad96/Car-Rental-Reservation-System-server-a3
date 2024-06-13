/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import { UserModel } from './user.model';
import { TUser } from './user.interface';

const createUser = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  return result;
};

// const createFacultyIntoDB = async (password: string, payload: TFaculty) => {
//   // create a user object
//   const userData: Partial<TUser> = {};

//   //if password is not given , use default password
//   userData.password = password || (config.default_password as string);

//   //set student role
//   userData.role = 'faculty';

//   // find academic department info
//   const academicDepartment = await AcademicDepartment.findById(
//     payload.academicDepartment,
//   );

//   if (!academicDepartment) {
//     throw new AppError(400, 'Academic department not found');
//   }

//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();
//     //set  generated id
//     userData.id = await generateFacultyId();

//     // create a user (transaction-1)
//     const newUser = await User.create([userData], { session }); // array

//     //create a faculty
//     if (!newUser.length) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
//     }
//     // set id , _id as user
//     payload.id = newUser[0].id;
//     payload.user = newUser[0]._id; //reference _id

//     // create a faculty (transaction-2)

//     const newFaculty = await Faculty.create([payload], { session });

//     if (!newFaculty.length) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create faculty');
//     }

//     await session.commitTransaction();
//     await session.endSession();

//     return newFaculty;
//   } catch (err: any) {
//     await session.abortTransaction();
//     await session.endSession();
//     throw new Error(err);
//   }
// };

// const createAdminIntoDB = async (password: string, payload: TAdmin) => {
//   // create a user object
//   const userData: Partial<TUser> = {};

//   //if password is not given , use default password
//   userData.password = password || (config.default_password as string);

//   //set student role
//   userData.role = 'admin';

//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();
//     //set  generated id
//     userData.id = await generateAdminId();

//     // create a user (transaction-1)
//     const newUser = await User.create([userData], { session });

//     //create a admin
//     if (!newUser.length) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
//     }
//     // set id , _id as user
//     payload.id = newUser[0].id;
//     payload.user = newUser[0]._id; //reference _id

//     // create a admin (transaction-2)
//     const newAdmin = await Admin.create([payload], { session });

//     if (!newAdmin.length) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
//     }

//     await session.commitTransaction();
//     await session.endSession();

//     return newAdmin;
//   } catch (err: any) {
//     await session.abortTransaction();
//     await session.endSession();
//     throw new Error(err);
//   }
// };

export  {
createUser
};
