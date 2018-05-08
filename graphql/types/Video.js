const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
} = require("graphql")

module.exports = new GraphQLObjectType({
    name: "Video",
    description: "Video object",
    fields: () => {
        return {
            _id: { type: new GraphQLNonNull(GraphQLID) },
            name : { type: new GraphQLNonNull(GraphQLString) },
            image : { type: new GraphQLNonNull(GraphQLString) },
            info : { type: new GraphQLNonNull(GraphQLString) },
        }
    }
})