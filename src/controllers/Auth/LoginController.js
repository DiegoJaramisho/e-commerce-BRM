import { Users } from "../../models/Users.js";


const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if(email && password){
            const user = await Users.findOne({ where: {email: email, password: password}});
            if(user == null){
                return res.status(403).json({ status: 403, message: 'Email and Password Incorrect!' });
            }
        }else{
            return res.status(500).json({ status: 500, message: 'Please enter Username and Password!' });
        }

    } catch (e) {
        return res.status(500).json({ status: 500, message: e.message });
    }
}

export default {
    login,
}