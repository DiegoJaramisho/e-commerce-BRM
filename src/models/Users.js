import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config.js';
import { Compras } from './Compras.js';

export const Users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING , unique: true},
    rol: { type: DataTypes.ENUM(['cliente', 'administrador']) },
    identificacion: {type: DataTypes.INTEGER,}
},
)

Users.hasMany(Compras,{
    foreignKey:'usersId',
    sourceKey: 'id'
});
Compras.belongsTo(Users,{
    foreignKey:'usersId',
    targetId:'id'
});








