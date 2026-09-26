import { useEffect } from 'react'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ALISH CARS` : 'ALISH CARS — автомобили из Китая под ключ'
  }, [title])
}
