const mongoose = require('mongoose');
const { Payment, Contact } = require('./models');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/254dc', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Payment Endpoint
app.post('/api/payment', (req, res) => {
    const { name, phone, event, amount } = req.body;

    if (!name || !phone || !event || !amount || amount <= 0) {
        return res.status(400).json({ message: 'Invalid data. Please fill all fields correctly.' });
    }

    // Simulate Mpesa payment processing
    console.log(`Processing payment for ${name}: KES ${amount} for event ${event}. Phone: ${phone}`);

    res.status(200).json({ message: 'Payment processed successfully. Thank you!' });
});

// Contact Endpoint
app.post('/api/contact', (req, res) => {
    const { email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ message: 'Please provide an email and a message.' });
    }

    // Simulate sending a contact message
    console.log(`New contact message from ${email}: ${message}`);

    res.status(200).json({ message: 'Thank you for reaching out. We will contact you soon!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
