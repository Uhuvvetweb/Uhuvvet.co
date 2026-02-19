export interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
  avatarColor: string;
  bio?: string;
  joinedDate: string;
  location?: string;
  website?: string;
  coverColor: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'mtulw',
    username: 'mtulw',
    avatar: 'm',
    avatarColor: '#14b8a6',
    bio: 'Platform geliştiricisi ve topluluk yöneticisi',
    joinedDate: '15 Ocak 2024',
    location: 'İstanbul, Türkiye',
    website: 'uhuvvet.com',
    coverColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    name: 'Ahmet Yılmaz',
    username: 'ahmetyilmaz',
    avatar: 'A',
    avatarColor: '#f59e0b',
    bio: 'Yazılım mühendisi ve açık kaynak tutkunu',
    joinedDate: '20 Şubat 2024',
    location: 'Ankara, Türkiye',
    coverColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    name: 'Ayşe Demir',
    username: 'aysedemir',
    avatar: 'A',
    avatarColor: '#ec4899',
    bio: 'UI/UX Designer & Frontend Developer',
    joinedDate: '5 Mart 2024',
    location: 'İzmir, Türkiye',
    website: 'aysedemir.design',
    coverColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    name: 'Mehmet Kaya',
    username: 'mehmetkaya',
    avatar: 'M',
    avatarColor: '#8b5cf6',
    bio: 'Full Stack Developer | Tech Blogger',
    joinedDate: '12 Nisan 2024',
    location: 'Bursa, Türkiye',
    website: 'mehmetkaya.dev',
    coverColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
  {
    id: 5,
    name: 'Zeynep Öztürk',
    username: 'zeynepozturk',
    avatar: 'Z',
    avatarColor: '#10b981',
    bio: 'Data Scientist & AI Enthusiast',
    joinedDate: '25 Mayıs 2024',
    location: 'Antalya, Türkiye',
    coverColor: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  },
];
