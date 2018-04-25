var util = require('util');
// import { isUndefined, isNullOrUndefined } from 'util';
var jwt = require('jsonwebtoken'); // Import jsonwebtoken
require('dotenv').config({path: "../.env"}) // Load dotenv library with the .env file on the root folder of the project

function tokenEncode(username) {
    // decode with jasonwebtoken
    if (!util.isNullOrUndefined(username) && username !== "") {
        try{
            const token = jwt.sign({user: username}, process.env.SECRET_KEY, 
                { expiresIn: '1h' }, { algorithm: 'RS256' }); //process.env.SECRET_KEY have the value of SECRET_KEY on the .env file, the token expires in 1 hour and is using RS256 for encryption
            return(
                {   message: "OK", 
                    token: token}
            ) //return the token as object
        }
        catch(err) {
            // error, return full error response
            return({message: "ERROR",
                    err});
            }
    }
    else {
        return(
            {   message: "ERROR", 
            token: null}
        )
    }
}

function tokenDecode(token) {
    // decode with jasonwebtoken
    if (!util.isNullOrUndefined(token) && token !== "") {
        try{
            const decoded = jwt.decode(token);
            if (decoded !== null && decoded !== undefined && decoded !== "") {
                return(
                    {   message: "OK",
                        decoded: decoded}
                ) // return decoded content as object
            }
            else {
                return({message: "ERROR",
                    err})
            }
        }
        catch(err) {
            return({message: "ERROR",
                    err})
        }
    }
    else {
        return(
            {   message: "ERROR", 
            token: null}
        )
    }
}

function tokenVerify(token){
    if (!util.isNullOrUndefined(token) && token !== "") {
        try {
            const verified = jwt.verify(token, process.env.SECRET_KEY);
                return (verified)
            } 
        catch(err) {
            // error, return full error response
            return({message: "ERROR",
                    err});
            }
        }
    else {
        return(
            {   message: "ERROR", 
            token: null}
        )
    }

}

// USE THIS LINES IN CASE YOU NEED TO SEE WHAT IS PASSING TO ENCODE AND DECODE comment
// console.log(process.env.SECRET_KEY);
// console.log("Now lets encode: ----------------------------");
// encoded = tokenEncode("claudio");
// console.log("Full Response: ", encoded);
// console.log("Token: ", encoded.token);
// console.log("Now lets decode: ----------------------------");
// decoded = tokenDecode(encoded.token);
// console.log("tokenDecoded: ", decoded);
// if (decoded.decoded !== null && decoded.decoded !== undefined){ 
//     console.log("User:", decoded.decoded.user);
//     console.log("IAT: ", decoded.decoded.iat);
// }
// console.log("Now lets verify: ----------------------------");
// verified = tokenVerify(encoded.token);
// console.log("verified: ", verified)
// if (verified.user !== null && verified.user !== undefined){
//     console.log("User Verified: ", verified.user);
//     console.log("User iat: ", verified.iat);
//     console.log("User exp: ", verified.exp);
// }

