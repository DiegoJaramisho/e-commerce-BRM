import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config.js'
// import {Lotes} from './lotes.js'
export const Compras_productos = sequelize.define('compras_productos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cantidad: { type: DataTypes.INTEGER },
},
)




