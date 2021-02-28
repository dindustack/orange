const User = require('../models/user');

const jwt = require('jsonwebtoken');
const handleError = require("../utils/handleError");
const catchAsyncErrors = require("./catchAsyncErrors");

// Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors( async (req, res, next) => {

    const { token } = req.cookies;

    if(!token) {
        return next(new handleError('Login first to access this resource.', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id);

    next()
})
