export interface Community {
  id: number;
  name: string;
  description: string;
  members: number;
  icon: string;
  iconColor: string;
  coverImage?: string;
  category?: string;
}

export const communities: Community[] = [
  {
    id: 1,
    name: 'Barla Nur Talebeleri',
    description: 'Risale-i Nur hizmetinin çekirdeği olan Barla hatıraları ve dersleri üzerine odaklanan topluluk.',
    members: 12450,
    icon: '🏠',
    iconColor: '#3b82f6',
    category: 'Risale-i Nur',
  },
  {
    id: 2,
    name: 'Ankara Nur Medreseleri',
    description: 'Ankara merkezli Risale-i Nur dersleri ve medrese faaliyetleri hakkında bilgi paylaşım platformu.',
    members: 8920,
    icon: '🕌',
    iconColor: '#8b5cf6',
    category: 'Risale-i Nur',
  },
  {
    id: 3,
    name: 'İzmit Nur Talebeleri',
    description: 'İzmit bölgesindeki Nur hizmetleri ve okuma programları topluluğu.',
    members: 15780,
    icon: '🌊',
    iconColor: '#10b981',
    category: 'Risale-i Nur',
  },
  {
    id: 4,
    name: 'Isparta Nur Hizmeti',
    description: 'Gül şehri Isparta\'da Üstadımızın mirasını yaşatan talebelerin buluşma noktası.',
    members: 6340,
    icon: '🌹',
    iconColor: '#f59e0b',
    category: 'Risale-i Nur',
  },
  {
    id: 5,
    name: 'Kastamonu Nur Halkası',
    description: 'Kastamonu Lahikası ekseninde hizmet metotları ve feyizli okumalar.',
    members: 11250,
    icon: '⛰️',
    iconColor: '#ec4899',
    category: 'Risale-i Nur',
  },
  {
    id: 6,
    name: 'Emirdağ Nur Talebeleri',
    description: 'Emirdağ Lahikası çerçevesinde içtimai ve vatani hizmet esasları.',
    members: 9870,
    icon: '📜',
    iconColor: '#ef4444',
    category: 'Risale-i Nur',
  },
  {
    id: 7,
    name: 'Şark Medreseleri Talebeleri',
    description: 'Doğu ve Güneydoğu Anadolu medrese kültürü ile Risale-i Nur mezci.',
    members: 7500,
    icon: '🏔️',
    iconColor: '#06b6d4',
    category: 'Risale-i Nur',
  },
  {
    id: 8,
    name: 'Risale-i Nur Mütalaaları',
    description: 'Derinlemesine metin analizleri ve kavram çalışmaları yapan akademik düzeyde mütalaa grubu.',
    members: 20400,
    icon: '📚',
    iconColor: '#14b8a6',
    category: 'Risale-i Nur',
  },
];
