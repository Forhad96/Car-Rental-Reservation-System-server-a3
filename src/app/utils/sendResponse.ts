import { Response } from 'express';

// Define a TypeScript type for the response structure
type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T; // Make data optional to handle cases where data is not found
};

// Utility function to check if an object or array is empty
const isEmpty = (value: any): boolean => {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (value && typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};

// Define a generic function to send a response
const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  // Check if data is not found or is empty
  if (data.data === undefined || data.data === null || isEmpty(data.data)) {
    // Set status code to 404 and send a "Not Found" response
    res.status(404).json({
      success: false,
      message: 'No Data Found',
      data: data.data,
    });
  } else {
    // Set the HTTP status code and send a JSON response
    res.status(data.statusCode).json({
      success: data.success,
      message: data.message,
      data: data.data,
    });
  }
};

// Export the function as the default export
export default sendResponse;
