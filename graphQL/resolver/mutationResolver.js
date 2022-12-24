const userModels = require('../../model/chatroom');
const { pubsub } = require('../helper');

module.exports = {
    RootMutation: {
        createChatRoom: async(parent, args, ctx, info) => {
            try {
                const createUserDetails = await userModels.create(args.newUser);
                delete(createUserDetails.__v);
                pubsub.publish('userTopic', {
                    chatroom: createUserDetails
                });

                if(createUserDetails) {
                    return createUserDetails;
                } else {
                    return null;
                }
                
            } catch (error) {
                return error;
            }
        },
        deleteChatRoom: async(parent, args, ctx, info) => {
            let responseMSG = {};
            try {
                let query = { 'orderid': args.orderid };
                const createUserDetails = await userModels.deleteMany(query);
                if (createUserDetails == null) {
                    responseMSG.response = "No User found for this opertaion";
                    return responseMSG;
                } else {
                    responseMSG.response = "Success";
                    return responseMSG;
                }

            } catch (error) {
                responseMSG.response = "Fail";
                return responseMSG;
            }
        }
    }
}