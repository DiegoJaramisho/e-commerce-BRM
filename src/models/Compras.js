import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config.js'
import { Compras_productos } from './Compras_productos.js';
export const Compras = sequelize.define('compras', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total: { type: DataTypes.INTEGER },
    fecha_compra: { type: DataTypes.DATE },
},
)
Compras.hasMany(Compras_productos,{
    foreignKey:'comprasId',
    sourceKey: 'id'
});
Compras_productos.belongsTo(Compras,{
    foreignKey:'comprasId',
    targetId:'id'
});


