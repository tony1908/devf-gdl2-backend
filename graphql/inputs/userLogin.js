const {
    GraphQLString,
    GraphQLInputObjectType

} = require('graphql')

module.exports = new GraphQLInputObjectType({
    name: 'userLogin',
    fields: () => {
        return {
            email: { type: GraphQLString },
            password: { type: GraphQLString },
        }
    }
})

