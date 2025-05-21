import User from './user.model.js';

export const findUserByUsername = async (username) => {
  return await User.findOne({ where: { username } });
};

export const createUser = async (userData) => {
  return await User.create(userData);
};
