const mongoose = require('mongoose');

// Payment Schema
const paymentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    event: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

// Contact Schema
const contactSchema = new mongoose.Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);
const Contact = mongoose.model('Contact', contactSchema);

module.exports = { Payment, Contact };
