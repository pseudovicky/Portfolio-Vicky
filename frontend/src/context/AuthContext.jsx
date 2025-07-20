import { createContext, useContext, useReducer, useEffect } from 'react'
import { toast } from 'react-toastify'

const AuthContext = createContext()

const initialState = {
  user: null,
  token: null,
  isLoading: true,
  isAuthenticated: false,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        isAuthenticated: true,
      }
    case 'LOGOUT':
      localStorage.removeItem('token')
      return {
        ...state,
        user: null,
        token: null,
        isLoading: false,
        isAuthenticated: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      }
    default:
      return state
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Verify token and get user data
      verifyToken(token)
    } else {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }, [])

  const verifyToken = async (token) => {
    try {
      // This would typically make an API call to verify the token
      // For now, we'll just set loading to false
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (error) {
      console.error('Token verification failed:', error)
      localStorage.removeItem('token')
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const login = async (userData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      
      const { _id, name, email, role, token } = userData
      
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: { _id, name, email, role },
          token,
        },
      })
      
      toast.success('Login successful!')
      return true
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Login failed')
      dispatch({ type: 'SET_LOADING', payload: false })
      return false
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    toast.success('Logged out successfully!')
  }

  const updateUser = (userData) => {
    dispatch({ type: 'UPDATE_USER', payload: userData })
  }

  const value = {
    ...state,
    login,
    logout,
    updateUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
