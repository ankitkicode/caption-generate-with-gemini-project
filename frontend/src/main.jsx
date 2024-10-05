import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { CaptionProvider } from './context/CaptionContext.jsx'


createRoot(document.getElementById('root')).render(


  <AuthProvider>
    <CaptionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CaptionProvider>
  </AuthProvider>

)
