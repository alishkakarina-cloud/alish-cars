import { Link } from 'react-router-dom'
import { CtaSection, PageHero } from '../components/sections'
import { Arrow, WhatsAppIcon } from '../components/ui'
import { BRANDS, waLink } from '../data'
import { usePageTitle } from './usePageTitle'

export default function Catalog() {
  usePageTitle('Каталог автомобилей')

  return (
    <>
      <PageHero
        image="/img/cta.jpg"
        position="70% center"
        eyebrow="Каталог"
        title={
          <>
            КАТАЛОГ
            <br />
            АВТОМОБИЛЕЙ
          </>
        }
        text={
          <>
            Популярные бренды из Китая под ключ —{' '}
            <br />
            от подбора до постановки на учёт.
          </>
        }
      />

      <section className="brands">
        <div className="sec-head">
          <p className="eyebrow sm">Популярные бренды</p>
          <h2 className="sec-title">
            ВЫБЕРИТЕ МАРКУ <i className="line-arrow" />
          </h2>
        </div>
        <div className="brands__grid">
          {BRANDS.map((b) => (
            <article key={b.id} id={b.id} className="brand">
              <div className="brand__img">
                <img src={`/img/cat-${b.id}.jpg`} alt={b.name} loading="lazy" />
              </div>
              <div className="brand__body">
                <h3 className="brand__name">{b.name}</h3>
                <ul className="brand__models">
                  {b.models.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <div className="brand__btns">
                  <Link to={`/services?brand=${b.id}#calc`} className="btn btn--white">
                    Рассчитать стоимость <Arrow size={9} />
                  </Link>
                  <a
                    href={waLink(`Здравствуйте! Интересует ${b.name}. Хочу получить расчёт.`)}
                    target="_blank"
                    rel="noopener"
                    className="btn btn--outline btn--icon"
                    aria-label={`Написать в WhatsApp про ${b.name}`}
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="brands__any">
          <div>
            <h3 className="brands__any-title">НЕ НАШЛИ НУЖНУЮ МАРКУ?</h3>
            <p className="brands__any-text">Любые китайские автомобили под ключ — напишите, какой автомобиль хотите.</p>
          </div>
          <a
            href={waLink('Здравствуйте! Хочу подобрать автомобиль из Китая.')}
            target="_blank"
            rel="noopener"
            className="btn btn--white"
          >
            <WhatsAppIcon /> Написать в WhatsApp
          </a>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
