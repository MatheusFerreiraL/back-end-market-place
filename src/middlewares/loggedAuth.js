const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const checkEmail = require('../utils/checkEmail');

const prisma = new PrismaClient();

const loggedAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: 'User unauthorized! ' });

  const token = authorization.substring(7);

  try {
    const { id } = jwt.verify(token, process.env.JWT_PWD);

    const findStore = await prisma.stores.findUnique({
      where: {
        id,
      },
    });

    if ((await checkEmail(findStore.email)) === null)
      return res.status(401).json({ message: 'User unauthorized! ' });

    const { password: _, ...storeData } = findStore;

    req.store = storeData;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Oops, your session has expired!',
    });
  }
};

module.exports = loggedAuth;
