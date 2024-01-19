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

export const login = async (req, res) => {

    const {email, password} = req.body

    try{

        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json({message: "User not founf"})

        const match = await bcrypt.compare(password, userFound.password)
        if(!match) return res.status(400).json({message: "Incorrect password"})
    
        const token = await createAccessToken({ id:userFound._id })
        res.cookie('token', token);
        res.json({
            id: userFound._id,
            userName: userFound.userName,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
}