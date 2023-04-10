const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    expense: {
        required: true,
        type: String
    },
    amount:{
        required: true,
        type: Number
    },
    type:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("expenses", expenseSchema);