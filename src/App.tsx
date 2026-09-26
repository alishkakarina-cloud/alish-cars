import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { PageHero } from './components/sections'
import { Arrow } from './components/ui'
import Catalog from './pages/Catalog'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Services from './pages/Services'
import { usePageTitle } from './pages/usePageTitle'

// При переходе: к якорю (#calc и т.п.), иначе — в начало страницы
function ScrollManager() {
  const { pathname, hash, search } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, search])
  return null
}

function HomeRoute() {
  usePageTitle()
  return <Home />
}

function NotFound() {
  usePageTitle('Страница не найдена')
  return (
    <>
      <PageHero image="/img/why.jpg" eyebrow="404" title="СТРАНИЦА НЕ НАЙДЕНА" text="Такой страницы нет — вернитесь на главную." />
      <section className="notfound">
        <Link to="/" className="btn btn--white">
          На главную <Arrow size={9} />
        </Link>
      </section>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
