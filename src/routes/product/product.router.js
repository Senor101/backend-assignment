const express = require("express");

const {
  isAuthenticated,
  isAdmin,
} = require("../../middlewares/userAuth.middleware");

const router = express.Router();

const productController = require("./product.controller");

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.post("/", isAuthenticated, isAdmin, productController.createProduct);

router.delete(
  "/:id",
  isAuthenticated,
  isAdmin,
  productController.deleteProduct
);

router.put("/:id", isAuthenticated, isAdmin, productController.updateProduct);

module.exports = router;
