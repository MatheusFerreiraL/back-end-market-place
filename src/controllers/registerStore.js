// ToDo - Retirar os retornos de 'error.message'
const { PrismaClient } = require('@prisma/client');

const bcrypt = require('bcrypt');
const checkEmail = require('../utils/checkEmail');

const prisma = new PrismaClient();

const registerStore = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (await checkEmail(res, email))
      return res
        .status(400)
        .json({ message: 'User credentials alredy in use!' });

    const encryptedPwd = await bcrypt.hash(password, 10);
    const newStore = await prisma.stores.create({
      data: { name, email, password: encryptedPwd },
    });
    const { password: _, ...newStoreData } = newStore;
    return res.status(201).json(newStoreData);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  registerStore,
};
