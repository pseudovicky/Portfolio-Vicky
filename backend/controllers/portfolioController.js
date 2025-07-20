import { validationResult } from 'express-validator';
import Portfolio from '../models/Portfolio.js';

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
const getPortfolioItems = async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    if (featured) {
      query.featured = featured === 'true';
    }

    const portfolioItems = await Portfolio.find(query)
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.json(portfolioItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single portfolio item
// @route   GET /api/portfolio/:id
// @access  Public
const getPortfolioItem = async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findById(req.params.id)
      .populate('user', 'name email');

    if (portfolioItem) {
      res.json(portfolioItem);
    } else {
      res.status(404).json({ message: 'Portfolio item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create portfolio item
// @route   POST /api/portfolio
// @access  Private
const createPortfolioItem = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      description,
      technologies,
      githubUrl,
      liveUrl,
      image,
      category,
      featured
    } = req.body;

    const portfolioItem = new Portfolio({
      title,
      description,
      technologies,
      githubUrl,
      liveUrl,
      image,
      category,
      featured,
      user: req.user._id
    });

    const createdPortfolioItem = await portfolioItem.save();
    await createdPortfolioItem.populate('user', 'name email');

    res.status(201).json(createdPortfolioItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update portfolio item
// @route   PUT /api/portfolio/:id
// @access  Private
const updatePortfolioItem = async (req, res) => {
  try {
    const {
      title,
      description,
      technologies,
      githubUrl,
      liveUrl,
      image,
      category,
      featured
    } = req.body;

    const portfolioItem = await Portfolio.findById(req.params.id);

    if (portfolioItem) {
      // Check if user owns this portfolio item or is admin
      if (portfolioItem.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        return res.status(401).json({ message: 'Not authorized' });
      }

      portfolioItem.title = title || portfolioItem.title;
      portfolioItem.description = description || portfolioItem.description;
      portfolioItem.technologies = technologies || portfolioItem.technologies;
      portfolioItem.githubUrl = githubUrl || portfolioItem.githubUrl;
      portfolioItem.liveUrl = liveUrl || portfolioItem.liveUrl;
      portfolioItem.image = image || portfolioItem.image;
      portfolioItem.category = category || portfolioItem.category;
      portfolioItem.featured = featured !== undefined ? featured : portfolioItem.featured;

      const updatedPortfolioItem = await portfolioItem.save();
      await updatedPortfolioItem.populate('user', 'name email');

      res.json(updatedPortfolioItem);
    } else {
      res.status(404).json({ message: 'Portfolio item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete portfolio item
// @route   DELETE /api/portfolio/:id
// @access  Private
const deletePortfolioItem = async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findById(req.params.id);

    if (portfolioItem) {
      // Check if user owns this portfolio item or is admin
      if (portfolioItem.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        return res.status(401).json({ message: 'Not authorized' });
      }

      await Portfolio.findByIdAndDelete(req.params.id);
      res.json({ message: 'Portfolio item removed' });
    } else {
      res.status(404).json({ message: 'Portfolio item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getPortfolioItems,
  getPortfolioItem,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
};
