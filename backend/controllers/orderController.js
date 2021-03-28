const Order = require('../models/order');
const Product = require('../models/product');

const handleError = require('../utils/handleError');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
// const order = require('../models/order');

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

// Get all orders - ADMIN => /api/v1/admin/orders
exports.allAdminOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach(order => {
    totalAmount += order.totalPrice
  })

  res.status(200).json({
    success: true,
    totalAmount,
    orders
  });
});

// Update / Process Order - ADMIN => /api/v1/admin/order/:id
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if(order.orderStatus === 'Delivered') {
    return next(new handleError("You have already delivered this order", 400))
  }

  order.orderItems.forEach(async item => {
    await updateStock(item.product, item.quantity)
  })

  order.orderStatus = req.body.status,
      order.deliveredAt = Date.now()
  
  await order.save()

  res.status(200).json({
    success: true,
  })
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.stock = product.stock - quantity;

  await product.save({ validateBeforeSave: false });
}