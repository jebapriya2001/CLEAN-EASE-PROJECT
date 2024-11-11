const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    serviceType: String,
    date: Date,
    frequency: String,
    notes: String,
});

module.exports = mongoose.model('Appointment', AppointmentSchema);

