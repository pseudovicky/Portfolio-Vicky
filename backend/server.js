import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB with error handling
connectDB().catch((error) => {
  console.error('Failed to connect to MongoDB:', error.message);
  console.log('Server will continue running without database connection');
});

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio API is running!',
    endpoints: {
      'GET /': 'API status',
      'POST /api/users/register': 'Register user',
      'POST /api/users/login': 'Login user',
      'GET /api/portfolio': 'Get portfolio items'
    }
  });
});

app.use('/api/users', userRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Handle port in use error
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
    console.log('Please try a different port or stop the process using this port');
    process.exit(1);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});
