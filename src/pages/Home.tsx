import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { CalcSection, CatalogSection, CtaSection, ProcessSection, StepsSection, WhySection } from '../components/sections'
import { Arrow } from '../components/ui'
import { FEATURES } from '../data'

export default function Home() {
  return (
    <>
      {/* ---------- Первый экран ---------- */}
      <section className="hero">
        <picture>
          <source media="(max-width: 1099px)" srcSet="/img/hero-m.jpg" />
          <img className="hero__bg" src="/img/hero.jpg" alt="Li Auto на набережной на закате" fetchPriority="high" />
        </picture>
        <Header />

        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Автомобили из Китая под ключ</p>
          <h1 className="hero__title">
            <span className="g">CHINESE</span> <span className="w">CARS.</span>
            <br />
            <span className="w">BROUGHT</span> <span className="g">TO YOU.</span>
          </h1>
          <p className="hero__text">
            Любые китайские автомобили под ключ —{' '}
            <br />
            от подбора до постановки на учёт.{' '}
            <br />
            Быстро. Надёжно. Прозрачно.
          </p>
          <div className="hero__btns">
            <Link to="/catalog" className="btn btn--white hero__btn1">
              Подобрать авто <Arrow />
            </Link>
            <Link to="/contacts" className="btn btn--outline hero__btn2">
              Связаться
            </Link>
          </div>
          <ul className="features">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text[0]}>
                <span className="features__icon">
                  <Icon size={14} strokeWidth={1.4} />
                </span>
                <span>
                  {text[0]}{' '}
                  <br />
                  {text[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="hero__tag">
          <span className="hero__tagline" />
          <span>
            PREMIUM{' '}
            <br />
            CHINESE CARS{' '}
            <br />
            GLOBAL REACH
          </span>
        </p>
      </section>

      <ProcessSection />
      <CatalogSection />
      <StepsSection />
      <WhySection />
      <CalcSection />
      <CtaSection calcHref="/#calc" />
    </>
  )
}
