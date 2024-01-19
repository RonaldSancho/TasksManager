import { tokenSecret } from "../config";

export function createAccessToken(payload){

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            tokenSecret,
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if(err) reject(err)
                resolve(token)
            }
        );
    });

}