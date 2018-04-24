const {
    GraphQLList
} = require("graphql")

const User = require("../../types/User")
const { UsersDB } = require("../../../database/models")

module.exports = {
    type : new GraphQLList(User),
    args: {

    },
    resolve(root,args){
        
    }
}

