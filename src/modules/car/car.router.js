import express from 'express'
import * as carController from './car.controller.js'
import { validateCar } from './car.validator.js'

const router = express.Router()

// Tạo mới
router.post('/', validateCar, carController.createCar)

// Update toàn bộ
router.put('/:id', validateCar, carController.updateCar)


// Update một phần (PATCH) có thể tự define schema khác nếu muốn
// router.patch('/:id', validatePartialCar, carController.patchCar);

router.get('/', carController.getAllCars)
router.get('/:id', carController.getCarById)

router.patch('/:id', carController.patchCar)
router.delete('/:id', carController.deleteCar)

export default router