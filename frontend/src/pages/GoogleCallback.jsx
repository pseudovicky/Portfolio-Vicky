import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { googleAuthService } from '../services/googleAuth'
import { toast } from 'react-toastify'

const GoogleCallback = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the authorization code from URL
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')
        const error = urlParams.get('error')

        if (error) {
          toast.error('Google authentication was cancelled')
          navigate('/')
          return
        }

        if (code) {
          // Send code to backend
          const response = await googleAuthService.handleOAuthCallback(code)
          
          // Login the user
          const success = await login(response)
          
          if (success) {
            toast.success('Successfully logged in with Google!')
            navigate('/')
          } else {
            toast.error('Failed to complete login')
            navigate('/login')
          }
        } else {
          toast.error('No authorization code received')
          navigate('/')
        }
      } catch (error) {
        console.error('Callback error:', error)
        toast.error('Failed to complete Google authentication')
        navigate('/login')
      }
    }

    handleCallback()
  }, [navigate, login])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">
          Completing Google Sign-in...
        </h2>
        <p className="text-gray-600">
          Please wait while we complete your authentication.
        </p>
      </div>
    </div>
  )
}

export default GoogleCallback
