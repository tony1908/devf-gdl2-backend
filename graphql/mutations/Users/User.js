const User = require("../../types/User")
const userInput = require("../../inputs/userInput")
const { Users  } = require("../../../database/models")
const bcrypt = require("bcrypt")

module.exports = {
    type: User,
    args: {
        user: {
            type: userInput
        }
    },
    resolve(root, args){
        const saveUser = async (args) => {
            const user = new Users({ ...args.user });

            bcrypt.hash(user.password, 10, function(err, hash){
                if (err) {
                    return next(err);
                }
                user.password = hash;

                const result = user.save()
                return result
            })
        }

        return saveUser(args)
    }
}