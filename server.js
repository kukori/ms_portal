const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

//Middleware
app.use(express.json({ extended: false}));

//Define routes
app.use('/api/admins', require('./routes/admins'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));