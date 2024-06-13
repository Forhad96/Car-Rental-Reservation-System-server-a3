import { NextFunction, Request, RequestHandler, Response } from 'express';

/**
 * A higher-order function that wraps an asynchronous request handler function
 * and catches any errors that occur during its execution, passing them to the
 * next middleware in the chain.
 *
 * @param fn - The asynchronous request handler function to be wrapped.
 * @returns A new request handler function that catches and forwards errors.
 */
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
