const { ApiError, InternalServerErrorException } = require("../tools")

const errorConverterMiddleware = (err, req, res, next) => {
  let error = err;
  if(!(error instanceof ApiError)){
    error = InternalServerErrorException('something went wrong, try again later')
  };
  
  next(error);
}

module.exports = { errorConverterMiddleware }