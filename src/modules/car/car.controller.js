import * as carService from './car.service.js'

export const getAllCars = async (req, res) => {
  try {
    const { brand, country } = req.query
    const cars = await carService.getAllCars({ brand, country })
    res.json({ data: cars });
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};

export const getCarById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const car = await carService.getCarById(id)
    if (!car) return res.status(404).json({ error: 'Car not found' })
    res.json({ data: car });
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};

export const createCar = async (req, res) => {
  try {
    // Lấy data đã validate từ middleware (hoặc dùng req.body cũng ok)
    const carData = req.validatedCar || req.body
    const newCar = await carService.createCar(carData)
    res.status(201).json({ data: newCar })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};

export const updateCar = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const carData = req.validatedCar || req.body
    const updatedCar = await carService.updateCar(id, carData)
    if (!updatedCar) return res.status(404).json({ error: "Car not found" })
    res.json({ data: updatedCar })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};

export const patchCar = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updatedCar = await carService.patchCar(id, req.body)
    if (!updatedCar) return res.status(404).json({ error: 'Car not found' })
    res.json({ data: updatedCar })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};

export const deleteCar = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const deleted = await carService.deleteCar(id);
    if (!deleted) return res.status(404).json({ error: 'Car not found' })
    res.json({ data: deleted })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};
