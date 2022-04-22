import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config.js'
import { Productos} from './productos.js'
export const Lotes = sequelize.define('lotes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    lote: { type: DataTypes.STRING },
},
)

Lotes.hasMany(Productos,{
    foreignKey:'lotesId',
    sourceKey: 'id'
})
Productos.belongsTo(Lotes,{
    foreignKey:'lotesId',
    targetId:'id'
});




