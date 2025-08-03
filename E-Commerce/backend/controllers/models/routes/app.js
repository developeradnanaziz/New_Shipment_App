const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const productRoutes = require('./routes/products');
const shipmentRoutes = require('./routes/shipments');
const userRoutes = require('./routes/users');

app.use('/api/products', productRoutes);
app.use('/api/shipments', shipmentRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running')))
  .catch(err => console.log(err));