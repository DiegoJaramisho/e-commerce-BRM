import { Users } from "../models/Users.js";

/* Ver usuarios */
const get = async (req, res) => {
    try {
        const users = await Users.findAll();
        return res.status(200).json({ status: 200, registro: users });
    } catch (e) {
        return res.status(500).json({ status: 500, message: e.message });
    }
}

/* crear usuario */
const create = async (req, res) => {
    try {
        const { identificacion, name, email, password, rol } = req.body
        const user = await Users.findOne({ where: {identificacion: identificacion}});
        if (user != null) {
            return res.status(419).json({ status: 419, message: 'usuario ya registrado' });
        }else{
            console.log(rol)
            const userCreate = await Users.create({
                identificacion,
                name,
                email,
                rol,
                password
            });
            if(userCreate){
                return res.status(200).json({ status: 200, message: 'usuario creado correctamente', registro: userCreate });
            }else{
                return res.status(419).json({ status: 419, message: 'Error' });
            }
        }

    } catch (e) {
        return res.status(500).json({ status: 500, message: e.message });
    }
}

/* actualizar usuario */
const edit = async (data) => {
    try {
        const user = await Users.findByPk(data.id);
        if (user == null) {
            return res.status(404).json({ status: 404, message: 'user not found' });
        } else {
            user.update({
                identificacion: data.identificacion,
                name: data.name,
                email: data.email,
                rol: data.rol
            });
        }
    } catch (e) {
        return res.status(500).json({ status: 500, message: e.message });
    }

}

/* eliminar usuario */
const destroy = async (data) => {
    try {
        const user = await Users.findByPk(data.id);
        if (user == null) {
            return res.status(404).json({ status: 404, message: 'user not found' });
        } else {
            User.delete(data.id);
        }
    } catch (e) {
        return res.status(500).json({ status: 500, message: e.message });
    }
    
}

export default {
    get,
    create,
    edit,
    destroy,
}