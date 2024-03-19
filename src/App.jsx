import { useEffect, useState } from 'react'
import Card from './Components/Card'

import { ThemeProvider } from './Context/ThemeContext'


function App() {

  const [themeMode, setThemeMode] = useState("light")

  const darkMode = ()=>{
    setThemeMode('dark');
  }

  const lightMode = ()=>{
    setThemeMode('light');
  }

  // Theme Actual Change

  useEffect(()=>{
    const htmlElement = document.querySelector('html')
    // Remove Dark and Light from HTML element
    htmlElement.classList.remove("dark" , "light")

    // Add the selected themeMode by the Button
    htmlElement.classList.add(themeMode)
  },[themeMode])

  return (
  <>
  <ThemeProvider value={{themeMode, lightMode, darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  </>
  )
}

export default App
