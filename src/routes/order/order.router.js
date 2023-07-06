const express = require("express");

const router = express.Router();
const { isAuthenticated } = require("../../middlewares/userAuth.middleware");

const orderController = require("./order.controller");

router.get("/", isAuthenticated, orderController.getOrders);

router.get("/:id", isAuthenticated, orderController.getOrderById);

router.post("/", isAuthenticated, orderController.createOrder);

router.delete("/:id", isAuthenticated, orderController.deleteOrder);

router.put("/:id", isAuthenticated, orderController.updateOrder);

module.exports = router;
