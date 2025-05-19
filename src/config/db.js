import { Sequelize } from "sequelize"

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/garage.sqlite', // Có thể thay đổi đường dẫn
    logging: false
})

export default sequelize