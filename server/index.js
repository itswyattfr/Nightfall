import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-production-domain.com' 
    : ['http://localhost:5173', 'http://localhost:4173'],
  credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);
console.log('Environment:', process.env.NODE_ENV);
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import apicache from 'apicache';
const cache = apicache.middleware;

// Cache successful responses for 5 minutes
app.use(cache('5 minutes'));

import compression from 'compression';
app.use(compression());
