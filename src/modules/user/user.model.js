import { DataTypes } from "sequelize"
import sequelize from '../../config/db.js'

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING, // Lưu mật khẩu đã băm
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
})

export default User