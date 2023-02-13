const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const listAllProducts = async (req, res) => {
  try {
    const products = await prisma.products.findMany();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = listAllProducts;
