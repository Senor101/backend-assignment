const { PrismaClient } = require("@prisma/client");

const throwError = require("../../utils/throwerror");

const prisma = new PrismaClient();

const getProducts = async (req, res, next) => {
  try {
    // TODO: IMPLEMENT RESPECTIVE CONTROLLER FUNCTION
    const products = await prisma.product.findMany();
    res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    // TODO: IMPLEMENT RESPECTIVE CONTROLLER FUNCTION
    const productId = Number(req.params.id);
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });
    if (!product) {
      return throwError("Product not found", 404);
    }
    return res.status(200).json({
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    // TODO: IMPLEMENT RESPECTIVE CONTROLLER FUNCTION
    const productDetails = req.body;
    // productDetails.createdBy = req.user.id;
    const product = await prisma.product.create({
      data: productDetails,
    });
    return res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    // TODO: IMPLEMENT RESPECTIVE CONTROLLER FUNCTION
    const productId = Number(req.params.id);
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });
    if (!product) {
      return throwError("Product not found", 404);
    }
    const deletedProduct = await prisma.product.delete({
      where: {
        id: productId,
      },
    });
    return res.status(200).json({
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    // TODO: IMPLEMENT RESPECTIVE CONTROLLER FUNCTION
    const productId = Number(req.params.id);
    const { name, price, description } = req.body;
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) {
      return throwError("Product not found", 404);
    }
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name: name || product.name,
        description: description || product.description,
        price: price || product.price,
      },
    });

    return res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
