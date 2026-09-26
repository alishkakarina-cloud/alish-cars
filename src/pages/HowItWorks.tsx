import { CtaSection, PageHero, WhySection } from '../components/sections'
import { STEPS } from '../data'
import { usePageTitle } from './usePageTitle'

export default function HowItWorks() {
  usePageTitle('Как это работает')

  return (
    <>
      <PageHero
        image="/img/hero.jpg"
        position="80% center"
        eyebrow="Как это работает"
        title={
          <>
            6 ПРОСТЫХ
            <br />
            ШАГОВ
          </>
        }
        text={
          <>
            Вы выбираете автомобиль.{' '}
            <br />
            Остальное делаем мы.
          </>
        }
      />

      <section className="flow">
        <div className="sec-head">
          <p className="eyebrow sm">От заявки до ключей</p>
          <h2 className="sec-title">
            КАК МЫ РАБОТАЕМ <i className="line-arrow" />
          </h2>
        </div>
        <ol className="flow__list">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="flow__item">
              <span className="flow__num">0{i + 1}</span>
              <span className="flow__icon">
                <Icon size={20} strokeWidth={1.3} />
              </span>
              <b className="flow__title">{title}</b>
              <p className="flow__text">
                {text[0]} {text[1]}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <WhySection button={false} />
      <CtaSection />
    </>
  )
}
