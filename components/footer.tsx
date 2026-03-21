import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#solar-paketler", label: "Solar Paketler" },
  { href: "#tamamlanan-islerimiz", label: "İşlerimiz" },
  { href: "#services", label: "Hizmetler" },
  { href: "#faq", label: "SSS" },
  { href: "#contact", label: "İletişim" },
]

const services = [
  { href: "#services", label: "Elektrik Tesisatı" },
  { href: "#services", label: "Aydınlatma Sistemleri" },
  { href: "#services", label: "Arıza Tespit ve Onarım" },
  { href: "#solar-paketler", label: "Solar Sistemler" },
  { href: "#services", label: "Kablolama Çözümleri" },
  { href: "#services", label: "Kamera ve Alarm Sistemleri" },
]

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/p/Aksoy-Elektrik-Elektronik-61575260903115/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/aksoy_elektrik03?igsh=MWVtMDBmd3kxYzA0OQ==",
    label: "Instagram",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
                <Image
                  src="/logoaksoy.png"
                  alt="Aksoy Elektrik & Elektronik Logo"
                  fill
                  className="object-contain scale-150"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white sm:text-2xl">
                  Aksoy
                </span>
                <span className="mt-1 text-sm text-white/70">
                  Elektrik & Elektronik
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Konut, iş yeri ve kurumsal projeler için güvenilir elektrik,
              solar enerji ve güvenlik çözümleri sunuyoruz.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-red hover:bg-brand-red hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hızlı Erişim
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hizmetlerimiz
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/65 transition-colors hover:text-brand-red"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h4>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand-red" />
                <a
                  href="tel:+905434829062"
                  className="text-sm text-white/65 transition-colors hover:text-brand-red"
                >
                  0543 482 90 62
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brand-red" />
                <a
                  href="mailto:info@aksoyelektrik.com"
                  className="text-sm text-white/65 transition-colors hover:text-brand-red"
                >
                  info@aksoyelektrik.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-red" />
                <p className="text-sm leading-6 text-white/65">
                  Esentepe Mahallesi 314. Sokak No:22
                  <br />
                  Merkez / Afyonkarahisar
                </p>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-brand-red" />
                <p className="text-sm leading-6 text-white/65">
                  Pazartesi - Cumartesi
                  <br />
                  08:00 - 18:00
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/40">
            &copy; {currentYear} Aksoy Elektrik & Elektronik. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/gizlilik-politikasi"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kullanim-sartlari"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}