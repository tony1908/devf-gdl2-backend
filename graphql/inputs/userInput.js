const {
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLInt,
    
} = require('graphql')

module.exports = new GraphQLInputObjectType({
    name: 'userInput',
    fields: () => {
        return {
            id: { type: GraphQLString },
            username: { GraphQLString },
            email: { GraphQLString },
            password: { GraphQLString },
        }
    }
})

