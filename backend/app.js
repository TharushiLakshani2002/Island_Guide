const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const api = process.env.API_URL || '/api';
const port = process.env.PORT || 3001;

const usersRoutes = require('./routes/users');
const placesRoutes = require('./routes/places');

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

// Routes
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/places`, placesRoutes);

// MongoDB connection
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'tour_guide',
})
.then(() => {
    console.log('Database connection is ready...');
})
.catch((err) => {
    console.error('Database connection error:', err);
});

// Start the server
app.get('/', (req, res) => {
  res.send('Welcome to the API. Use /api/users or /api/places endpoints.');
});

app.listen(port, () => {
    console.log(`API is running on ${api}`);
    console.log(`Server is running at http://localhost:${port}`);
});
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
