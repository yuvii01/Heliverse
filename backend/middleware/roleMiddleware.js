// backend/middleware/roleMiddleware.js
const roleMiddleware = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access forbidden: insufficient privileges' });
    }
    next();
  };
  
  module.exports = { roleMiddleware };
  