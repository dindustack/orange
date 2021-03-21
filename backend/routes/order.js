const express = require('express')
const router = express.Router();

const {
  newOrder,
  getIndividualOrder,
  loggedInUserOrder,
} = require("../controllers/orderController");

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getIndividualOrder);
router.route("/orders/me").get(isAuthenticatedUser, loggedInUserOrder);

module.exports = router;