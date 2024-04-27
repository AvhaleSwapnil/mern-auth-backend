export const errorHandler = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode;
  error.message;
  return error;
};
