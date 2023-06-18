const responseMiddleware = (req, res, next) => {
  res.sendSuccess = (data, message = "Success") => {
    return res.status(200).json({ message, data });
  };

  res.sendCreated = (data, message = "Created") => {
    return res.status(201).json({ message, data });
  };

  res.sendError = (error, statusCode = 500) => {
    return res.status(statusCode).json({ message: "An error occurred", error });
  };

  res.sendNotFound = (message = "Resource not found") => {
    return res.status(404).json({ message });
  };

  next();
};

export default responseMiddleware;
