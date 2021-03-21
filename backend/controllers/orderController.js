const Order = require('../models/order');
const Product = require('../models/product');

const handleError = require('../utils/handleError');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Create a new order  => /api/v1/order/new
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        orderItems,
        shippingInformation,
        itemPrice,
        taxFee,
        shippingFee,
        totalPrice,
        paymentInformation,
    } = req.body;

    const order = await Order.create({
      orderItems,
      shippingInformation,
      itemPrice,
      taxFee,
      shippingFee,
      totalPrice,
      paymentInformation,
      paidAt: Date.now(),
      user: req.user._id
    });

    res.status(200).json({
        success: true,
        order
    })
})

// Get Individual order => /api/v1/order/:id
exports.getIndividualOrder = catchAsyncErrors( async(req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if(!order) {
        return next(new handleError('No order found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

// Get logged in user order => /api/v1/orders/me
exports.loggedInUserOrder = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user.id });

  res.status(200).json({
    success: true,
    orders
  });
});