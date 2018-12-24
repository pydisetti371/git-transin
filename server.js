const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Hari' },
    {id: 2, firstName: 'Revanth' },
    {id: 3, firstName: 'Dheeraj'},
    {firstName: 'Srinivas'},
    {firstName: 'Nirosha'},
    {firstName: 'Madhuri'}
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);