import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import { initGA } from '@/utils/analytics'

// Initialize Google Analytics 4
initGA();

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)