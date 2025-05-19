const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock data for time slots (10 AM to 5 PM)
let timeSlots = [
    { time: '10:00 AM', booked: false, name: '' },
    { time: '11:00 AM', booked: false, name: '' },
    { time: '12:00 PM', booked: false, name: '' },
    { time: '1:00 PM', booked: false, name: '' },
    { time: '2:00 PM', booked: false, name: '' },
    { time: '3:00 PM', booked: false, name: '' },
    { time: '4:00 PM', booked: false, name: '' },
    { time: '5:00 PM', booked: false, name: '' }
];

// API Endpoints

// 1. Get all slots
app.get('/api/slots', (req, res) => {
    res.json(timeSlots);
});

// 2. Book a slot
app.post('/api/book', (req, res) => {
    const { time, name } = req.body;
    const slot = timeSlots.find(s => s.time === time);

    if (!slot) return res.status(404).json({ error: 'Slot not found' });
    if (slot.booked) return res.status(400).json({ error: 'Slot already booked' });

    slot.booked = true;
    slot.name = name;
    res.json({ message: 'Booked successfully', slot });
});

// 3. Cancel a booking
app.post('/api/cancel', (req, res) => {
    const { time } = req.body;
    const slot = timeSlots.find(s => s.time === time);

    if (!slot) return res.status(404).json({ error: 'Slot not found' });
    if (!slot.booked) return res.status(400).json({ error: 'Slot not booked' });

    slot.booked = false;
    slot.name = '';
    res.json({ message: 'Cancellation successful', slot });
});

// Serve frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});