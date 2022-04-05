import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Results from './Results'

const Routers = () => {
  return (
    <div className='p-4'>
        <Routes>
            <Route exact path='/' element={<Navigate to='/search'/>} />
            <Route path='/search' element={<Results />}/>
            <Route path='/news' element={<Results />}/>
            <Route path='/image' element={<Results />}/>
            <Route path='/video' element={<Results />}/>
            <Route exact path='*' element={<p>Not Found</p>} />
        </Routes>
    </div>
  )
}

export default Routers