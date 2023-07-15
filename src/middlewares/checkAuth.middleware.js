const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  try {
    if (req.headers.hasOwnProperty('authorization')) {
      const token = req?.headers?.authorization.split(' ')[1];

      jwt.verify(token, process.env.JWT_SECRET);

      return next();
    } else {
      throw new Error('UNAUTHORIZED')
    }

  } catch (e) {
    return res.status(301).json({ message: e.message })
  }
};

module.exports = checkAuth