const {
    GraphQLString,
    GraphQLInputObjectType,
    
} = require('graphql')

module.exports = new GraphQLInputObjectType({
    name: 'userInput',
    fields: () => {
        return {
            id: { type: GraphQLString },
            username: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString },
        }
    }
})

