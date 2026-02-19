export interface Department {
  id: number;
  name: string;
  description: string;
  responsibility: string;
  members?: number;
  established?: string;
  contact?: string;
}

export interface DepartmentMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  avatarColor: string;
}

export interface DepartmentPublication {
  id: number;
  title: string;
  date: string;
  type: string;
}

export interface PollOption {
  id: number;
  text: string;
  votes: number;
  voterAvatars: string[];
}

export interface Poll {
  id: number;
  question: string;
  createdBy: string;
  createdAt: string;
  expiresAt: string;
  participants: number;
  totalVotes: number;
  options: PollOption[];
}

export const departments: Department[] = [
  {
    id: 1,
    name: "Dâr Heyeti",
    description:
      "Platformun en üst idari ve murakabe organıdır. Müellifler Heyeti tarafından alınan stratejik kararları esas sözleşme, telif usulü ve cemiyet prensipleri bakımından inceler; kabul, tashih veya iade yetkisine sahiptir.",
    responsibility:
      "Nihai idari denetim, esas sözleşme muhafazası ve stratejik yön tayini",
    members: 7,
    established: "2024-01-15",
    contact: "darheyet@uhuvvet.com",
  },
  {
    id: 2,
    name: "Müellifler Heyeti",
    description:
      "Platformda telif yetkisine sahip müelliflerden oluşan ana üretim ve istişare meclisidir. Platform neşriyatının fikrî istikametini belirler ve içerik politikalarını oluşturur.",
    responsibility:
      "Telif üretimi, içerik politikası oluşturma ve yayın standartlarının belirlenmesi",
    members: 12,
    established: "2024-02-01",
    contact: "muellifler@uhuvvet.com",
  },
  {
    id: 3,
    name: "Tetkik Ofisi",
    description:
      "Platform bünyesinde yayımlanan tüm içeriklerin doğruluk, kaynak yeterliliği ve telif usulüne uygunluğunu denetleyen bağımsız inceleme birimidir. Aynı zamanda müellif adaylarının kabul sürecini yürütür, adaylık değerlendirmesi yapar ve telif yetkisi verilmesine dair rapor hazırlar.",
    responsibility:
      "İçerik tetkiki, moderasyon denetimi, müellif kabul süreçleri ve kalite murakabesi",
    members: 15,
    established: "2024-01-20",
    contact: "tetkik@uhuvvet.com",
  },
  {
    id: 4,
    name: "Wiki Ofisi",
    description:
      "Wiki bölümünde yer alan ansiklopedik içeriklerin akademik usule uygun şekilde hazırlanması, kaynaklandırılması ve güncelliğinin korunmasını sağlar.",
    responsibility: "Ansiklopedik veri yönetimi ve ilmî editörlük",
    members: 20,
    established: "2024-02-10",
    contact: "wiki@uhuvvet.com",
  },
  {
    id: 5,
    name: "Developer Ofisi",
    description:
      "Platformun teknik altyapısı, yazılım geliştirme süreçleri ve sistem güvenliğinden sorumlu icra birimidir.",
    responsibility: "Yazılım geliştirme, altyapı yönetimi ve veri güvenliği",
    members: 8,
    established: "2024-01-10",
    contact: "teknik@uhuvvet.com",
  },
];

export const departmentMembersCount: Record<number, { count: number }> = {
  1: { count: 15 },
  2: { count: 1487 },
  3: { count: 22 },
  4: { count: 64 },
  5: { count: 121 },
};

