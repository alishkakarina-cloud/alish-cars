import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV } from '../data'
import { Arrow } from './ui'

export default function Header() {
  const [menu, setMenu] = useState(false)

  return (
    <header className="header">
      <Link to="/" className="logo">
        ALISH CARS
      </Link>
      <nav className={'nav' + (menu ? ' is-open' : '')} onClick={() => setMenu(false)}>
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {n.title}
          </NavLink>
        ))}
      </nav>
      <Link to="/services#calc" className="btn btn--white header__btn">
        Получить расчёт <Arrow size={9} />
      </Link>
      <button className={'burger' + (menu ? ' is-open' : '')} aria-label="Меню" onClick={() => setMenu(!menu)}>
        <span />
        <span />
      </button>
    </header>
  )
}
