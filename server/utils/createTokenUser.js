const createTokenUser = (user) => {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    userId: user._id,
    role: user.role,
    email: user.email,
    createdAt: user.createdAt,
    phone: user.phone,
  };
};

module.exports = createTokenUser;
