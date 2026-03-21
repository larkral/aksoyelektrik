import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  completedWorks,
  getCompletedWorkBySlug,
} from "../../../data/completed-works";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return completedWorks.map((work) => ({
    slug: work.slug,
  }));
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const work = getCompletedWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="bg-background">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={work.coverImage}
            alt={work.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            href="/#tamamlanan-islerimiz"
            className="inline-flex items-center text-sm font-medium text-white/85 transition hover:text-white"
          >
            ← Tamamlanan işlerimize dön
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              {work.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {work.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {work.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:05434829062"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Hemen Ara
              </a>

              <a
                href="https://wa.me/905434829062"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                WhatsApp’tan Ulaş
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                  Hizmet Alanı
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {work.category}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                  Görsel Sayısı
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {work.gallery.length} Fotoğraf
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                  Çalışma Tipi
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Profesyonel Uygulama
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              Proje Özeti
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Yapılan Çalışmalar
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              Bu projede uygulama öncesi planlama, alan ihtiyacına uygun çözüm
              üretimi ve düzenli işçilik anlayışıyla süreç profesyonel şekilde
              tamamlandı. Hem görünüm hem de kullanım açısından daha verimli,
              daha güvenli ve daha düzenli bir sonuç elde edildi.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            {work.content.map((item, index) => (
              <div
                key={item}
                className="group rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-sm font-bold text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Profesyonel Uygulama Detayı
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              Proje Galerisi
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Uygulamadan Fotoğraflar
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Tamamlanan çalışmadan seçilen görselleri aşağıda inceleyebilirsiniz.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {work.gallery.map((image, index) => (
              <div
                key={image}
                className={`group relative overflow-hidden rounded-[24px] border border-border bg-card shadow-sm ${
                  index === 0
                    ? "aspect-[16/9] md:col-span-2 xl:col-span-2"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${work.title} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-border bg-card p-8 shadow-sm lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  İletişim
                </span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Siz de işletmeniz veya yaşam alanınız için profesyonel bir çözüm ister misiniz?
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Elektrik, güvenlik, aydınlatma, pano ve enerji çözümlerinde
                  ihtiyacınıza uygun uygulamayı birlikte planlayalım. Hızlı
                  iletişim için hemen bize ulaşın.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="tel:05434829062"
                  className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Hemen Ara
                </a>

                <a
                  href="https://wa.me/905434829062"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  WhatsApp’tan Ulaş
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}