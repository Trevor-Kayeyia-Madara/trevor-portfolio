import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="scroll-smooth">
    <App />
    <Toaster position="bottom-right" />
    </div>
  </StrictMode>,
)
