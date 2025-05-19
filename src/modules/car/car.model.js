import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

const Car = sequelize.define('Car', {
  // Sequelize tự thêm id kiểu INTEGER, khóa chính, tự tăng
  brand: {
    type: DataTypes.STRING,
    allowNull: false    // brand bắt buộc phải có giá trị | allowNull xác định cột đó cho phép giá trị null hay không trong cơ sở dữ liệu
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'cars',
  timestamps: false // Không thêm createdAt, updatedAt
});

export default Car;
