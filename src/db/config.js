import Sequelize  from "sequelize";

export const sequelize = new Sequelize('brm','postgres','Dus34b7jk9++kmo',{
    host: '190.145.104.35',
    dialect: 'postgres',
    port: '5431'
});