const prisma = require("../../../prisma/client");
const bcrypt = require("bcrypt");
const throwError = require("../../utils/throwerror");

const getUsers = async (req, res, next) => {
  try {
    const users = prisma.user.findMany();
    res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const userDetails = req.body;
    userDetails.password = await bcrypt.hash(userDetails.password, 10);
    const user = await prisma.user.create({
      data: userDetails,
    });
    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!user || !passwordMatch) {
      return throwError("Invalid email or password", 401);
    }
    res.status(200).json({
      message: "User logged in successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  register,
  login,
  logout,
};
