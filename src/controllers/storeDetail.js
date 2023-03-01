const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const storeDetail = async (req, res) => {
  const { id } = req.store;

  try {
    const detailedStore = await prisma.stores.findFirst({
      where: {
        id: parseInt(id, 10),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return res.status(200).json(detailedStore);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = storeDetail;
