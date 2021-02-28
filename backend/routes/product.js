const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createNewProduct,
  getIndividualProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { isAuthenticatedUser } = require('../middlewares/auth')

router.route("/products").get(isAuthenticatedUser, getAllProducts);
router.route("/product/:id").get(getIndividualProduct);
router.route("/admin/product/new").post(createNewProduct);
router.route("/admin/product/:id").put(updateProduct).delete(deleteProduct);
// router.route("/admin/product/:id");

module.exports = router;