const { PrismaClient } = require('@prisma/client');
const uploadFile = require('../services/storageAWS');

const prisma = new PrismaClient();

const updateProduct = async (req, res) => {
  const { title, description, price, storage, category } = req.body;
  const { id } = req.store;
  const { file } = req;
  const { productId } = req.params;

  try {
    const archive = await uploadFile(
      `stores/${id}/products/${file.originalname}`,
      file.buffer,
      file.mimetype
    );
    const updatedProduct = await prisma.products.update({
      where: { id: parseInt(productId, 10) },
      data: {
        title,
        description,
        price: parseFloat(price),
        storage: parseInt(storage, 10),
        categoryId: parseInt(category, 10),
        imagePath: archive.path,
        imageUrl: archive.url,
      },
      include: {
        category: { select: { category_name: true } },
        store: { select: { name: true } },
      },
    });
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = updateProduct;
