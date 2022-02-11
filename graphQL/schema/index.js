/* building GraphQL Schema */
module.exports = `
type chatData {
    _id: ID!
    orderid: String!
    userid: String!
    deliveryid: String!
    message: String!
}

input chatInput{
    orderid: String!
    userid: String!
    deliveryid: String!
    message: String!
}

type RootQuery {
    chatList(orderid: String!): [chatData!]!
}

type DeleteRes{
    response:String!
}
type RootMutation {
    createChatRoom(newUser: chatInput): chatData!
    deleteChatRoom(orderid: String!): DeleteRes!
}

type Subscription{
    chatroom: chatData!
}

schema {
    query: RootQuery
    mutation: RootMutation
    subscription: Subscription
}
`;