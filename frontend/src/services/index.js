import api from './api'

export const authService = {
  // Register user
  register: async (userData) => {
    const response = await api.post('/users/register', userData)
    return response.data
  },

  // Login user
  login: async (credentials) => {
    const response = await api.post('/users/login', credentials)
    return response.data
  },

  // Get user profile
  getProfile: async () => {
    const response = await api.get('/users/profile')
    return response.data
  },

  // Update user profile
  updateProfile: async (userData) => {
    const response = await api.put('/users/profile', userData)
    return response.data
  },
}

export const portfolioService = {
  // Get all portfolio items
  getPortfolioItems: async (filters = {}) => {
    const params = new URLSearchParams(filters)
    const response = await api.get(`/portfolio?${params}`)
    return response.data
  },

  // Get single portfolio item
  getPortfolioItem: async (id) => {
    const response = await api.get(`/portfolio/${id}`)
    return response.data
  },

  // Create portfolio item
  createPortfolioItem: async (portfolioData) => {
    const response = await api.post('/portfolio', portfolioData)
    return response.data
  },

  // Update portfolio item
  updatePortfolioItem: async (id, portfolioData) => {
    const response = await api.put(`/portfolio/${id}`, portfolioData)
    return response.data
  },

  // Delete portfolio item
  deletePortfolioItem: async (id) => {
    const response = await api.delete(`/portfolio/${id}`)
    return response.data
  },
}
