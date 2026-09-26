import {
  CarFront,
  FileCheck2,
  FileText,
  Flag,
  Handshake,
  PackageCheck,
  ReceiptText,
  Search,
  ShieldCheck,
  Ship,
  Truck,
  Wallet,
} from 'lucide-react'

// Номер WhatsApp в международном формате без «+» (пусто — WhatsApp предложит выбрать контакт)
export const WHATSAPP = ''
export const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

export const NAV = [
  { title: 'Главная', to: '/' },
  { title: 'Каталог', to: '/catalog' },
  { title: 'Как это работает', to: '/how-it-works' },
  { title: 'Услуги', to: '/services' },
  { title: 'Контакты', to: '/contacts' },
]

export const FEATURES = [
  { icon: CarFront, text: ['Любые марки', 'и модели'] },
  { icon: ReceiptText, text: ['Растаможка', 'и оформление'] },
  { icon: Truck, text: ['Доставка', 'от 2 недель'] },
  { icon: Handshake, text: ['Полное', 'сопровождение'] },
]

export const BRANDS = [
  { id: 'liauto', name: 'LI AUTO', models: ['L6', 'L7', 'L8', 'L9'] },
  { id: 'zeekr', name: 'ZEEKR', models: ['001', '007', '009', '7X'] },
  { id: 'xiaomi', name: 'XIAOMI', models: ['SU7', 'YU7'] },
  { id: 'avatr', name: 'AVATR', models: ['11', '12', '07'] },
  { id: 'leapmotor', name: 'LEAPMOTOR', models: ['C10', 'C11', 'C16'] },
  { id: 'denza', name: 'DENZA', models: ['N7', 'N9', 'Z9'] },
]

export const STEPS = [
  { icon: FileText, title: 'Заявка', text: ['Рассказываете, какой', 'автомобиль хотите'] },
  { icon: Search, title: 'Подбор', text: ['Находим подходящие', 'варианты в Китае'] },
  { icon: ShieldCheck, title: 'Проверка', text: ['Проверяем автомобиль', 'перед покупкой'] },
  { icon: Wallet, title: 'Покупка', text: ['Оформляем сделку', 'и забираем автомобиль'] },
  { icon: Truck, title: 'Логистика', text: ['Организуем доставку', 'в Кыргызстан'] },
  { icon: Flag, title: 'Вы получаете авто', text: ['Растаможенный и готовый', 'к эксплуатации'] },
]

export const STATS = [
  { value: '2+', unit: '', text: ['года опыта', 'на рынке'] },
  { value: '14', unit: 'дней', text: ['ориентировочный', 'срок доставки'] },
  { value: '100%', unit: '', text: ['сопровождение', 'на всех этапах'] },
  { value: '∞', unit: 'inf', text: ['выбор', 'автомобилей'] },
]

// Этапы из текста макета: «Поиск, проверка, выкуп, логистика, таможенное оформление, растаможка и доставка»
export const SERVICES = [
  { icon: Search, title: 'Поиск', text: 'Подбираем автомобиль в Китае под ваш запрос и бюджет' },
  { icon: ShieldCheck, title: 'Проверка', text: 'Проверяем автомобиль перед покупкой' },
  { icon: Wallet, title: 'Выкуп', text: 'Оформляем сделку и забираем автомобиль' },
  { icon: Ship, title: 'Логистика', text: 'Организуем доставку в Кыргызстан' },
  { icon: FileCheck2, title: 'Таможенное оформление', text: 'Готовим документы для ввоза' },
  { icon: ReceiptText, title: 'Растаможка', text: 'Растаможиваем автомобиль за вас' },
  { icon: PackageCheck, title: 'Доставка', text: 'Передаём автомобиль, готовый к эксплуатации' },
]
