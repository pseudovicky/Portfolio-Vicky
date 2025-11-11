import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoogleAuthPopup from './components/GoogleAuthPopup'
import WaveEffect from './components/WaveEffect'

import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import GoogleCallback from './pages/GoogleCallback'
import ProtectedRoute from './components/ProtectedRoute'
import Project from './pages/Project'
import Welcome from './pages/Welcome'
import Journey from './pages/Journey'
import Resume from './pages/Resume'
import Work from './pages/Work'
import Connect from './pages/Connect'

// Resume CV Pages
import DataAnalystCV from './pages/resume/DataAnalystCV'

// Persona Pages
import Persona from './pages/Persona'
import DataAnalyst from './pages/persona/DataAnalyst'
import DataEngineer from './pages/persona/DataEngineer'
import MLEngineer from './pages/persona/MLEngineer'
import AIEngineer from './pages/persona/AIEngineer'
import UIUXDesigner from './pages/persona/UIUXDesigner'
import FrontEndDeveloper from './pages/persona/FrontEndDeveloper'
import FullStackDeveloper from './pages/persona/FullStackDeveloper'
import ResearchAnalyst from './pages/persona/ResearchAnalyst'
import Explorer from './pages/persona/Explorer'
import Others from './pages/persona/Others'

function App() {
  const [showWave, setShowWave] = useState(false)
  const [triggerWave, setTriggerWave] = useState(0)
  const [waveOrigin, setWaveOrigin] = useState(null)

  // Trigger wave effect on initial load - get logo position
  useEffect(() => {
    // Scroll to top on page refresh/load
    window.scrollTo(0, 0)
    
    // Wait for DOM to be ready and get logo position
    const timer = setTimeout(() => {
      const logo = document.querySelector('a[href="/"]')
      if (logo) {
        const rect = logo.getBoundingClientRect()
        setWaveOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
      } else {
        // Fallback to top-left if logo not found
        setWaveOrigin({ x: 80, y: 24 })
      }
      setShowWave(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Function to trigger wave effect (will be passed to Navbar)
  const handleWaveTrigger = (origin) => {
    setTriggerWave(prev => prev + 1)
    setWaveOrigin(origin)
    setShowWave(true)
  }

  const handleWaveComplete = () => {
    setShowWave(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <WaveEffect 
        isActive={showWave} 
        onComplete={handleWaveComplete}
        origin={waveOrigin}
        key={triggerWave}
      />
      <Navbar onLogoClick={handleWaveTrigger} />
      <GoogleAuthPopup />
      <main className="flex-grow pt-11">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/resume/data-analyst/CV" element={<DataAnalystCV />} />
          <Route path="/work" element={<Work />} />
          <Route path="/connect" element={<Connect />} />
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
          <Route path="/welcome" element={<Welcome />} />
          
          {/* Persona Routes */}
          <Route path="/persona" element={<Persona />} />
          <Route path="/persona/data-analyst" element={<DataAnalyst />} />
          <Route path="/persona/data-engineer" element={<DataEngineer />} />
          <Route path="/persona/ml-engineer" element={<MLEngineer />} />
          <Route path="/persona/ai-engineer" element={<AIEngineer />} />
          <Route path="/persona/ui-ux-designer" element={<UIUXDesigner />} />
          <Route path="/persona/front-end-developer" element={<FrontEndDeveloper />} />
          <Route path="/persona/full-stack-developer" element={<FullStackDeveloper />} />
          <Route path="/persona/research-analyst" element={<ResearchAnalyst />} />
          <Route path="/persona/explorer" element={<Explorer />} />
          <Route path="/persona/others" element={<Others />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
