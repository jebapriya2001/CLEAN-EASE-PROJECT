const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment'); // Make sure this model exists

// Route to create a new appointment
router.post('/create', async (req, res) => {
  try {
    const { date, time, serviceType } = req.body;
    const newAppointment = new Appointment({ date, time, serviceType });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Other appointment routes (if any) go here

module.exports = router;
