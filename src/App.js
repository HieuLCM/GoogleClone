import React, {useState} from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routers from './components/Routers'

export default function App() {
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme'));

    return (
      <div className={darkTheme === 'dark' ? 'dark' : ''} >
          <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Routers />
            <Footer />
          </div>
      </div>
    )
  }