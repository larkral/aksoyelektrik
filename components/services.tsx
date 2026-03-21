import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import {
  Plug,
  Lightbulb,
  Search,
  SunMedium,
  Cable,
  Cctv,
  ArrowRight,
} from "lucide-react"

type ServiceItem = {
  icon: LucideIcon
  title: string
  description: string
  badge?: string
}

const services: ServiceItem[] = [
  {
    icon: Plug,
    title: "Elektrik Tesisatı",
    description: "Konut ve iş yerleri için güvenli tesisat çözümleri sunuyoruz.",
    badge: "Profesyonel",
  },
  {
    icon: Lightbulb,
    title: "Aydınlatma Sistemleri",
    description: "İç ve dış mekanlar için modern aydınlatma uygulamaları yapıyoruz.",
    badge: "Modern",
  },
  {
    icon: Search,
    title: "Arıza Tespit ve Onarım",
    description: "Elektrik arızalarını hızlı şekilde tespit edip onarıyoruz.",
    badge: "Hızlı",
  },
  {
    icon: SunMedium,
    title: "Solar Sistemler",
    description: "Keşif, kurulum ve destek dahil solar çözümler sunuyoruz.",
    badge: "Verimli",
  },
  {
    icon: Cable,
    title: "Kablolama Çözümleri",
    description: "Güç ve veri altyapısı için düzenli kablolama hizmeti veriyoruz.",
    badge: "Düzenli",
  },
  {
    icon: Cctv,
    title: "Kamera ve Alarm",
    description: "Güvenlik kamerası ve alarm sistemleri kuruyoruz.",
    badge: "Güvenlik",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
            Hizmetlerimiz
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Profesyonel Elektrik
            <span className="block text-brand-red">Hizmetleri</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Güvenilir ve profesyonel elektrik çözümleri sunuyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            const isFeatured = index === 3

            return (
              <div
                key={service.title}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isFeatured
                    ? "border-brand-red/30 shadow-md ring-1 ring-brand-red/20"
                    : "border-border shadow-sm"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red/80 via-brand-red to-brand-red/70" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <Icon className="h-5 w-5" />
                  </div>

                  {service.badge ? (
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        isFeatured
                          ? "bg-brand-red text-white"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {service.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold leading-tight text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-5">
                  <Link
                    href="#contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      isFeatured
                        ? "bg-brand-red text-white hover:opacity-90"
                        : "bg-foreground text-background hover:opacity-90"
                    }`}
                  >
                    Detaylı Bilgi Al
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-brand-red text-white hover:bg-brand-red/90"
          >
            <Link href="#contact">
              Tüm Hizmetler İçin Bize Ulaşın
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}