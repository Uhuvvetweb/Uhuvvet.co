export interface TrendingTopic {
  id: number;
  topic: string;
  posts: number;
  category?: string;
}

export const trendingTopics: TrendingTopic[] = [
  { id: 1, topic: 'Kuantum Bilişim', posts: 234, category: 'Teknoloji' },
  { id: 2, topic: 'İklim Değişikliği', posts: 189, category: 'Çevre' },
  { id: 3, topic: 'Yapay Zeka Devrimi', posts: 567, category: 'Teknoloji' },
  { id: 4, topic: 'Uzay Keşfi', posts: 423, category: 'Bilim' },
  { id: 5, topic: 'Kripto Para', posts: 312, category: 'Ekonomi' },
  { id: 6, topic: 'Sürdürülebilirlik', posts: 267, category: 'Çevre' },
];
