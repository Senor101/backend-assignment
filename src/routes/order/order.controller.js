const { PrismaClient } = require("@prisma/client");

const throwError = require("../../utils/throwerror");

const prisma = new PrismaClient();

const getOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: req.session.user.id,
      },
      include: {
        order: { include: { product: true } },
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
    const orderId = Number(req.params.id);
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        order: { include: { product: true } },
        user: true,
      },
    });
    if (!order) {
      return throwError("Order not found", 404);
    }
    if (order.userId !== req.session.user.id) {
      return throwError("Unauthorized", 401);
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
    const { products } = req.body;
    const productIds = products.map((product) => product.id);

    const productsInDb = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });
    let totalPrice = 0;
    products.forEach((product) => {
      const { id, quantity } = product;
      const fetchedProduct = productsInDb.find((product) => product.id === id);
      totalPrice = totalPrice + fetchedProduct.price * quantity;
    });

    const newOrder = await prisma.order.create({
      data: {
        user: { connect: { id: req.session.user.id } },
        order: {
          create: products.map((product) => ({
            quantity: product.quantity,
            product: { connect: { id: product.id } },
          })),
        },
        totalPrice,
      },
      include: {
        user: true,
        order: true,
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
    const orderId = Number(req.params.id);
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });
    if (!order) {
      return throwError("Order not found", 404);
    }
    if (order.userId !== req.session.user.id) {
      return throwError("Unauthorized", 401);
    }
    const deletedOrder = await prisma.order.delete({
      where: {
        id: orderId,
      },
      include: { order: true },
    });
    return res.status(200).json({
      message: "Order deleted successfully",
      data: deletedOrder,
    });
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const orderId = Number(req.params.id);
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });
    if (!order) {
      return throwError("Order not found", 404);
    }
    if (order.userId !== req.session.user.id) {
      return throwError("Unauthorized", 401);
    }
    const { products } = req.body;

    const productIds = products.map((product) => product.id);

    const productsInDb = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });
    let totalPrice = 0;
    products.forEach((product) => {
      const { id, quantity } = product;
      const fetchedProduct = productsInDb.find((product) => product.id === id);
      totalPrice = totalPrice + fetchedProduct.price * quantity;
    });

    const updatedOrder = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        user: { connect: { id: req.session.user.id } },
        order: {
          create: products.map((product) => ({
            quantity: product.quantity,
            product: { connect: { id: product.id } },
          })),
        },
        totalPrice,
      },
      include: {
        user: true,
        order: true,
      },
    });

    return res.status(200).json({
      message: "Order updated successfully",
      data: updatedOrder,
    });
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
