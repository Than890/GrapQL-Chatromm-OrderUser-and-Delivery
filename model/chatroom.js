const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* defining users Schema */
const userDetails = new Schema({
    userid:{
        type: String
    },
    deliveryid:{
        type: String
    },
    orderid:{
        type: String
    },
    message :{
        type: String
    }
});

module.exports = mongoose.model('chat-room', userDetails);