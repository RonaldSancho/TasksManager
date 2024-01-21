import jwt from "jsonwebtoken";
import { tokenSecret } from "../config.js";

export const authRequired = (req, res, next) => {
    const {token} = req.cookies;
    
    if (!token)
        return res.status(401).json({ message: "No token"});

        jwt.verify(token, tokenSecret, (err, decode) => {
            if (err) 
            return res.status(403).json({ message: "Invalid token"});

            req.decode = decode;

            next();
        })
}