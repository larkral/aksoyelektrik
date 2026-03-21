"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#solar-paketler", label: "Solar Paketler" },
  { href: "#tamamlanan-islerimiz", label: "İşlerimiz" },
  { href: "#services", label: "Hizmetler" },
  { href: "#faq", label: "SSS" },
  { href: "#contact", label: "İletişim" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[64px] items-center justify-between lg:h-[76px]">
          <Link
            href="#home"
            className="flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/logoaksoy.png"
              alt="Aksoy Elektrik & Elektronik"
              width={280}
              height={100}
              className="h-16 w-auto object-contain sm:h-[72px] lg:h-[84px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              asChild
              className="rounded-xl bg-brand-red px-5 text-white shadow-sm transition hover:bg-brand-red/90"
            >
              <Link href="#contact">Teklif Alın</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm transition hover:border-brand-red/30 hover:text-brand-red lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background/95 shadow-lg lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-3 shadow-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                asChild
                className="mt-2 rounded-xl bg-brand-red text-white hover:bg-brand-red/90"
              >
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Teklif Alın
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}