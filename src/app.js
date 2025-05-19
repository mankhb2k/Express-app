import express from 'express'
import morgan from 'morgan'
import sequelize from './config/db.js'
import { notFound, errorHandler } from './middlewares/errorCommon.js'
import Car from './modules/car/car.model.js'
import carRoutes from './modules/car/car.router.js'


const app = express()
app.use(express.json())
app.use(morgan('dev'))

// Gắn route cho car
app.use('/cars', carRoutes)

app.use(notFound);      // middleware 404, đặt sau routes
app.use(errorHandler);  // middleware xử lý lỗi, đặt cuối cùng

// Sync models với database
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Tạo bảng nếu chưa có
    console.log('Database & tables synced!');
  } catch (err) {
    console.error('Database sync error:', err);
  }
})();




export default app