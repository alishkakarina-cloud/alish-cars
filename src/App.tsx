import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowRight,
  CarFront,
  ChevronDown,
  Clock3,
  FileText,
  Flag,
  Handshake,
  ReceiptText,
  Search,
  ShieldCheck,
  Truck,
  Wallet,
} from 'lucide-react'

// Номер WhatsApp в международном формате без «+» (пусто — WhatsApp предложит выбрать контакт)
const WHATSAPP = ''
const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

const NAV = [
  ['Главная', '#top'],
  ['Каталог', '#catalog'],
  ['Как это работает', '#steps'],
  ['Услуги', '#services'],
  ['Отзывы', '#why'],
  ['Контакты', '#contacts'],
]

const FEATURES = [
  { icon: CarFront, text: ['Любые марки', 'и модели'] },
  { icon: ReceiptText, text: ['Растаможка', 'и оформление'] },
  { icon: Truck, text: ['Доставка', 'от 2 недель'] },
  { icon: Handshake, text: ['Полное', 'сопровождение'] },
]

const BRANDS = [
  { id: 'liauto', name: 'LI AUTO', models: ['L6', 'L7', 'L8', 'L9'] },
  { id: 'zeekr', name: 'ZEEKR', models: ['001', '007', '009', '7X'] },
  { id: 'xiaomi', name: 'XIAOMI', models: ['SU7', 'YU7'] },
  { id: 'avatr', name: 'AVATR', models: ['11', '12', '07'] },
  { id: 'leapmotor', name: 'LEAPMOTOR', models: ['C10', 'C11', 'C16'] },
  { id: 'denza', name: 'DENZA', models: ['N7', 'N9', 'Z9'] },
]

const STEPS = [
  { icon: FileText, title: 'Заявка', text: ['Рассказываете, какой', 'автомобиль хотите'] },
  { icon: Search, title: 'Подбор', text: ['Находим подходящие', 'варианты в Китае'] },
  { icon: ShieldCheck, title: 'Проверка', text: ['Проверяем автомобиль', 'перед покупкой'] },
  { icon: Wallet, title: 'Покупка', text: ['Оформляем сделку', 'и забираем автомобиль'] },
  { icon: Truck, title: 'Логистика', text: ['Организуем доставку', 'в Кыргызстан'] },
  { icon: Flag, title: 'Вы получаете авто', text: ['Растаможенный и готовый', 'к эксплуатации'] },
]

const STATS = [
  { value: '2+', unit: '', text: ['года опыта', 'на рынке'] },
  { value: '14', unit: 'дней', text: ['ориентировочный', 'срок доставки'] },
  { value: '100%', unit: '', text: ['сопровождение', 'на всех этапах'] },
  { value: '∞', unit: 'inf', text: ['выбор', 'автомобилей'] },
]

const YEARS = Array.from({ length: 7 }, (_, i) => String(new Date().getFullYear() - i))
const CITIES = ['Бишкек', 'Ош', 'Джалал-Абад', 'Каракол']

function Arrow({ size = 10 }: { size?: number }) {
  return <ArrowRight size={size} strokeWidth={1.6} className="arr" aria-hidden />
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  )
}

function Select({
  label,
  placeholder,
  options,
  value,
  onChange,
  disabled,
}: {
  label: string
  placeholder?: string
  options: string[]
  value: string
  onChange: (v: string) => void
  disabled?: boolean
}) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <span className={'field__box' + (disabled ? ' is-disabled' : '')}>
        <select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} required={!!placeholder}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown size={9} strokeWidth={1.8} className="field__chev" aria-hidden />
      </span>
    </label>
  )
}

