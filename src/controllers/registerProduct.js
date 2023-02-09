const { PrismaClient } = require('@prisma/client');
const uploadFile = require('../services/storageAWS');

const prisma = new PrismaClient();

const registerProduct = async (req, res) => {
  const { title, description, price, storage, category } = req.body;
  const { id } = req.store;
  const { file } = req;

  try {
    const archive = await uploadFile(
      `stores/${id}/products/${file.originalname}`,
      file.buffer,
      file.mimetype
    );
    const newProduct = await prisma.products.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        storage: parseInt(storage, 10),
        imagePath: archive.path,
        imageUrl: archive.url,
        categoryId: parseInt(category, 10),
      },
      include: {
        category: true,
      },
    });
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = registerProduct;
