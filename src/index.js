import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import App from './App'
import {ResultContextProvider} from './contexts/ResultContextProvider'

createRoot(document.getElementById('root')).render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>
    )