export const departmentPolls: Record<number, Poll[]> = {
  1: [
    {
      id: 101,
      question:
        "Platform genel yayın politikası revizyonu yürürlüğe alınsın mı?",
      createdBy: "Dâr Heyeti",
      createdAt: "2 gün önce",
      expiresAt: "5 gün sonra",
      participants: 7,
      totalVotes: 6,
      options: [
        {
          id: 1,
          text: "Revizyon kabul edilsin",
          votes: 4,
          voterAvatars: ["AH", "MK", "YS", "TA"],
        },
        {
          id: 2,
          text: "Tekrar müzakereye açılsın",
          votes: 2,
          voterAvatars: ["EA", "FD"],
        },
      ],
    },
  ],

  2: [
    {
      id: 201,
      question: "Yeni telif eser kabul kriterleri güncellensin mi?",
      createdBy: "Müellifler Heyeti",
      createdAt: "1 gün önce",
      expiresAt: "6 gün sonra",
      participants: 12,
      totalVotes: 9,
      options: [
        {
          id: 1,
          text: "Yeni kriterler kabul edilsin",
          votes: 6,
          voterAvatars: ["MT", "KA", "OE", "SD", "ZT"],
        },
        {
          id: 2,
          text: "Mevcut sistem devam etsin",
          votes: 3,
          voterAvatars: ["HB", "LM", "CN"],
        },
      ],
    },
  ],

  3: [
    {
      id: 301,
      question:
        "Müellif aday değerlendirme süreci dijital sisteme taşınsın mı?",
      createdBy: "Tetkik Ofisi",
      createdAt: "3 gün önce",
      expiresAt: "4 gün sonra",
      participants: 15,
      totalVotes: 11,
      options: [
        {
          id: 1,
          text: "Tamamen dijital sisteme geçilsin",
          votes: 7,
          voterAvatars: ["TG", "ME", "OS", "AD"],
        },
        {
          id: 2,
          text: "Hibrit sistem devam etsin",
          votes: 4,
          voterAvatars: ["SB", "YD", "BT"],
        },
      ],
    },
  ],

  4: [
    {
      id: 401,
      question:
        "Wiki maddelerinde zorunlu kaynak doğrulama sistemi getirilsin mi?",
      createdBy: "Wiki Ofisi",
      createdAt: "2 gün önce",
      expiresAt: "7 gün sonra",
      participants: 20,
      totalVotes: 14,
      options: [
        {
          id: 1,
          text: "Zorunlu doğrulama getirilsin",
          votes: 10,
          voterAvatars: ["ER", "UA", "KD", "SY", "BT"],
        },
        {
          id: 2,
          text: "Editör kontrolü yeterli",
          votes: 4,
          voterAvatars: ["ZA", "PO"],
        },
      ],
    },
  ],

  5: [
    {
      id: 501,
      question:
        "Platform için gerçek zamanlı bildirim altyapısı geliştirilsin mi?",
      createdBy: "Developer Ofisi",
      createdAt: "1 gün önce",
      expiresAt: "5 gün sonra",
      participants: 8,
      totalVotes: 7,
      options: [
        {
          id: 1,
          text: "Öncelikli geliştirme olsun",
          votes: 5,
          voterAvatars: ["AK", "MT", "YS", "EA"],
        },
        {
          id: 2,
          text: "Sonraki sürüme ertelensin",
          votes: 2,
          voterAvatars: ["KA", "FD"],
        },
      ],
    },
  ],
};

export const departmentPublications: Record<number, DepartmentPublication[]> = {
  1: [
    {
      id: 1,
      title: "İstişare Usulü ve Esasları",
      date: "1 Ocak 2026",
      type: "Duyuru",
    },
  ],
  2: [
    {
      id: 1,
      title: "Yazım Kuralları Kılavuzu",
      date: "10 Şubat 2026",
      type: "Kılavuz",
    },
  ],
  3: [
    {
      id: 1,
      title: "Tetkik Kriterleri 2026",
      date: "1 Şubat 2026",
      type: "Duyuru",
    },
  ],
  4: [
    {
      id: 1,
      title: "Madde Yazım Standartları",
      date: "20 Ocak 2026",
      type: "Kılavuz",
    },
  ],
  5: [
    {
      id: 1,
      title: "Sistem Güncelleme Raporu",
      date: "5 Ocak 2026",
      type: "Rapor",
    },
  ],
};
