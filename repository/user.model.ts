import { DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://user:pass@localhost:5432/postgres');

const UserModel = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    }
}, {
});

UserModel.sync();

export default UserModel;