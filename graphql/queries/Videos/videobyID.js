const {
    GraphQLString
} = require("graphql")

const Video = require("../../types/Video")
const { Videos } = require("../../../database/models")

module.exports = {
    type: Video,
    args: {
        id: { type: GraphQLString }
    },
    resolve(root,args){
        const getVideo = async () => { 
            return await Videos.findById(args.id);
        }
        const queryVideo = async () => {
            const result = await getVideo();                      
            return result;
        }
        return queryVideo()
    }
}

