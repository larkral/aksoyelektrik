import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Check,
  Home,
  ShieldCheck,
  SunMedium,
  Zap,
} from "lucide-react"

type PackageItem = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  badge?: string
  items: string[]
  note: string
}

const packages: PackageItem[] = [
  {
    id: "paket-baslangic",
    title: "Başlangıç Solar Paket",
    description: "Temel ihtiyaçlar için ekonomik çözüm.",
    icon: SunMedium,
    badge: "Ekonomik",
    items: [
      "1 adet TV desteği",
      "4-5 adet LED aydınlatma",
      "Telefon şarj desteği",
      "Temel cihaz kullanımı",
    ],
    note: "Bağ evi ve küçük alanlar için uygundur.",
  },
  {
    id: "paket-guvenlik",
    title: "Güvenlik Solar Paket",
    description: "Güvenlik odaklı sistem çözümü.",
    icon: ShieldCheck,
    badge: "Popüler",
    items: [
      "4 kameralı sistem desteği",
      "Kayıt cihazı altyapısı",
      "Gece-gündüz kullanım",
      "Profesyonel montaj",
    ],
    note: "Tarla, bağ evi ve iş yerleri için idealdir.",
  },
  {
    id: "paket-ev-tipi",
    title: "Ev Tipi Solar Paket",
    description: "Ev kullanımı için dengeli sistem.",
    icon: Home,
    items: [
      "1 adet TV desteği",
      "6-8 adet LED aydınlatma",
      "Modem desteği",
      "Kurulum ve test desteği",
    ],
    note: "Günlük kullanım için ideal çözümdür.",
  },
  {
    id: "paket-gelismis",
    title: "Gelişmiş Solar Paket",
    description: "Daha güçlü kullanım için uygun paket.",
    icon: Zap,
    badge: "Güçlü",
    items: [
      "4 kameralı sistem desteği",
      "1 adet TV kullanımı",
      "8-10 adet LED aydınlatma",
      "Keşif ve profesyonel kurulum",
    ],
    note: "Daha geniş kullanım ihtiyacı için uygundur.",
  },
]

export default function SolarPackagesSection() {
  return (
    <section id="solar-paketler" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-red sm:px-4 sm:py-1.5 sm:text-sm">
            Solar Çözümler
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            İhtiyacınıza Uygun
            <span className="block text-brand-red">Solar Paketler</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 lg:text-lg">
            Ev, bağ evi, tarla ve küçük işletmeler için profesyonel solar çözümler sunuyoruz.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4 lg:mt-12 lg:gap-6">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            const isFeatured = index === 1

            return (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-2xl border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 ${
                  isFeatured
                    ? "border-brand-red/30 shadow-md ring-1 ring-brand-red/20"
                    : "border-border shadow-sm"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red/80 via-brand-red to-brand-red/70" />

                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </div>

                  {pkg.badge ? (
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold sm:px-3 ${
                        isFeatured
                          ? "bg-brand-red text-white"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-4 min-h-[84px]">
                  <h3 className="text-lg font-bold leading-tight text-foreground sm:text-xl">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                <ul className="mt-4 min-h-[152px] space-y-2.5">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-6 text-foreground/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <div className="min-h-[96px] rounded-xl border border-border bg-background/70 p-3.5">
                    <p className="text-sm font-semibold text-foreground">
                      Fiyatlandırma
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      Keşif ve ihtiyaca göre özel belirlenir.
                    </p>
                  </div>

                  <p className="mt-4 min-h-[48px] text-sm leading-6 text-muted-foreground">
                    {pkg.note}
                  </p>

                  <a
                    href="#contact"
                    className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      isFeatured
                        ? "bg-brand-red text-white hover:opacity-90"
                        : "bg-foreground text-background hover:opacity-90"
                    }`}
                  >
                    Hemen Bilgi Al
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}