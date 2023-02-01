const { PrismaClient } = require('@prisma/client');

const bcrypt = require('bcrypt');
const checkEmail = require('../utils/checkEmail');

const prisma = new PrismaClient();

const updateStore = async (req, res) => {
  const { name, email, password } = req.body;
  const { id, email: currentEmail } = req.store;
  const updateStoreData = {};

  try {
    if (email) {
      const emailInUse = await checkEmail(res, email);

      if (currentEmail !== email && emailInUse !== null)
        return res.status(400).json({ message: 'Credential alerdy in use!' });

      updateStoreData.email = email;
    }

    if (password) {
      const encryptedPwd = await bcrypt.hash(password, 10);
      updateStoreData.password = encryptedPwd;
    }

    if (name) updateStoreData.name = name;

    const updatedStore = await prisma.stores.update({
      where: {
        id,
      },
      data: updateStoreData,
      select: { id: true, name: true, email: true },
    });
    return res.json(updatedStore);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

module.exports = updateStore;
