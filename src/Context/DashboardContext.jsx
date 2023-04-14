import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
const DashboardContext = createContext({})
const DashboardProvidor = ({ children }) => {
  // theme
  const [showTheme, setShowTheme] = useState(false);
  const bg = () => {
    if (theme === 'orange') {
      return { backgroundColor: '#FB9678' }
    }
    else if (theme === 'pink') {
      return { backgroundColor: '#FF5C8E' }
    }
    else if (theme === 'purple') {
      return { backgroundColor: '#7352FF' }
    }
    else if (theme === 'cyan') {
      return { backgroundColor: '#03C9D7' }
    }
    else if (theme === 'blue') {
      return { backgroundColor: '#1A97F5' }
    }
  }
  const dark = () => {
    return '#494949'
  }
  const color = () => {
    if (theme === 'orange') {
      return '#FB9678'
    }
    else if (theme === 'pink') {
      return '#FF5C8E'
    }
    else if (theme === 'purple') {
      return '#7352FF'
    }
    else if (theme === 'cyan') {
      return '#03C9D7'
    }
    else if (theme === 'blue') {
      return '#1A97F5'
    }
  }
  // localStorage
  let localDarkMode =JSON.parse(localStorage.getItem('darkmode')) 
  let localTheme =localStorage.getItem('theme')
  const [darkMode, setDarkMode] = useState(localDarkMode);
  const [theme, setTheme] = useState(localTheme || 'cyan');
  useEffect(() => {
    localStorage.setItem('darkmode', darkMode)
    localStorage.setItem('theme', theme)
  }, [darkMode,theme])
  return (
    <DashboardContext.Provider value={{ showTheme, setShowTheme, setTheme, bg, color, dark, darkMode, setDarkMode }}>
      {children}
    </DashboardContext.Provider>

  )
}

export default DashboardProvidor
export const useDashboard = () => {
  return useContext(DashboardContext)
}