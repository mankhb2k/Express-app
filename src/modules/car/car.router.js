import express from 'express'
import * as carController from './car.controller.js'

const router = express.Router()

router.get('/', carController.getAllCars)
router.get('/:id', carController.getCarById)
router.post('/', carController.createCar)
router.put('/:id', carController.updateCar)
router.patch('/:id', carController.patchCar)
router.delete('/:id', carController.deleteCar)

export default router