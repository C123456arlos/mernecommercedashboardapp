import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'
import { AppProvider } from './context/AppContext.jsx'

import Home from './pages/Home.jsx'
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// if (!PUBLISHABLE_KEY) {
//   throw new Error('missing publishable key')
// }


createRoot(document.getElementById('root')).render(
  // <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <ClerkProvider>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </ClerkProvider>

)
