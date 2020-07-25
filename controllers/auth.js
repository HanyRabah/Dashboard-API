const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const config = require('../config');

exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: process.env.JWKSURI
  }),
  audience: process.env.JWT_AUDIENCE,
  issuer: process.env.JWT_ISSUER,
  algorithms: ['RS256']
})

// middleware not used now 
exports.checkRole = (role) => (req, res, next) => {
  const user = req.user;
  if(user && user[config.AUTH_NAMESPACE].includes(role)) {
    next();
  } else {
    return res.status(401).send('Not authoriazed');
  }
}
