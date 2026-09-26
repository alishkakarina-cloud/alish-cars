import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Clock3 } from 'lucide-react'
import { BRANDS, STATS, STEPS, waLink } from '../data'
import Calculator from './Calculator'
import Header from './Header'
import { Arrow, WhatsAppIcon } from './ui'

/* ---------- Весь процесс под ваш ключ ---------- */
export function ProcessSection({ button = true }: { button?: boolean }) {
  return (
    <section className="process" id="process">
      <div className="process__left">
        <h2 className="process__title">
          <span className="process__light">
            ВЕСЬ ПРОЦЕСС — <i className="line-arrow" />
          </span>
          <br />
          ПОД ВАШ КЛЮЧ
        </h2>
        <i className="process__dash" />
        <p className="process__lead">
          Вы выбираете автомобиль.{' '}
          <br />
          Остальное делаем мы.
        </p>
        <p className="process__text">
          Поиск, проверка, выкуп, логистика,{' '}
          <br />
          таможенное оформление, растаможка{' '}
          <br />{' '}и доставка — полный цикл без лишних{' '}
          <br />
          забот для вас.
        </p>
        {button && (
          <Link to="/services" className="btn btn--white process__btn">
            Подробнее об услугах <Arrow size={9} />
          </Link>
        )}
      </div>
      <div className="process__media">
        <img className="process__photo" src="/img/zeekr.jpg" alt="Zeekr 7X в городе" loading="lazy" />
        <div className="process__side">
          <div className="term">
            <span className="term__star">✦</span>
            <Clock3 className="term__icon" size={27} strokeWidth={1.3} />
            <span>
              <span className="term__label">Срок доставки</span>
              <b className="term__value">от 2 недель</b>
            </span>
          </div>
          <img className="process__port" src="/img/port.jpg" alt="Автомобили в порту перед отправкой" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

/* ---------- Каталог (6 карточек) ---------- */
export function CatalogSection() {
  return (
    <section className="catalog" id="catalog">
      <div className="sec-head">
        <p className="eyebrow sm">Популярные бренды</p>
        <h2 className="sec-title">
          КАТАЛОГ АВТОМОБИЛЕЙ <i className="line-arrow" />
        </h2>
        <Link to="/catalog" className="catalog__all">
          Смотреть все марки <Arrow size={8} />
        </Link>
      </div>
      <div className="cards">
        {BRANDS.map((b) => (
          <Link key={b.id} to={`/catalog#${b.id}`} className="card">
            <img src={`/img/cat-${b.id}.jpg`} alt={b.name} loading="lazy" />
            <span className="card__name">{b.name}</span>
            <span className="card__models">{b.models.join(' / ')}</span>
            <Arrow size={10} />
          </Link>
        ))}
      </div>
    </section>
  )
}

/* ---------- 6 простых шагов ---------- */
export function StepsSection() {
  return (
    <section className="steps" id="steps">
      <div className="sec-head">
        <p className="eyebrow sm">Как это работает</p>
        <h2 className="sec-title">
          6 ПРОСТЫХ ШАГОВ <i className="line-arrow" />
        </h2>
      </div>
      <ol className="steps__list">
        {STEPS.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="step">
            <div className="step__top">
              <span className="step__num">0{i + 1}</span>
              <Icon size={22} strokeWidth={1.3} className="step__icon" />
              {i < 5 && <i className="step__line" />}
            </div>
            <b className="step__title">{title}</b>
            <p className="step__text">
              {text[0]}{' '}
              <br />
              {text[1]}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ---------- Почему Alish Cars ---------- */
export function WhySection({ button = true }: { button?: boolean }) {
  return (
    <section className="why" id="why">
      <img className="why__bg" src="/img/why.jpg" alt="" loading="lazy" />
      <div className="why__left">
        <p className="eyebrow sm why__eyebrow">Почему</p>
        <h2 className="why__title">
          <span className="process__light">ПОЧЕМУ</span>
          <br />
          ALISH CARS
        </h2>
        <p className="why__text">
          Нам доверяют, потому что мы ценим{' '}
          <br />
          ваше время, деньги и безопасность{' '}
          <br />
          сделки.
        </p>
        {button && (
          <Link to="/how-it-works" className="btn btn--white why__btn">
            Наши преимущества <Arrow size={9} />
          </Link>
        )}
      </div>
      <ul className="stats">
        {STATS.map((s) => (
          <li key={s.text[0]} className="stat">
            <b className="stat__value">
              {s.unit === 'inf' ? <span className="inf">∞</span> : s.value}
              {s.unit && s.unit !== 'inf' && <small> {s.unit}</small>}
            </b>
            <i className="stat__line" />
            <span className="stat__text">
              {s.text[0]}{' '}
              <br />
              {s.text[1]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ---------- Калькулятор ---------- */
export function CalcSection() {
  return (
    <section className="calc" id="calc">
      <div className="calc__left">
        <p className="eyebrow sm">Калькулятор</p>
        <h2 className="sec-title calc__title">
          СКОЛЬКО БУДЕТ{' '}
          <br />
          СТОИТЬ МОЙ АВТОМОБИЛЬ?
        </h2>
        <p className="calc__text">
          Рассчитайте ориентировочную стоимость доставки{' '}
          <br />{' '}и растаможки вашего автомобиля.
        </p>
      </div>
      <Calculator />
    </section>
  )
}

/* ---------- Финальный призыв ---------- */
export function CtaSection({ calcHref = '/services#calc' }: { calcHref?: string }) {
  return (
    <section className="cta" id="cta">
      <img className="cta__bg" src="/img/cta.jpg" alt="Xiaomi SU7 на трассе на закате" loading="lazy" />
      <div className="cta__content">
        <p className="eyebrow sm cta__eyebrow">ALISH CARS</p>
        <h2 className="cta__title">
          YOUR CAR IS{' '}
          <br />
          ALREADY IN CHINA.
        </h2>
        <p className="cta__text">
          Осталось только привезти её.{' '}
          <br />
          Оставьте заявку и получите индивидуальный расчёт.
        </p>
        <div className="cta__btns">
          <Link to={calcHref} className="btn btn--white cta__btn1">
            Получить расчёт <Arrow />
          </Link>
          <a
            href={waLink('Здравствуйте! Хочу получить расчёт стоимости автомобиля из Китая.')}
            target="_blank"
            rel="noopener"
            className="btn btn--outline cta__btn2"
          >
            <WhatsAppIcon /> Написать в WhatsApp
          </a>
        </div>
      </div>
      <p className="cta__tag">
        CHINESE{' '}
        <br />
        CARS{' '}
        <br />
        GLOBAL{' '}
        <br />
        OPPORTUNITIES
      </p>
      <i className="cta__mark" />
    </section>
  )
}

/* ---------- Шапка внутренних страниц ---------- */
export function PageHero({
  image,
  eyebrow,
  title,
  text,
  position = 'center',
}: {
  image: string
  eyebrow: string
  title: ReactNode
  text?: ReactNode
  position?: string
}) {
  return (
    <section className="phero">
      <img className="phero__bg" src={image} alt="" style={{ objectPosition: position }} fetchPriority="high" />
      <Header />
      <div className="phero__content">
        <p className="phero__crumbs">
          <Link to="/">Главная</Link> <span>/</span> {eyebrow}
        </p>
        <h1 className="phero__title">{title}</h1>
        {text && <p className="phero__text">{text}</p>}
      </div>
    </section>
  )
}
