'use client'

import { Toaster as ToasterComponent } from 'sonner'

export function Toaster ({ position = 'bottom-left' }: { position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' }) {
  return (
    <ToasterComponent position={position} />
  )
}
