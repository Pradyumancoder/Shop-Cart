import React, { useState } from 'react'

export const DarkMode = () => {
  
    const [theme,setTheme]=useState(false)

    const handleMode=()=>{
        setTheme(theme=='light'?'dark':'light')
    }

  return (
    <div>
          <div className={`bg-${theme === 'light' ? 'gray-100' : 'gray-900'} text-${theme === 'light' ? 'black' : 'white'}`}>
        <button onClick={handleMode}>Toggle Theme</button>
    </div>
    </div>
  )
}
