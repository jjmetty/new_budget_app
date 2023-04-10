const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    expense: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: Number
    }, 
    date: {
        required: true,
        type: Date,
        default: Date.now()
    }
})

// module.exports= {
//     expenseSchema: expenseSchema
// }

module.exports = mongoose.model('expenses', expenseSchema);