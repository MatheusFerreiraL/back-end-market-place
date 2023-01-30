const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkEmail(res, newEmail) {
  try {
    const emailExists = await prisma.stores.findFirst({
      where: {
        email: newEmail,
      },
    });
    return emailExists;
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error. Try again in a few minutes!' });
    return error.message;
  }
}

module.exports = checkEmail;
