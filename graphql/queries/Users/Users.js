const {
    GraphQLList
} = require("graphql")

const User = require("../../types/User")
const { Users } = require("../../../database/models")

module.exports = {
    type : new GraphQLList(User),
    args: {

    },
    resolve(root,args){
        const getUsers = async () => {
            return await Users.find();
        }

        const queryUsers = async () => {
            return await getUsers();
        }

        return queryUsers()
    }
}

