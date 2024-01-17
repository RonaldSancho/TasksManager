import User from "../models/user.model.js"

export const register = async (req, res) => {

    const {email, password, userName} = req.body

    try{
        const newUser = new User({
            userName,
            email,
            password
        });
    
        const userSaved = await newUser.save();
        res.json(userSaved)

    } catch (error) {
        console.log(error);
    }
}

export const login = (req, res) => res.send("login")