function Calculator() {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [price, setPrice] = useState('')
  const [engine, setEngine] = useState('Бензин / Гибрид / Электро')
  const [city, setCity] = useState('Бишкек')
  const models = BRANDS.find((b) => b.name === brand)?.models.map((m) => `${brand} ${m}`) ?? []

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = [
      'Здравствуйте! Хочу рассчитать стоимость автомобиля:',
      `Марка: ${brand}`,
      `Модель: ${model || '—'}`,
      `Год: ${year}`,
      `Цена в Китае: ${price ? price + ' USD' : '—'}`,
      `Тип двигателя: ${engine}`,
      `Город доставки: ${city}`,
    ].join('\n')
    window.open(waLink(text), '_blank', 'noopener')
  }

  return (
    <form className="calc__panel" onSubmit={submit}>
      <Select
        label="Марка"
        placeholder="Выберите марку"
        options={BRANDS.map((b) => b.name)}
        value={brand}
        onChange={(v) => {
          setBrand(v)
          setModel('')
        }}
      />
      <Select label="Модель" placeholder="Выберите модель" options={models} value={model} onChange={setModel} disabled={!brand} />
      <Select label="Год" placeholder="Выберите год" options={YEARS} value={year} onChange={setYear} />
      <label className="field">
        <span className="field__label">Цена в Китае (USD)</span>
        <span className="field__box">
          <input
            type="number"
            inputMode="numeric"
            min={0}
            placeholder="Например: 30000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </span>
      </label>
      <Select
        label="Тип двигателя"
        options={['Бензин / Гибрид / Электро', 'Бензин', 'Гибрид', 'Электро']}
        value={engine}
        onChange={setEngine}
      />
      <div className="field field--last">
        <Select label="Город доставки" options={CITIES} value={city} onChange={setCity} />
        <button type="submit" className="btn btn--beige calc__btn">
          Рассчитать стоимость <Arrow size={9} />
        </button>
      </div>
    </form>
  )
}

export default function App() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="page" id="top">
      {/* ---------- 1. Шапка + первый экран ---------- */}
      <section className="hero">
        <picture>
          <source media="(max-width: 1099px)" srcSet="/img/hero-m.jpg" />
          <img className="hero__bg" src="/img/hero.jpg" alt="Li Auto на набережной на закате" fetchPriority="high" />
        </picture>
        <header className="header">
          <a href="#top" className="logo">
            ALISH CARS
          </a>
          <nav className={'nav' + (menu ? ' is-open' : '')} onClick={() => setMenu(false)}>
            {NAV.map(([t, h]) => (
              <a key={t} href={h}>
                {t}
              </a>
            ))}
          </nav>
          <a href="#calc" className="btn btn--white header__btn">
            Получить расчёт <Arrow size={9} />
          </a>
          <button className={'burger' + (menu ? ' is-open' : '')} aria-label="Меню" onClick={() => setMenu(!menu)}>
            <span />
            <span />
          </button>
        </header>

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
            <a href="#catalog" className="btn btn--white hero__btn1">
              Подобрать авто <Arrow />
            </a>
            <a href="#contacts" className="btn btn--outline hero__btn2">
              Связаться
            </a>
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

      {/* ---------- 2. Весь процесс ---------- */}
      <section className="process" id="services">
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
          <a href="#steps" className="btn btn--white process__btn">
            Подробнее об услугах <Arrow size={9} />
          </a>
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

      {/* ---------- 3. Каталог ---------- */}
      <section className="catalog" id="catalog">
        <div className="sec-head">
          <p className="eyebrow sm">Популярные бренды</p>
          <h2 className="sec-title">
            КАТАЛОГ АВТОМОБИЛЕЙ <i className="line-arrow" />
          </h2>
          <a href="#calc" className="catalog__all">
            Смотреть все марки <Arrow size={8} />
          </a>
        </div>
        <div className="cards">
          {BRANDS.map((b) => (
            <a key={b.id} href="#calc" className="card">
              <img src={`/img/cat-${b.id}.jpg`} alt={b.name} loading="lazy" />
              <span className="card__name">{b.name}</span>
              <span className="card__models">{b.models.join(' / ')}</span>
              <Arrow size={10} />
            </a>
          ))}
        </div>
      </section>

      {/* ---------- 4. Шаги ---------- */}
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

      {/* ---------- 5. Почему мы ---------- */}
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
          <a href="#steps" className="btn btn--white why__btn">
            Наши преимущества <Arrow size={9} />
          </a>
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

      {/* ---------- 6. Калькулятор ---------- */}
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

      {/* ---------- 7. Финальный призыв ---------- */}
      <section className="cta" id="contacts">
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
            <a href="#calc" className="btn btn--white cta__btn1">
              Получить расчёт <Arrow />
            </a>
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
    </div>
  )
}
