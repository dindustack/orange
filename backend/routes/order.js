const express = require('express')
const router = express.Router();

const {
  newOrder,
  getIndividualOrder,
  loggedInUserOrder,
  allAdminOrders,
} = require("../controllers/orderController");

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getIndividualOrder);
router.route("/orders/me").get(isAuthenticatedUser, loggedInUserOrder);
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles('admin'), allAdminOrders);

module.exports = router;