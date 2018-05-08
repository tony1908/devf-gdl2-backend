const {
    GraphQLString,
    GraphQLInputObjectType,
    
} = require('graphql')

module.exports = new GraphQLInputObjectType({
    name: 'videoIdInput',
    fields: () => {
        return {
            _id: { type: GraphQLString },
            name: { type: GraphQLString  },
            image: { type: GraphQLString  },
            info: { type: GraphQLString  },
        }
    }
})

