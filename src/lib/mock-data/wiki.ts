export interface WikiArticle {
  id: number;
  title: string;
  category: string;
  subcategory?: string;
  lastEdited: string;
  editors: number;
  views: string;
  excerpt: string;
  readTime?: string;
}

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ArticleContent {
  sections: ArticleSection[];
  references: string[];
}

export const wikiArticles: WikiArticle[] = [
  {
    id: 1,
    title: 'Bediüzzaman Said Nursî',
    category: 'Şahsiyetler',
    subcategory: 'Hayat ve Tarihçe',
    lastEdited: '2026-02-15',
    editors: 120,
    views: '450B',
    excerpt: 'Risale-i Nur Külliyatı\'nın müellifi olan İslam alimi ve mütefekkiri...',
    readTime: '45 dk',
  },
  {
    id: 2,
    title: 'Hatm-i Taif',
    category: 'Kavramlar',
    subcategory: 'Manevi Mertebeler',
    lastEdited: '2026-02-10',
    editors: 45,
    views: '85B',
    excerpt: 'Manevi terakkiyatta ve feyiz yolculuğunda kullanılan bir tabir ve mertebe...',
    readTime: '15 dk',
  },
  {
    id: 3,
    title: 'Abdülkadir Geylânî',
    category: 'Şahsiyetler',
    subcategory: 'Tasavvuf',
    lastEdited: '2026-02-05',
    editors: 60,
    views: '120B',
    excerpt: 'Kadiri tarikatının kurucusu ve Risale-i Nur\'da önemli bir yeri olan Gavs-ı Azam...',
    readTime: '25 dk',
  },
  {
    id: 4,
    title: 'İmam-ı Rabbânî',
    category: 'Şahsiyetler',
    subcategory: 'Ehli Sünnet',
    lastEdited: '2026-02-08',
    editors: 55,
    views: '95B',
    excerpt: 'Müceddid-i Elf-i Sâni unvanıyla maruf büyük İslam alimi ve mürşidi...',
    readTime: '30 dk',
  },
  {
    id: 5,
    title: 'Cemel Vakası',
    category: 'Tarih',
    subcategory: 'İslam Tarihi',
    lastEdited: '2026-02-01',
    editors: 70,
    views: '110B',
    excerpt: 'Sahabe efendilerimiz arasında vuku bulan içtimai ve siyasi hadiselerin Risale-i Nur perspektifiyle izahı...',
    readTime: '40 dk',
  },
  {
    id: 6,
    title: 'Hudus Delili',
    category: 'İlmi Kelam',
    subcategory: 'İspat-ı Vacib',
    lastEdited: '2026-02-12',
    editors: 30,
    views: '65B',
    excerpt: 'Alemin sonradan yaratılmış olması üzerinden Sani-i Zülcelal\'in varlığının ispatı...',
    readTime: '20 dk',
  },
  {
    id: 7,
    title: 'Tevhid Delilleri',
    category: 'Akide',
    subcategory: 'İman Esasları',
    lastEdited: '2026-02-14',
    editors: 85,
    views: '150B',
    excerpt: 'Kainattaki nizam ve mizan üzerinden Allah\'ın birliğinin ve vahdaniyetinin delilleri...',
    readTime: '35 dk',
  },
  {
    id: 8,
    title: 'İman–Akıl İlişkisi',
    category: 'Felsefe & Din',
    subcategory: 'Marifetullah',
    lastEdited: '2026-02-13',
    editors: 50,
    views: '105B',
    excerpt: 'İmanın akli temelleri ve vahy-i semavi ile aklın uzlaşma noktaları...',
    readTime: '28 dk',
  },
];

export const articleContent: Record<number, ArticleContent> = {
  1: {
    sections: [
      {
        title: 'Hayatı',
        content: 'Bediüzzaman Said Nursî (1878-1960), Bitlis\'in Nurs köyünde doğmuştur. Küçük yaştan itibaren ilmi tahsiline başlamış ve çok kısa sürede medrese ilimlerini ikmal etmiştir. Hayatı boyunca İslam dünyasının ihyası ve imanı kurtarmak için mücadele vermiştir.',
      },
      {
        title: 'Tarihçe-i Hayat',
        content: 'Eski Said, Yeni Said ve Üçüncü Said olmak üzere hayatı üç döneme ayrılır. Eski Said döneminde içtimai ve siyasi meselelerle ilgilenirken, Yeni Said döneminde Barla sürgünüyle birlikte Risale-i Nur eserlerini telif etmeye başlamıştır.',
      },
      {
        title: 'Eserleri',
        content: 'En temel eseri Risale-i Nur Külliyatı\'dır. Sözler, Mektubat, Lem\'alar ve Şualar ana bölümlerinden oluşur. Bu eserler Kur\'an-ı Kerim\'in bu asra bakan manevi bir tefsiridir.',
      },
      {
        title: 'Fikir Dünyası',
        content: 'Müsbet hareket, uhuvvet, ihlas ve sadakat prensipleri üzerine kurulu bir fikir dünyası vardır. Fen ilimleri ile dini ilimlerin mezcedilmesi gerektiğini savunmuştur.',
      },
      {
        title: 'Talebeleri ve Tesiri',
        content: 'Eserleri dünya dillerine çevrilmiş ve milyonlarca insana ulaşmıştır. "Nur Talebeleri" olarak anılan talebeleri vasıtasıyla Risale-i Nur hizmeti tüm dünyaya yayılmıştır.',
      },
    ],
    references: [
      'Tarihçe-i Hayat, Risale-i Nur Külliyatı',
      'Said Nursî, Eşref Edip',
      'Arşiv Belgeleriyle Said Nursî, Necmeddin Şahiner',
    ],
  },
  2: {
    sections: [
      {
        title: 'Tanımı',
        content: 'Hatm-i Taif, tasavvufta letaiflerin (ruh, sır, hafi, ahfa, kalb) zikriyle meşgul olup manevi bir temizlik ve terakki sürecini ifade eder.',
      },
      {
        title: 'Risale-i Nur\'daki Yeri',
        content: 'Üstad Bediüzzaman, klasik tasavvuf yolundaki bu gibi usullerin yerine Risale-i Nur\'da doğrudan Kur\'an\'dan alınan acz, fakr, şefkat ve tefekkür yolunu esas almıştır.',
      },
    ],
    references: ['Mektubat, 26. Mektup', 'Lem\'alar, 17. Lem\'a'],
  },
};

export const wikiCategories = [
  'Tüm Makaleler',
  'Şahsiyetler',
  'Kavramlar',
  'Tarih',
  'İlmi Kelam',
  'Akide',
  'Felsefe & Din',
];
