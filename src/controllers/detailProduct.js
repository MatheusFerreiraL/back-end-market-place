const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const detailProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const detailedProduct = await prisma.products.findFirst({
      where: {
        id: parseInt(productId, 10),
      },
      include: {
        store: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return res.status(200).json(detailedProduct);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = detailProduct;
