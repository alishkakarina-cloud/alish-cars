import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Десктоп свёрстан в пикселях макета (ширина 1024) и масштабируется под экран,
// чтобы пропорции совпадали с макетом 1 в 1. Узкие экраны получают мобильную вёрстку.
const DESKTOP_MIN = 1100
const MAX_WIDTH = 1920
function fit() {
  const w = document.documentElement.clientWidth
  const z = w >= DESKTOP_MIN ? Math.min(w, MAX_WIDTH) / 1024 : 1
  document.documentElement.style.setProperty('--z', String(z))
  document.documentElement.classList.toggle('is-desktop', w >= DESKTOP_MIN)
}
fit()
window.addEventListener('resize', fit)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
