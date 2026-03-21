import Image from "next/image";
import Link from "next/link";
import { completedWorks } from "../data/completed-works";

export default function CompletedWorksSection() {
  return (
    <section id="tamamlanan-islerimiz" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
            Referans Çalışmalar
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tamamlanan
            <span className="block text-brand-red">İşlerimiz</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Elektrik, güvenlik, aydınlatma ve enerji alanında tamamladığımız
            uygulamalardan bazı örnekleri inceleyebilirsiniz.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {completedWorks.map((work) => (
            <article
              key={work.slug}
              className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={work.coverImage}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="inline-flex rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red">
                  {work.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-foreground">
                  {work.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {work.shortDescription}
                </p>

                <Link
                  href={`/islerimiz/${work.slug}`}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Detayları İncele
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}