import api from './api'

export const googleAuthService = {
  // Initialize Google OAuth
  initGoogleAuth: () => {
    return new Promise((resolve, reject) => {
      // Load Google API script if not already loaded
      if (!window.google) {
        const script = document.createElement('script')
        script.src = 'https://accounts.google.com/gsi/client'
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      } else {
        resolve()
      }
    })
  },

  // Handle Google OAuth login
  handleGoogleLogin: async (credential) => {
    try {
      const response = await api.post('/auth/google', { credential })
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get Google auth URL for popup
  getGoogleAuthUrl: () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
    const redirectUri = `${window.location.origin}/auth/google/callback`
    
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: 'openid email profile',
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent'
    })

    return `https://accounts.google.com/oauth/authorize?${params.toString()}`
  },

  // Handle OAuth callback
  handleOAuthCallback: async (code) => {
    try {
      const response = await api.post('/auth/google/callback', { code })
      return response.data
    } catch (error) {
      throw error
    }
  }
}
