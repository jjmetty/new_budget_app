const mongoose = require('mongoose');

const incomeSchema = mongoose.Schema({
    income: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model("incomes", incomeSchema);
