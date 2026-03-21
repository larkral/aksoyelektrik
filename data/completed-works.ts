export type CompletedWork = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  heroDescription: string;
  coverImage: string;
  gallery: string[];
  content: string[];
};

const createGallery = (slug: string, total: number) =>
  Array.from({ length: total }, (_, i) => {
    const number = String(i + 1).padStart(2, "0");
    return `/works/${slug}/${slug}-${number}.jpg`;
  });

export const completedWorks: CompletedWork[] = [
  {
    slug: "elektrik-tesisat",
    title: "Elektrik Tesisat Uygulamaları",
    category: "Elektrik Tesisatı",
    shortDescription:
      "Konut ve iş yerlerine yönelik düzenli, güvenli ve profesyonel elektrik tesisat uygulamaları gerçekleştirildi.",
    heroDescription:
      "Elektrik altyapısında güvenlik, düzen ve kullanım kolaylığı ön planda tutularak uygulamalar profesyonel şekilde tamamlandı.",
    coverImage: "/works/elektrik-tesisat/cover.jpg",
    gallery: createGallery("elektrik-tesisat", 7),
    content: [
      "Mevcut hatlar kontrol edilerek ihtiyaçlara uygun düzenlemeler yapıldı.",
      "Daha güvenli kullanım için bağlantılar ve tesisat yapısı profesyonel şekilde yenilendi.",
      "Konut ve iş yerlerinde uzun ömürlü ve düzenli elektrik altyapısı hedeflendi.",
    ],
  },
  {
    slug: "kamera-guvenlik",
    title: "Kamera ve Güvenlik Sistemleri",
    category: "Kamera Sistemleri",
    shortDescription:
      "Alan yapısına uygun kamera yerleşimi ve güvenlik altyapısı ile kontrollü ve güvenli çözümler sunuldu.",
    heroDescription:
      "İşletme ve yaşam alanlarında daha güvenli takip ve kontrol sağlamak için profesyonel kamera sistemleri kuruldu.",
    coverImage: "/works/kamera-guvenlik/cover.jpg",
    gallery: createGallery("kamera-guvenlik", 11),
    content: [
      "Kamera yerleşimleri alanın yapısına göre planlandı.",
      "Kör nokta oluşmaması için uygun açılar ve konumlar tercih edildi.",
      "Daha güvenli, takip edilebilir ve kontrollü alanlar oluşturuldu.",
    ],
  },
  {
    slug: "aydinlatma",
    title: "Aydınlatma Uygulamaları",
    category: "Aydınlatma",
    shortDescription:
      "Mekana uygun aydınlatma çözümleriyle daha şık, verimli ve kullanışlı alanlar oluşturuldu.",
    heroDescription:
      "Dekoratif görünüm ve verimli kullanım birlikte düşünülerek profesyonel aydınlatma uygulamaları tamamlandı.",
    coverImage: "/works/aydinlatma/cover.jpg",
    gallery: createGallery("aydinlatma", 9),
    content: [
      "Mekanın kullanım amacına uygun aydınlatma planlaması yapıldı.",
      "Hem estetik görünüm hem de doğru ışık dağılımı hedeflendi.",
      "Uzun ömürlü ve şık aydınlatma çözümleri uygulandı.",
    ],
  },
  {
  slug: "merkezi-uydu-sistemleri",
  title: "Merkezi Uydu Sistemleri",
  category: "Uydu Sistemleri",
  shortDescription:
    "Merkezi uydu altyapısı profesyonel şekilde düzenlenerek birden fazla kullanım noktasında daha stabil ve verimli yayın sistemi oluşturuldu.",
  heroDescription:
    "İşletme ve yaşam alanları için merkezi uydu sistemi altyapısı düzenli, güvenli ve profesyonel işçilikle tamamlandı.",
  coverImage: "/works/merkezi-uydu-sistemleri/cover.jpg",
  gallery: createGallery("merkezi-uydu-sistemleri", 9),
  content: [
    "Uydu dağıtım altyapısı alanın kullanım ihtiyacına göre planlandı.",
    "Kablolama ve bağlantı noktaları daha düzenli ve verimli çalışacak şekilde düzenlendi.",
    "Daha stabil yayın kalitesi ve daha güvenli sistem altyapısı sağlandı.",
  ],
},
  {
    slug: "uydu-tv",
    title: "Uydu ve TV Sistemleri",
    category: "Uydu Sistemleri",
    shortDescription:
      "Uydu ve televizyon bağlantıları profesyonel şekilde düzenlenerek daha sorunsuz kullanım sağlandı.",
    heroDescription:
      "Uydu ve TV sistemlerinde düzenli bağlantı, temiz işçilik ve sorunsuz kullanım ön planda tutuldu.",
    coverImage: "/works/uydu-tv/cover.jpg",
    gallery: createGallery("uydu-tv", 7),
    content: [
      "Uydu ve televizyon bağlantıları ihtiyaçlara uygun şekilde planlandı.",
      "Görüntü ve bağlantı kalitesini artıracak düzenlemeler yapıldı.",
      "Daha temiz, kullanışlı ve güvenli bir sistem teslim edildi.",
    ],
  },
  {
    slug: "pano-enerji",
    title: "Pano ve Enerji Çözümleri",
    category: "Pano Sistemleri",
    shortDescription:
      "Elektrik panosu, enerji dağıtımı ve hat düzenlemeleri profesyonel şekilde yenilenerek daha güvenli yapı oluşturuldu.",
    heroDescription:
      "Pano düzeni, hat güvenliği ve enerji kontrolü profesyonel işçilikle daha düzenli hale getirildi.",
    coverImage: "/works/pano-enerji/cover.jpg",
    gallery: createGallery("pano-enerji", 9),
    content: [
      "Pano içi düzen ve hat yapısı güvenlik odaklı şekilde ele alındı.",
      "Enerji dağıtımında daha kontrollü ve düzenli bir yapı oluşturuldu.",
      "Uzun ömürlü, sürdürülebilir ve profesyonel bir çözüm sunuldu.",
    ],
  },
];

export const getCompletedWorkBySlug = (slug: string) =>
  completedWorks.find((work) => work.slug === slug);