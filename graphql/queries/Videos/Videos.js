const {
    GraphQLList
} = require("graphql")

const Video = require("../../types/Video")
const { Videos } = require("../../../database/models")
const videoInput = require("../../inputs/videoInput")

module.exports = {
    type: new GraphQLList(Video),
    args: {
        video : { type: videoInput }
    },
    resolve(root,args){
        const getVideos = async () => { 
            let filters = {};
            let keys = Object.keys(args.video);
            if (keys.length>0){
                keys.forEach((key) => {      
                    if (key === '_id') {
                        filters._id = args.video._id;
                    }else{
                        filters[key] = new RegExp(`${args.video[key]}`,'i');
                    }
                })
            }      
            return await Videos.find(filters);
        }

        const queryVideos = async () => {
            const result = await getVideos();                      
            return result;
        }

        return queryVideos()
    }
}

