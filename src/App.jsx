import './App.css'
import { NavbarDemo } from './components/ui/Navbar'
import { TypewriterEffectSmoothDemo } from './components/ui/TypewriterEffect'
import { BackgroundLinesDemo } from './components/ui/BackgroundLines'
import { SmoothCursorDemo } from './components/ui/SmoothCursor'

import { useEffect } from 'react'
function App() {

  useEffect(() => {
    document.title = "Divy Barot | Portfolio"
    
  }, [])

  return (
    <>
    <SmoothCursorDemo />
      <NavbarDemo>
        <BackgroundLinesDemo>
          <TypewriterEffectSmoothDemo />
        </BackgroundLinesDemo>
      </NavbarDemo>
    </>
  )
}

export default App
