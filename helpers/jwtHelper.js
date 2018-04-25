var jwt = require('jsonwebtoken'); // Import jsonwebtoken
require('dotenv').config({path: "../.env"}) // Load dotenv library with the .env file on the root folder of the project

function tokenEncode(username) {
    // decode with jasonwebtoken
    const token = jwt.sign({user: username}, process.env.SECRET_KEY, 
        { expiresIn: '1h' }, { algorithm: 'RS256' }); //process.env.SECRET_KEY have the value of SECRET_KEY on the .env file, the token expires in 1 hour and is using RS256 for encryption
    return({token: token}) //return the token as object
}

function tokenDecode(token) {
    // decode with jasonwebtoken
    const decoded = jwt.decode(token);
    return({decoded: decoded}) // return decoded content as object
}

// USE THIS LINES IN CASE YOU NEED TO SEE WHAT IS PASSING TO ENCODE AND DECODE
// console.log(process.env.SECRET_KEY);
// console.log("Now lets encode: ----------------------------");
// encoded = tokenEncode("claudio");
// console.log("Full Response: ", encoded);
// console.log("Token: ", encoded.token);
// console.log("Now lets decode: ----------------------------");
// decoded = tokenDecode(encoded.token);
// console.log("tokenDecoded: ", decoded);
// console.log("User:", decoded.decoded.user);
// console.log("IAT: ", decoded.decoded.iat);
