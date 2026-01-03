import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavbarDemo } from './components/ui/Navbar'
import { TypewriterEffectSmoothDemo } from './components/ui/TypewriterEffect'
import { BackgroundLinesDemo } from './components/ui/BackgroundLines'

function App() {

  return (
    <>
      <NavbarDemo>
        <BackgroundLinesDemo>
          <TypewriterEffectSmoothDemo />
        </BackgroundLinesDemo>
      </NavbarDemo>
    </>
  )
}

export default App
