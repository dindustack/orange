const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createNewProduct,
  getIndividualProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route("/products").get(getAllProducts);

router.route("/product/:id").get(getIndividualProduct);

router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles('admin'), createNewProduct);

router.route("/admin/product/:id")
    .put(isAuthenticatedUser, updateProduct)
    .delete(isAuthenticatedUser, deleteProduct);

router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(isAuthenticatedUser, getProductReviews);
router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

module.exports = router; 