import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Phone, Mail } from "lucide-react"

const faqs = [
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Afyonkarahisar genelinde ve çevre bölgelerde hizmet veriyoruz. Büyük ölçekli projeler için farklı şehirlerde de destek sağlıyoruz.",
  },
  {
    question: "Keşif hizmeti sunuyor musunuz?",
    answer:
      "Evet, projeler için keşif desteği sağlıyoruz. Alan incelemesi sonrası size en uygun çözüm ve fiyat bilgisi sunulur.",
  },
  {
    question: "Kurumsal projelerde çalışıyor musunuz?",
    answer:
      "Evet, konut projelerinin yanı sıra ofis, işletme, fabrika ve farklı ticari alanlarda da hizmet veriyoruz.",
  },
  {
    question: "Acil arıza desteğiniz var mı?",
    answer:
      "Evet, acil durumlarda hızlı müdahale sağlıyoruz. Detaylı destek için bizimle doğrudan iletişime geçebilirsiniz.",
  },
  {
    question: "Fiyatlandırma nasıl belirleniyor?",
    answer:
      "Fiyatlandırma yapılacak işin kapsamına, malzeme seçimine ve uygulama sürecine göre belirlenir.",
  },
  {
    question: "Garanti sunuyor musunuz?",
    answer:
      "Evet, yapılan işe ve kullanılan ürünlere göre garanti desteği sunuyoruz.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
            Sıkça Sorulan Sorular
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Merak Edilen
            <span className="block text-brand-red">Sorular</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 lg:text-lg">
            Hizmetlerimiz hakkında en çok sorulan soruları sizin için derledik.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-sm transition-all duration-300 hover:border-brand-red/30 hover:shadow-md"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:text-brand-red hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 rounded-[28px] border border-brand-red/20 bg-brand-charcoal p-6 shadow-sm">
            <h3 className="text-xl font-bold text-white">
              Başka sorularınız mı var?
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Ekibimiz size yardımcı olmak için hazır. Hemen iletişime geçebilirsiniz.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+905434829062"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                0543 482 90 62
              </a>

              <a
                href="mailto:aksoyelektronik03@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                aksoyelektronik03@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
