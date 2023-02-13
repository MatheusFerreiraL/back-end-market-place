const verifyRequestBody = schema => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = verifyRequestBody;
