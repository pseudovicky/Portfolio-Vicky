import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true
  },
  technologies: [{
    type: String,
    required: true
  }],
  githubUrl: {
    type: String,
    trim: true
  },
  liveUrl: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'desktop', 'ml', 'data-science', 'research', 'other'],
    default: 'web'
  },
  featured: {
    type: Boolean,
    default: false
  },
  projectDate: {
    type: String,
    trim: true
  },
  metrics: {
    type: Map,
    of: String
  },
  reportUrl: {
    type: String,
    trim: true
  },
  highlights: [{
    type: String
  }],
  type: {
    type: String,
    enum: ['project', 'research'],
    default: 'project'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
