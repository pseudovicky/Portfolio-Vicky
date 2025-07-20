import express from 'express';
import { body } from 'express-validator';
import {
  getPortfolioItems,
  getPortfolioItem,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
} from '../controllers/portfolioController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Portfolio validation rules
const portfolioValidation = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('technologies').isArray({ min: 1 }).withMessage('At least one technology is required'),
  body('category').isIn(['web', 'mobile', 'desktop', 'other']).withMessage('Invalid category')
];

// Routes
router.route('/')
  .get(getPortfolioItems)
  .post(protect, portfolioValidation, createPortfolioItem);

router.route('/:id')
  .get(getPortfolioItem)
  .put(protect, updatePortfolioItem)
  .delete(protect, deletePortfolioItem);

export default router;
