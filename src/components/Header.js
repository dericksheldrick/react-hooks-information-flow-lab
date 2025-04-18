import React from 'react'

function Header({isDarkMode, onDarkModeClick}) {
  return (
    <div>
        <header>
            <h2>Shopster</h2>
            {/* callback function  */}
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark Mode" : "Light Mode"}
            </button>
        </header>
    </div>
  )
}

export default Header