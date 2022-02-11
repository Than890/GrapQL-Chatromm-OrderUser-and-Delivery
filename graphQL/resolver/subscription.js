const { pubsub } = require('../helper');
module.exports = {
    Subscription: {
        chatroom: {
            subscribe(parent, args, ctx, info) {
                return pubsub.asyncIterator('userTopic') //Topic
            }
        }
    }
}