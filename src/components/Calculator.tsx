import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { BRANDS, waLink } from '../data'
import { Arrow } from './ui'

const YEARS = Array.from({ length: 7 }, (_, i) => String(new Date().getFullYear() - i))
const CITIES = ['Бишкек', 'Ош', 'Джалал-Абад', 'Каракол']

export function Select({
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

export default function Calculator() {
  const [params] = useSearchParams()
  const initial = BRANDS.find((b) => b.id === params.get('brand'))
  const [brand, setBrand] = useState(initial?.name ?? '')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [price, setPrice] = useState('')
  const [engine, setEngine] = useState('Бензин / Гибрид / Электро')
  const [city, setCity] = useState('Бишкек')

  // марка из ссылки вида /services?brand=zeekr#calc
  useEffect(() => {
    if (initial) {
      setBrand(initial.name)
      setModel('')
    }
  }, [initial])
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
