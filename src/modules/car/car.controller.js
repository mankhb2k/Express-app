import * as carService from './car.service.js';

export const getAllCars = async (req, res) => {
  try {
    const { brand, country } = req.query;
    const cars = await carService.getAllCars({ brand, country });
    res.json({ data: cars });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCarById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const car = await carService.getCarById(id);
    if (!car) return res.status(404).json({ error: 'Car not found' });
    res.json({ data: car });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCar = async (req, res) => {
  try {
    const { brand, year, country, price } = req.body;
    if (!brand || !year || !country || !price)
      return res.status(400).json({ error: 'Missing fields' });
    const newCar = await carService.createCar({ brand, year, country, price });
    res.status(201).json({ data: newCar });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCar = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { brand, year, country, price } = req.body;
    if (!brand || !year || !country || !price)
      return res.status(400).json({ error: 'Missing fields' });
    const updatedCar = await carService.updateCar(id, { brand, year, country, price });
    if (!updatedCar) return res.status(404).json({ error: 'Car not found' });
    res.json({ data: updatedCar });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchCar = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const updatedCar = await carService.patchCar(id, req.body);
    if (!updatedCar) return res.status(404).json({ error: 'Car not found' });
    res.json({ data: updatedCar });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleted = await carService.deleteCar(id);
    if (!deleted) return res.status(404).json({ error: 'Car not found' });
    res.json({ data: deleted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
