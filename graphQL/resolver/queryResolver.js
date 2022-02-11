const userModels = require('../../model/chatroom');

module.exports = {
    RootQuery: {
        chatList: async(parent, args, ctx, info) => {
            console.log(args.orderid);
            try {
                const getUser = await userModels.find({ 'orderid': args.orderid });
                console.log(getUser)
                return getUser;
            } catch (error) {
                return error;
            }
        }
    }
}