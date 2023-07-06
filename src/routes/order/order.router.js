const express = require("express");

const router = express.Router();

const orderController = require("./order.controller");

router.get("/", orderController.getOrders);

// router.get("/:id", orderController.getOrderById);

router.post("/", orderController.createOrder);

// router.delete("/:id", orderController.deleteOrder);

// router.put("/:id", orderController.updateOrder);

module.exports = router;
