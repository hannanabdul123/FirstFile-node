const express = require('express');
const app = express();
app.use(express.json());


let items = [];


app.get('/items', (req, res) => {
  res.json(items);
});


app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json({ message: 'Item added successfully', newItem });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
