const User = require("../../types/User")
const userLogin = require("../../inputs/userLogin")
const { Users  } = require("../../../database/models")

module.exports = {
    type: User,
    args: {
        login: {
            type: userLogin
        }
    },
    resolve(root, args){
        const loginUser = async (args) => {
            
            const user = await Users.findOne({email: args.login.email})

            if (user.password == args.login.password){
                console.log("Valid password")
                return user;
            }else{
                console.log("Invalid password");
                return new Error("Invalid password")
            }
        }
        return loginUser(args)
    }
}
