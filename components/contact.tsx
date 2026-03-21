"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 (543) 482 90 62",
    href: "tel:+905434829062",
  },
  {
    icon: Mail,
    title: "E-posta",
    value: "info@aksoyelektronik03.com",
    href: "mailto:info@aksoyelektronik03.com",
  },
  {
    icon: MapPin,
    title: "Adres",
    value: "Esentepe Mahallesi 314. Sokak No: 22, Merkez / Afyonkarahisar",
    href: "#",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    value: "Pazartesi - Cumartesi / 08:00 - 18:00",
    href: "#",
  },
]

const serviceTypes = [
  "Elektrik Tesisatı",
  "Aydınlatma Sistemleri",
  "Arıza Tespit ve Onarım",
  "Güneş Enerjisi / Solar Sistemleri",
  "Kablolama Çözümleri",
  "Güvenlik Kamerası / Alarm Sistemleri",
  "Diğer",
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const whatsappNumber = "905434829062"

    const text = `Merhaba, Aksoy Elektrik & Elektronik için bilgi almak istiyorum.

Ad Soyad: ${formData.name}
Telefon: ${formData.phone}
Hizmet Türü: ${formData.service}
Mesaj: ${formData.message || "-"}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank")

    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
            İletişim
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Bizimle
            <span className="block text-brand-red">İletişime Geçin</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 lg:text-lg">
            Projeniz hakkında bilgi almak veya teklif istemek için bize ulaşın.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 lg:order-1">
            <div className="rounded-[28px] border border-border bg-card p-5 shadow-sm sm:p-6 lg:p-7">
              <h3 className="text-xl font-bold text-foreground">
                Teklif Formu
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Ad Soyad
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-11 rounded-xl bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Telefon Numarası
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="05xx xxx xx xx"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="h-11 rounded-xl bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Hizmet Türü
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    required
                    className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Seçiniz</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Mesajınız
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Projeniz hakkında kısa bilgi yazın..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="resize-none rounded-xl bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-11 w-full rounded-xl bg-brand-red text-white hover:bg-brand-red/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  WhatsApp ile Gönder
                </Button>
              </form>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-red/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}

              <a
                href="https://wa.me/905434829062"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp ile İletişime Geçin
              </a>
            </div>

            <div className="mt-4 overflow-hidden rounded-[28px] border border-border bg-brand-charcoal shadow-sm">
              <div className="flex aspect-video flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/20">
                  <MapPin className="h-7 w-7 text-brand-red" />
                </div>

                <h4 className="text-lg font-semibold text-white">
                  Aksoy Elektrik & Elektronik
                </h4>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  Esentepe Mahallesi 314. Sokak No: 22
                  <br />
                  Merkez / Afyonkarahisar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}