import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kullanım Şartları | Aksoy Elektrik & Elektronik",
  description:
    "Aksoy Elektrik & Elektronik kullanım şartları sayfası.",
};

export default function KullanimSartlariPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-medium tracking-wide text-brand-orange uppercase">
            Yasal Bilgilendirme
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Kullanım Şartları
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Bu web sitesini ziyaret eden tüm kullanıcılar, aşağıda yer alan
            kullanım şartlarını kabul etmiş sayılır. Lütfen siteyi kullanmadan
            önce metni dikkatlice inceleyiniz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-8 text-sm leading-7 text-slate-700 sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                1. Genel Hükümler
              </h2>
              <p className="mt-3">
                Bu web sitesi, Aksoy Elektrik & Elektronik tarafından bilgi
                verme, iletişim sağlama ve hizmet tanıtımı amacıyla
                oluşturulmuştur. Sitede yer alan tüm içerikler yalnızca genel
                bilgilendirme amacı taşır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                2. İçerik Kullanımı
              </h2>
              <p className="mt-3">
                Web sitesinde yer alan metinler, görseller, tasarımlar, logolar
                ve diğer tüm içerikler Aksoy Elektrik & Elektronik’e ait olabilir
                veya kullanım hakkı kapsamında sunulabilir. İzinsiz şekilde
                kopyalanması, çoğaltılması veya ticari amaçla kullanılması uygun
                değildir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                3. Hizmet Bilgileri
              </h2>
              <p className="mt-3">
                Web sitesinde yer alan hizmet açıklamaları, örnek içerikler ve
                tanıtım metinleri bilgilendirme amaçlıdır. Sunulan hizmet
                kapsamı, fiyatlandırma ve uygulama detayları proje bazlı olarak
                değişiklik gösterebilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                4. Kullanıcı Sorumluluğu
              </h2>
              <p className="mt-3">
                Kullanıcı, web sitesini yasalara, genel ahlaka ve dürüstlük
                kurallarına uygun şekilde kullanmayı kabul eder. Siteye zarar
                verebilecek, hizmeti aksatabilecek veya güvenliği tehdit
                edebilecek girişimlerde bulunulmamalıdır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                5. Üçüncü Taraf Bağlantılar
              </h2>
              <p className="mt-3">
                Web sitemizde üçüncü taraf uygulama veya platformlara yönlendiren
                bağlantılar bulunabilir. Bu bağlantılar üzerinden erişilen dış
                sitelerin içeriklerinden ve uygulamalarından Aksoy Elektrik &
                Elektronik sorumlu değildir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                6. Sorumluluğun Sınırlandırılması
              </h2>
              <p className="mt-3">
                Web sitesinde yer alan bilgilerin güncel, eksiksiz ve hatasız
                olması için özen gösterilse de, içeriklerde zaman zaman
                değişiklik, eksiklik veya teknik hata oluşabilir. Kullanıcı,
                siteyi kendi sorumluluğunda kullandığını kabul eder.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                7. Değişiklik Hakkı
              </h2>
              <p className="mt-3">
                Aksoy Elektrik & Elektronik, web sitesinde yer alan içerikleri,
                hizmet açıklamalarını ve kullanım şartlarını önceden bildirim
                yapmaksızın güncelleme veya değiştirme hakkını saklı tutar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                8. İletişim
              </h2>
              <p className="mt-3">
                Kullanım şartlarıyla ilgili her türlü soru ve görüş için bizimle
                iletişime geçebilirsiniz.
              </p>
              <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                <p>
                  <strong>Aksoy Elektrik & Elektronik</strong>
                </p>
                <p>Telefon: 0543 482 90 62</p>
                <p>E-posta: info@aksoyelektrik.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}