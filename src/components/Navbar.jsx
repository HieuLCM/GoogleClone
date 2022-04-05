import React from 'react'
import {Link} from 'react-router-dom'

import Search from './Search'

const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to='/'>
                <div className='flex flex-wrap justify-between items-center text-2xl bg-blue-400 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
                    <p className='pr-2'>GoogleC</p>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="30px" height="30px"><path d="M 32.521484 6 C 18.158484 6 6.515625 17.642 6.515625 32 C 6.515625 46.358 18.158484 58 32.521484 58 C 54.209484 58 59.098453 37.865969 57.064453 27.667969 L 51.181641 27.667969 L 49.269531 27.667969 L 32.515625 27.667969 L 32.515625 36.333984 L 49.279297 36.333984 C 47.351759 43.804816 40.588119 49.332031 32.515625 49.332031 C 22.943625 49.332031 15.181641 41.572 15.181641 32 C 15.181641 22.428 22.943625 14.667969 32.515625 14.667969 C 36.868625 14.667969 40.834906 16.283594 43.878906 18.933594 L 50.033203 12.779297 C 45.410203 8.5672969 39.266484 6 32.521484 6 z"/></svg>                </div>
            </Link>
            <button type='button' onClick={() => {
                setDarkTheme(darkTheme === 'dark' ? 'light' : 'dark'); 
                localStorage.setItem('theme', darkTheme === 'dark' ? 'light' : 'dark')
            }} className='bg-white text-xl dark:bg-gray-50 dark:text-gray-900 rounded-full px-2 py-1 hover:shadow-lg'
            >
                {darkTheme? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>}
            </button>
        </div>
        <Search />
    </div>
  )
}

export default Navbar