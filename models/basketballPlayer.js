const mongoose = require('mongoose');

// Create a schema
const basketballPlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    team: {
        type: String,
        required: true
    },
    meta: {
        age: Number,
        goodOrBad: String
    }
}, {
    timestamps: true
});

basketballPlayerSchema.methods.sayHello = function() {
    return `Hello! My name is ${this.name}!`
}

const basketballPlayer = mongoose.model('basketballPlayer', basketballPlayerSchema)

module.exports = basketballPlayer;