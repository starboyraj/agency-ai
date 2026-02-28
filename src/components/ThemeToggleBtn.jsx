import React, { useEffect } from 'react'
import assets from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {

   useEffect(()=> {
    if(theme === 'dark') {
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
   },[theme])
    
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <img
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        alt="Theme toggle"
        className="w-8 h-8 p-1.5 border border-gray-500 rounded-full"
      />
    </button>
  )
}

export default ThemeToggleBtn