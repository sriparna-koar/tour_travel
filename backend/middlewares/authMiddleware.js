// const jwt = require('jsonwebtoken');

// exports.verifyToken = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) {
//     return res.status(401).send('Access Denied');
//   }

//   try {
//     const decoded = jwt.verify(token, 'secret');
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).send('Invalid Token');
//   }
// };
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
