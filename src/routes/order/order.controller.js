const { PrismaClient } = require("@prisma/client");

const throwError = require("../../utils/throwerror");

const prisma = new PrismaClient();

const getOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        products: true,
        user: true,
      },
    });
    return res.status(200).json({
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await prisma.order.findUnique({
      where: orderId,
      include: {
        products: true,
        user: true,
      },
    });
    if (!order) {
      return throwError("Order not found", 404);
    }
    return res.status(200).json({
      message: "Order fetched successfully",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const { productIds } = req.body;
    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    const prices = products.reduce(
      (total, product) => total + product.price,
      0
    );
    totalPrice = parseFloat(prices.toFixed(2));

    const newOrder = await prisma.order.create({
      data: {
        user: { connect: { id: user.id } },
        products: { connect: productIds.map((id) => ({ id })) },
        totalPrice,
      },
      include: {
        products: true,
        user: true,
      },
    });
    return res.status(201).json({
      message: "Order created successfully",
      data: newOrder,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  updateOrder,
};
