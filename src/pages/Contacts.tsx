import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Calculator as CalcIcon, Clock3, MessageCircle } from 'lucide-react'
import { PageHero } from '../components/sections'
import { Arrow, WhatsAppIcon } from '../components/ui'
import { waLink } from '../data'
import { usePageTitle } from './usePageTitle'

export default function Contacts() {
  usePageTitle('Контакты')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [car, setCar] = useState('')
  const [comment, setComment] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = [
      'Здравствуйте! Заявка с сайта ALISH CARS:',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Автомобиль: ${car || '—'}`,
      comment && `Комментарий: ${comment}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(waLink(text), '_blank', 'noopener')
  }

  return (
    <>
      <PageHero
        image="/img/hero.jpg"
        position="85% center"
        eyebrow="Контакты"
        title={
          <>
            СВЯЗАТЬСЯ
            <br />С НАМИ
          </>
        }
        text={
          <>
            Оставьте заявку и получите{' '}
            <br />
            индивидуальный расчёт.
          </>
        }
      />

      <section className="contact">
        <div className="contact__left">
          <p className="eyebrow sm">Быстрая связь</p>
          <h2 className="sec-title">
            НАПИШИТЕ НАМ <i className="line-arrow" />
          </h2>
          <ul className="contact__list">
            <li>
              <span className="flow__icon">
                <MessageCircle size={18} strokeWidth={1.3} />
              </span>
              <span>
                <b>WhatsApp</b>
                <a href={waLink('Здравствуйте! Хочу привезти автомобиль из Китая.')} target="_blank" rel="noopener">
                  Написать в WhatsApp <Arrow size={9} />
                </a>
              </span>
            </li>
            <li>
              <span className="flow__icon">
                <CalcIcon size={18} strokeWidth={1.3} />
              </span>
              <span>
                <b>Калькулятор</b>
                <Link to="/services#calc">
                  Рассчитать стоимость <Arrow size={9} />
                </Link>
              </span>
            </li>
            <li>
              <span className="flow__icon">
                <Clock3 size={18} strokeWidth={1.3} />
              </span>
              <span>
                <b>Срок доставки</b>
                <span>от 2 недель</span>
              </span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={submit}>
          <p className="contact__form-title">Заявка на расчёт</p>
          <label className="field">
            <span className="field__label">Ваше имя</span>
            <span className="field__box">
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Например: Алексей" autoComplete="name" />
            </span>
          </label>
          <label className="field">
            <span className="field__label">Телефон</span>
            <span className="field__box">
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+996 ___ ___ ___"
                autoComplete="tel"
              />
            </span>
          </label>
          <label className="field">
            <span className="field__label">Какой автомобиль нужен</span>
            <span className="field__box">
              <input value={car} onChange={(e) => setCar(e.target.value)} placeholder="Например: Zeekr 7X, 2025" />
            </span>
          </label>
          <label className="field">
            <span className="field__label">Комментарий</span>
            <span className="field__box field__box--area">
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Бюджет, комплектация, цвет…" rows={3} />
            </span>
          </label>
          <button type="submit" className="btn btn--beige contact__btn">
            <WhatsAppIcon /> Отправить заявку
          </button>
          <p className="contact__note">Заявка откроется в WhatsApp — останется только нажать «Отправить».</p>
        </form>
      </section>
    </>
  )
}
