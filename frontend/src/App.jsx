import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoogleAuthPopup from './components/GoogleAuthPopup'

import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import GoogleCallback from './pages/GoogleCallback'
import ProtectedRoute from './components/ProtectedRoute'
import Project from './pages/Project';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <GoogleAuthPopup />
      <main className="flex-grow pt-11">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/google/callback" element={<GoogleCallback />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/project" element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
