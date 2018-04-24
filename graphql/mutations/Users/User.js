const User = require("../../types/User")
const userInput = require("../../inputs/userInput")
const { UsersDB  } = require("../../../database/models")

module.exports = {
    type: User,
    args: {
        user: {
            type: userInput
        }
    },
    resolve(root, args){
        const saveUser = async (args) => {
            const user = new UsersDB({ ...args.user })
            const result = await user.save()
            console.log(result)
            return result            
        }

        return saveUser(args)
    }
}