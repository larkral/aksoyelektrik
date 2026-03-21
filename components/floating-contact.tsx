"use client"

import { Phone } from "lucide-react"

export default function FloatingContact() {
  return (
    <a
      href="tel:+905434829062"
      aria-label="Aksoy Elektrik'i Ara"
      className="group fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
    >
      <div className="relative flex items-center gap-3 overflow-hidden rounded-full border border-brand-red/20 bg-brand-red px-4 py-3 text-white shadow-[0_18px_40px_rgba(185,28,28,0.28)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_50px_rgba(185,28,28,0.38)] sm:px-5">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-70" />

        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
          <Phone className="h-5 w-5" />
        </div>

        <div className="relative flex flex-col">
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/75">
            Hızlı İletişim
          </span>
          <span className="text-sm font-semibold sm:text-[15px]">
            Hemen Ara
          </span>
        </div>
      </div>
    </a>
  )
}