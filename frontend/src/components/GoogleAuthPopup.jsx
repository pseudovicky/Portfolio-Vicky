import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiUser } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../context/AuthContext'
import { googleAuthService } from '../services/googleAuth'
import { toast } from 'react-toastify'

const GoogleAuthPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    // Check if user has already interacted with the popup
    const hasInteractedBefore = localStorage.getItem('googleAuthPopupInteracted')
    
    if (!isAuthenticated && !hasInteractedBefore) {
      // Show popup after 3 seconds delay for new users
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isAuthenticated])

  const handleClose = () => {
    setIsVisible(false)
    setHasInteracted(true)
    localStorage.setItem('googleAuthPopupInteracted', 'true')
  }

  const handleGoogleAuth = async () => {
    try {
      // Get Google OAuth URL
      const authUrl = googleAuthService.getGoogleAuthUrl()
      
      // Open popup window
      const popup = window.open(
        authUrl,
        'google-auth',
        'width=500,height=600,scrollbars=yes,resizable=yes,top=100,left=100'
      )

      if (!popup) {
        toast.error('Please allow popups for this site to continue with Google')
        return
      }

      // Listen for popup to close or receive message
      const checkClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkClosed)
          // Check if authentication was successful
          // This would typically be handled by a callback
          console.log('Google auth popup closed')
        }
      }, 1000)

      // Close the popup notification
      handleClose()
      
      toast.success('Opening Google authentication...')
      
    } catch (error) {
      console.error('Google auth error:', error)
      toast.error('Failed to initialize Google authentication')
    }
  }

  const handleRemindLater = () => {
    setIsVisible(false)
    // Show again after 24 hours
    const tomorrow = new Date()
    tomorrow.setHours(tomorrow.getHours() + 24)
    localStorage.setItem('googleAuthPopupRemindAt', tomorrow.getTime().toString())
  }

  if (isAuthenticated) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: -50 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6 
          }}
          className="fixed top-4 right-4 z-[9999] max-w-sm"
        >
          {/* Green light animation background */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(34, 197, 94, 0.3)',
                '0 0 30px rgba(34, 197, 94, 0.5)',
                '0 0 20px rgba(34, 197, 94, 0.3)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-white rounded-lg shadow-2xl border border-green-100 overflow-hidden relative"
          >
            {/* Animated green glow border */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg"
            />
            
            {/* Content */}
            <div className="relative bg-white rounded-lg p-4">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiX className="h-4 w-4" />
              </button>

              {/* Header with animated green dot */}
              <div className="flex items-center space-x-2 mb-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    backgroundColor: ['#22c55e', '#16a34a', '#22c55e']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                <h3 className="font-semibold text-gray-900 text-sm">
                  Welcome to Portfolio
                </h3>
              </div>

              {/* Main content */}
              <div className="mb-4">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-gray-600 mb-3"
                >
                  <span className="font-medium text-green-600">Join thousands</span> of users and get started instantly!
                </motion.p>

                {/* Google Auth Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleAuth}
                  className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded-lg px-3 py-2 flex items-center justify-center space-x-2 transition-all duration-200 hover:shadow-md group"
                >
                  <FcGoogle className="h-5 w-5" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Continue with Google
                  </span>
                </motion.button>

                {/* Alternative sign in */}
                <div className="mt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleClose()
                      // Navigate to login page
                      window.location.href = '/login'
                    }}
                    className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-center space-x-2 transition-all duration-200"
                  >
                    <FiUser className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      Sign in with Email
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Footer actions */}
              <div className="flex justify-between items-center text-xs text-gray-500">
                <button
                  onClick={handleRemindLater}
                  className="hover:text-gray-700 transition-colors"
                >
                  Remind me later
                </button>
                <button
                  onClick={handleClose}
                  className="hover:text-gray-700 transition-colors"
                >
                  No thanks
                </button>
              </div>

              {/* Animated progress bar */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500"
                onAnimationComplete={handleClose}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GoogleAuthPopup
