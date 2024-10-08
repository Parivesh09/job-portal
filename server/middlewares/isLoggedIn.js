const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const authToken = req.cookies["authorization"];
    if (!authToken) {
      return res.status(401).json({
        message: "No auth token found",
        success: false,
      });
    }

    const decoded = jwt.verify(authToken, process.env.JWT_SECRET_PASSWORD);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Unauthorized access",
      success: false,
    });
  }
};
