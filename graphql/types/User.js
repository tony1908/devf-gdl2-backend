const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
} = require("graphql")

module.exports = new GraphQLObjectType({
    name: "User",
    description: "User lists",
    fields: () => {
        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            username : { type: new GraphQLNonNull(GraphQLString) },
            email : { type: new GraphQLNonNull(GraphQLString) },
            password : { type: new GraphQLNonNull(GraphQLString) },
        }
    }
})