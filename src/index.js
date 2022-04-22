import express from 'express';
import { sequelize } from './db/config.js';
import morgan from 'morgan';
import './models/Users.js';
import './models/lotes.js';
import './models/productos.js';
import './models/Compras.js';
import './models/Compras_productos.js';
import UsersController from './controllers/UsersController.js'
import router from './routes/index.js';
import cors from 'cors'
// import usersController from './controllers/Users.js';

const app = express()

app.use(express.json())
app.use(morgan("tiny"))
app.use(cors)


const main = async () => {
    try {
        // await sequelize.sync({force:true});
        app.use('/api', router)
        const port = 3000
        app.listen(port)
        console.log('Connection has been established successfully.');
        // await UsersController.create('123456789', 'administrador','admin@admin.com', 'administrador');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

main();