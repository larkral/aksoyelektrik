import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gizlilik Politikası | Aksoy Elektrik & Elektronik",
  description:
    "Aksoy Elektrik & Elektronik gizlilik politikası sayfası.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-medium tracking-wide text-brand-orange uppercase">
            Yasal Bilgilendirme
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Gizlilik Politikası
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Aksoy Elektrik & Elektronik olarak, web sitemizi ziyaret eden
            kullanıcılarımızın kişisel verilerinin gizliliğine önem veriyoruz.
            Bu sayfa, tarafımızla paylaşılan bilgilerin hangi amaçlarla
            işlendiğini ve nasıl korunduğunu açıklamaktadır.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-8 text-sm leading-7 text-slate-700 sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                1. Toplanan Bilgiler
              </h2>
              <p className="mt-3">
                Web sitemiz üzerinden iletişim formu, teklif formu, WhatsApp
                yönlendirmesi veya doğrudan iletişim kanalları aracılığıyla ad,
                soyad, telefon numarası, e-posta adresi ve mesaj içeriği gibi
                bilgiler tarafımıza iletilebilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                2. Bilgilerin Kullanım Amacı
              </h2>
              <p className="mt-3">
                Tarafımıza iletilen bilgiler; kullanıcı taleplerine dönüş
                sağlamak, teklif oluşturmak, hizmet süreçlerini yürütmek,
                iletişim kurmak ve kullanıcı deneyimini geliştirmek amacıyla
                kullanılabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                3. Bilgilerin Korunması
              </h2>
              <p className="mt-3">
                Aksoy Elektrik & Elektronik, kullanıcı bilgilerinin yetkisiz
                erişime, kayba, kötüye kullanıma veya izinsiz paylaşımına karşı
                korunması için makul teknik ve idari önlemler almaya özen
                gösterir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                4. Üçüncü Taraf Hizmetler
              </h2>
              <p className="mt-3">
                Web sitemizde WhatsApp gibi üçüncü taraf iletişim araçlarına
                yönlendirme yapılabilir. Kullanıcıların bu platformlar üzerinden
                paylaştığı veriler, ilgili üçüncü taraf hizmet sağlayıcıların
                kendi politika ve koşullarına tabidir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                5. Çerezler ve Teknik Veriler
              </h2>
              <p className="mt-3">
                Web sitemiz, performans ve kullanıcı deneyimini iyileştirmek
                amacıyla tarayıcı, cihaz türü, ziyaret süresi ve sayfa kullanımı
                gibi bazı teknik verileri işleyebilir. Bu veriler, doğrudan
                kimlik tespiti amacıyla kullanılmaz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                6. Bilgilerin Paylaşılması
              </h2>
              <p className="mt-3">
                Kullanıcılardan elde edilen bilgiler, yasal yükümlülükler hariç
                olmak üzere kullanıcı onayı olmaksızın üçüncü kişilerle
                satılmaz, kiralanmaz veya izinsiz şekilde paylaşılmaz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                7. Kullanıcı Hakları
              </h2>
              <p className="mt-3">
                Kullanıcılar, kendileriyle ilgili paylaşılan bilgilerin
                güncellenmesini, düzeltilmesini veya silinmesini talep edebilir.
                Bunun için iletişim kanallarımız üzerinden bizimle irtibata
                geçebilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                8. Politika Güncellemeleri
              </h2>
              <p className="mt-3">
                Bu gizlilik politikası, ihtiyaç halinde güncellenebilir.
                Güncellenen metin, web sitemizde yayınlandığı tarihten itibaren
                geçerli kabul edilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                9. İletişim
              </h2>
              <p className="mt-3">
                Gizlilik politikamız hakkında sorularınız için bizimle iletişime
                geçebilirsiniz.
              </p>
              <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                <p>
                  <strong>Aksoy Elektrik & Elektronik</strong>
                </p>
                <p>Telefon: 0543 482 90 62</p>
                <p>E-posta: info@aksoyelektronik03.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}