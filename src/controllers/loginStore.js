const { PrismaClient } = require('@prisma/client');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkEmail = require('../utils/checkEmail');

const prisma = new PrismaClient();

const loginStore = async (req, res) => {
  const { email, password } = req.body;

  try {
    if ((await checkEmail(res, email)) === null)
      return res
        .status(400)
        .json({ message: 'Invalid credentials. Try again!' });
    const userData = await prisma.stores.findFirst({
      where: {
        email,
      },
    });
    const isPwdCorrect = await bcrypt.compare(password, userData.password);

    if (!isPwdCorrect)
      return res
        .status(400)
        .json({ message: 'Invalid credentials. Try again!' });
    const token = jwt.sign({ id: userData.id }, process.env.JWT_PWD, {
      expiresIn: `${60 * 5}s`,
    });

    const { password: _, ...storeData } = userData;

    return res.status(200).json({ user: storeData, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = loginStore;
