const express = require('express');
const router = express.Router();
const Checklist = require('../models/Checklist');

// Create a new checklist item
router.post('/', async (req, res) => {
  const checklistItem = new Checklist(req.body);
  try {
    const savedItem = await checklistItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all checklist items
router.get('/', async (req, res) => {
  try {
    const checklistItems = await Checklist.find();
    res.json(checklistItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a checklist item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Checklist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a checklist item
router.delete('/:id', async (req, res) => {
  try {
    await Checklist.findByIdAndDelete(req.params.id);
    res.json({ message: "Checklist item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
