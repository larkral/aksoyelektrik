import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Clock,
  Award,
  Headphones,
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react"

const trustIndicators = [
  { icon: Shield, label: "Güvenilir Hizmet" },
  { icon: Award, label: "Uzman Ekip" },
  { icon: Clock, label: "Zamanında Teslim" },
  { icon: Headphones, label: "7/24 Destek" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-24 pb-16 lg:min-h-screen lg:pt-28 lg:pb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-background" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">
              <Zap className="h-4 w-4" />
              Profesyonel Elektrik Çözümleri
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Güvenilir Elektrik ve
              <span className="block text-brand-red">
                Elektronik Çözümleri
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
              Konut ve kurumsal projeler için güvenli, kaliteli ve modern
              elektrik hizmetleri sunuyoruz. Uzman ekibimizle süreci planlı,
              temiz ve profesyonel şekilde yönetiyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-brand-red px-7 text-white hover:bg-brand-red/90"
              >
                <Link href="#contact">
                  Teklif Alın
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-border bg-card text-foreground hover:bg-muted"
              >
                <Link href="#services">Hizmetlerimiz</Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustIndicators.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <item.icon className="h-5 w-5 text-brand-red" />
                  <p className="mt-3 text-xs font-medium leading-5 text-muted-foreground sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-card p-5 shadow-xl sm:p-7 lg:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red/80 via-brand-red to-brand-red/70" />

              <div className="flex items-start justify-between gap-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  Kurumsal Elektrik Hizmetleri
                </div>

                <Image
                  src="/logoaksoy.png"
                  alt="Aksoy Elektrik Logo"
                  width={170}
                  height={70}
                  className="h-14 w-auto object-contain sm:h-16 lg:h-[72px]"
                  priority
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                Modern altyapı, güvenli uygulama, profesyonel sonuç
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                Aksoy Elektrik & Elektronik olarak projelerinize kaliteli
                işçilik, güvenilir uygulama ve sürdürülebilir destek sunuyoruz.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background/70 p-4">
                  <p className="text-2xl font-bold text-brand-red">Kalite</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Doğru malzeme ve profesyonel uygulama
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background/70 p-4">
                  <p className="text-2xl font-bold text-foreground">Güven</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Zamanında teslim ve düzenli destek
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-brand-charcoal p-4 text-white sm:p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <p className="text-sm leading-6 text-white/80">
                    Konut, ofis ve kurumsal projelerde güvenilir elektrik ve
                    elektronik çözümleri için yanınızdayız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}