const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const listAllProducts = async (req, res) => {
  const { pageLimit, pageNumber } = req.query;

  try {
    const products = await prisma.products.findMany({
      take: parseInt(pageLimit, 10),
      skip: parseInt(pageNumber * pageLimit, 10),
    });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = listAllProducts;
