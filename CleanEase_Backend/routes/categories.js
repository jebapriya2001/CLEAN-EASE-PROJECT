// Update GET endpoint for filtering
router.get('/search', async (req, res) => {
    const { timing, budget } = req.query;
    try {
      const query = {
        ...(timing && { availability: timing }),
        ...(budget && { price: { $lte: budget } })
      };
      const categories = await Category.find(query);
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  