import Car from './car.model.js';

export const getAllCars = async (filter = {}) => {
  const where = {};
  if (filter.brand) where.brand = filter.brand;
  if (filter.country) where.country = filter.country;
  return await Car.findAll({ where });
};

export const getCarById = async (id) => await Car.findByPk(id);

export const createCar = async (carData) => await Car.create(carData);

export const updateCar = async (id, carData) => {
  const car = await Car.findByPk(id);
  if (!car) return null;
  await car.update(carData);
  return car;
};

export const patchCar = async (id, carData) => {
  const car = await Car.findByPk(id);
  if (!car) return null;
  await car.update(carData);
  return car;
};

export const deleteCar = async (id) => {
  const car = await Car.findByPk(id);
  if (!car) return null;
  await car.destroy();
  return car;
};
