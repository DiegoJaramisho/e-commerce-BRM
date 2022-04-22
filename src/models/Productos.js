import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config.js'
import { Compras_productos } from './Compras_productos.js';
export const Productos = sequelize.define('productos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING },
    precio: { type: DataTypes.INTEGER },
    fecha_ingreso: { type: DataTypes.DATE },
},
)

Productos.hasMany(Compras_productos,{
    foreignKey:'productosId',
    sourceKey: 'id'
});
Compras_productos.belongsTo(Productos,{
    foreignKey:'productosId',
    targetId:'id'
});



