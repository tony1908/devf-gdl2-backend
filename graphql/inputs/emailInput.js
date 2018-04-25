const {
    GraphQLString,
    GraphQLInputObjectType,
    
} = require('graphql')

module.exports = new GraphQLInputObjectType({
    name: 'emailInput',
    fields: () => {
        return {
            email: { type: GraphQLString },
        }
    }
})

