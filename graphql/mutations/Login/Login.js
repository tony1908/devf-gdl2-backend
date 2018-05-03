const User = require("../../types/User")
const userLogin = require("../../inputs/userLogin")
const { Users  } = require("../../../database/models")
const bcrypt = require("bcrypt")

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
 
            if (bcrypt.compareSync(args.login.password, user.password)){
                return user;
            } else {
                return new Error("Invalid password")
            }
        }
        return loginUser(args)
    }
}
