export interface Post {
  id: number;
  userId: number;
  author: string;
  username: string;
  avatar: string;
  avatarColor: string;
  content: string;
  likes: number;
  comments: number;
  hearts?: number;
  timestamp: string;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  author: string;
  avatar: string;
  avatarColor: string;
  content: string;
  timestamp: string;
  likes: number;
}

export const posts: Post[] = [
  {
    id: 1,
    userId: 2,
    author: "Anonim",
    username: "anonim",
    avatar: "N",
    avatarColor: "#f59e0b",
    content:
      "“İnsan, acz ve fakrını derk ettiği nisbetle ubudiyette terakki eder.” (Mesnevi-i Nuriye)",
    likes: 42,
    comments: 9,
    timestamp: "1 saat önce",
  },
  {
    id: 2,
    userId: 3,
    author: "Anonim",
    username: "anonim",
    avatar: "H",
    avatarColor: "#ec4899",
    content:
      "Muhakemat’ta ifade edildiği gibi: Hakikat, taassup ile değil; tahkik ile anlaşılır.",
    likes: 37,
    comments: 6,
    timestamp: "3 saat önce",
  },
  {
    id: 3,
    userId: 4,
    author: "Anonim",
    username: "anonim",
    avatar: "İ",
    avatarColor: "#8b5cf6",
    content:
      "İşaratü’l İ’caz’da Kur’ân’ın i’cazı, yalnız lafzında değil; mana tertibindeki harika nizamda da tezahür eder.",
    likes: 51,
    comments: 11,
    timestamp: "7 saat önce",
  },
  {
    id: 4,
    userId: 5,
    author: "Anonim",
    username: "anonim",
    avatar: "M",
    avatarColor: "#10b981",
    content:
      "Mesnevi-i Nuriye: “Kalbin hayatı iman iledir; ruhun nuru marifetullahtır.”",
    likes: 63,
    comments: 14,
    timestamp: "1 gün önce",
  },
  {
    id: 5,
    userId: 1,
    author: "Anonim",
    username: "anonim",
    avatar: "R",
    avatarColor: "#14b8a6",
    content:
      "Muhakemat’ta geçen ölçü: Zaman değişse de hakaik-i imaniye değişmez.",
    likes: 74,
    comments: 18,
    hearts: 12,
    timestamp: "2 gün önce",
  },
];

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    userId: 3,
    author: "Anonim",
    avatar: "A",
    avatarColor: "#ec4899",
    content:
      "Acz ve fakr mesleğinin ubudiyetin özü olduğunu çok veciz anlatıyor.",
    timestamp: "30 dk önce",
    likes: 6,
  },
  {
    id: 2,
    postId: 3,
    userId: 4,
    author: "Anonim",
    avatar: "M",
    avatarColor: "#8b5cf6",
    content: "İşaratü’l İ’caz gerçekten tefsir metodunu tamamen değiştiriyor.",
    timestamp: "10 dk önce",
    likes: 4,
  },
];

export const communityPosts = [
  {
    id: 1,
    communityId: 1,
    author: "Anonim",
    content:
      "Bu hafta Mesnevi-i Nuriye’den “Habbe Risalesi” mütalaasında çıkan notlarınızı paylaşabilirsiniz.",
    timestamp: "2 saat önce",
    likes: 21,
    comments: 5,
  },
];

export const communityAnnouncements = [
  {
    id: 1,
    communityId: 1,
    title: "Müellifler Heyeti Kararı",
    content:
      "Müellifler Heyeti tarafından yapılan istişare neticesinde, tüm ders halkalarında ortak okuma programının takip edilmesine karar verilmiştir. Karar tüm yazarlar adına ilan olunur.",
    date: "18 Şubat 2026",
  },
  {
    id: 2,
    communityId: 1,
    title: "Neşriyat Usulü Hakkında",
    content:
      "Müellifler Heyeti, Risale-i Nur metinlerinin aslına sadakat prensibinin korunmasının tüm yayın faaliyetlerinde esas alınacağını tüm yazarlar adına duyurur.",
    date: "15 Şubat 2026",
  },
];

export const communityEvents = [
  {
    id: 1,
    communityId: 1,
    title: "Umumi Ders – İşaratü’l İ’caz Okumaları",
    date: "20 Şubat 2026",
    time: "20:30",
    location: "Bursa Ulu Camii Ders Salonu",
    participants: 140,
  },
  {
    id: 2,
    communityId: 1,
    title: "Haftalık Okuma Programı – Muhakemat",
    date: "22 Şubat 2026",
    time: "19:45",
    location: "Online (Zoom)",
    participants: 210,
  },
];

export const communityCourses = [
  {
    id: 1,
    communityId: 1,
    title: "Osmanlıca Risale Okuma Eğitimi",
    instructor: "Mustafa Bey",
    duration: "10 hafta",
    students: 260,
    progress: 35,
  },
];
