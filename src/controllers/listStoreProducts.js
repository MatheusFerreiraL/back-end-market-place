const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const listStoreProducts = async (req, res) => {
  const { id } = req.store;

  try {
    const myProducts = await prisma.products.findMany({
      where: {
        storeId: id,
      },
    });

    return res.status(200).json(myProducts);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = listStoreProducts;
