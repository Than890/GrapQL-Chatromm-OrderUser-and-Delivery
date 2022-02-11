const userModels = require('../../model/chatroom');
const { pubsub } = require('../helper');

module.exports = {
    RootMutation: {
        createChatRoom: async(parent, args, ctx, info) => {
            try {
                console.log('user create===============', args);
                let query = { 'orderid': args.newUser.orderid };
                const createUserDetails = await userModels.create(args.newUser);
                console.log('user create===============', createUserDetails);
                pubsub.publish('userTopic', {
                    user: createUserDetails
                });
                return createUserDetails;
            } catch (error) {
                return error;
            }
        },
        deleteChatRoom: async(parent, args, ctx, info) => {
            let responseMSG = {};
            try {
                let query = { 'orderid': args.orderid };
                const createUserDetails = await userModels.deleteMany(query);
                console.log('createUserDetails--------------------', createUserDetails);
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