const express = require('express');
const { Payment, Contact } = require('../models/models');
const router = express.Router();

// Handle Payments
router.post('/payment', async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).send('Payment saved successfully!');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Handle Contact Form
router.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).send('Message received!');
    } catch (err) {
        res.status(400).send(err.message);
    }
});
module.exports = router;
