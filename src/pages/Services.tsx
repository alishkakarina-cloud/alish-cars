import { CalcSection, CtaSection, PageHero, ProcessSection } from '../components/sections'
import { SERVICES } from '../data'
import { usePageTitle } from './usePageTitle'

export default function Services() {
  usePageTitle('Услуги')

  return (
    <>
      <PageHero
        image="/img/zeekr.jpg"
        position="center 60%"
        eyebrow="Услуги"
        title={
          <>
            УСЛУГИ
            <br />
            ПОД КЛЮЧ
          </>
        }
        text={
          <>
            Поиск, проверка, выкуп, логистика, растаможка{' '}
            <br />и доставка — полный цикл без лишних забот для вас.
          </>
        }
      />

      <ProcessSection button={false} />

      <section className="srv">
        <div className="sec-head">
          <p className="eyebrow sm">Что входит</p>
          <h2 className="sec-title">
            ПОЛНЫЙ ЦИКЛ <i className="line-arrow" />
          </h2>
        </div>
        <ul className="srv__grid">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="srv__item">
              <span className="flow__icon">
                <Icon size={18} strokeWidth={1.3} />
              </span>
              <b className="srv__title">{title}</b>
              <p className="srv__text">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <CalcSection />
      <CtaSection calcHref="/services#calc" />
    </>
  )
}
