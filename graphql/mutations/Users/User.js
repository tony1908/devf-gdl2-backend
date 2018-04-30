const User = require("../../types/User")
const userInput = require("../../inputs/userInput")
const { Users  } = require("../../../database/models")

module.exports = {
    type: User,
    args: {
        user: {
            type: userInput
        }
    },
    resolve(root, args){
        const saveUser = async (args) => {

            const user = new Users({ ...args.user })
            const result = await user.save()

            return result            
        }

        return saveUser(args)
    }
}