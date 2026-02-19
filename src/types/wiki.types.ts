/**
 * Wiki related type definitions
 */

export interface WikiArticle {
  id: string;
  title: string;
  content: string;
  summary: string;
  category: string;
  authorId: string;
  authorName: string;
  createdAt: Date;
  updatedAt: Date;
  viewsCount: number;
  likesCount: number;
  tags: string[];
  references?: string[];
  relatedArticles?: string[];
}

export interface WikiCategory {
  id: string;
  name: string;
  description: string;
  articlesCount: number;
  icon?: string;
}

export interface CreateWikiArticleInput {
  title: string;
  content: string;
  summary: string;
  category: string;
  tags?: string[];
  references?: string[];
}

export interface UpdateWikiArticleInput {
  title?: string;
  content?: string;
  summary?: string;
  category?: string;
  tags?: string[];
  references?: string[];
}
