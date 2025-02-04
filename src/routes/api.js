const express = require("express");

const router = express.Router();

const userRouter = require("./user/user.router");
const productRouter = require("./product/product.router");
const orderRouter = require("./order/order.router");
const { isAuthenticated } = require("../middlewares/userAuth.middleware");

router.use("/users", userRouter);

router.use("/products", productRouter);

router.use("/orders", isAuthenticated, orderRouter);

module.exports = router;
