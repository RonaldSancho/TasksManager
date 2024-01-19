import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { createAccessToken } from "../libs/jwt.js"

export const register = async (req, res) => {

    const {email, password, userName} = req.body

    try{

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            userName,
            email,
            password: passwordHash,
        });
    
        const userSaved = await newUser.save();
        const Token = await createAccessToken({id:userSaved._id})
        res.cookie('token', Token);
        res.json({
            id: userSaved._id,
            userName: userSaved.userName,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const login = (req, res) => res.send("login")