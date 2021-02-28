const User = require('../models/user');

const handleError = require('../utils/handleError');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors( async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/photo-1535713875002-d1d0cf377fde_zszh3n.jpg',
            url: 'https://res.cloudinary.com/dindustack/image/upload/v1614419695/avatars/photo-1535713875002-d1d0cf377fde_zszh3n.jpg'
        }
    })

   sendToken(user, 200, res)
})

// Login user => /a[i/v1/login]
exports.loginUser = catchAsyncErrors( async(req, res, next) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if(!email || !password) {
        return next(new handleError('Please enter email & password', 400))
    }

    // Finding user in database
    const user = await User.findOne({ email }).select('+password')

    if(!user) {
        return next(new handleError('Invalid Email or Password', 401));
    }

    // Check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);
   
    if(!isPasswordMatched) {
        return next(new handleError('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res)
})