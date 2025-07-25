const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');


// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// After DB connection
require('./cron/updateEventStatus');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/beaches', require('./routes/beachRoutes'));
app.use('/api/volunteers', require('./routes/volunteerRoutes'));
app.use('/api/impact', require('./routes/impactRoutes'));
app.use('/api/waste', require('./routes/wasteRoutes'));
app.use('/api/admindashboard', require('./routes/adminDashboardRoutes'));
app.use('/api/globaldashboard', require('./routes/globalDashboardRoutes'));
app.use('/api/volunteerdashboard', require('./routes/volunteerDashboardRoutes'));
app.use('/api/upload', require('./routes/uploads'));
app.use('/api/chatbot', require('./routes/chatbotRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));
app.use('/api/gamification', require('./routes/gameRoutes'));
app.use('/api/volunteer-auth', require('./routes/volunteerAuthRoutes'));
app.use('/api/games', require('./routes/gamesRoutes')); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});