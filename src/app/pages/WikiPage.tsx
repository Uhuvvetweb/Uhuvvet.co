import {
  Search,
  ArrowLeft,
  Clock,
  User,
  Eye,
  BookOpen,
  Share2,
  Bookmark,
} from "lucide-react";
import {
  ScrollArea,
  ScrollBar,
} from "../../../src/app/components/ui/scroll-area";
import ScrollContainer from "react-indiana-drag-scroll"; /* ... */
import {
  wikiArticles,
  articleContent,
  wikiCategories,
} from "../../lib/mock-data";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

export function WikiPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Tüm Makaleler");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = wikiArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Tüm Makaleler" ||
      article.category === selectedCategory;

    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  /* =========================
     ARTICLE DETAIL PAGE
  ==========================*/
  if (id) {
    const articleId = parseInt(id);
    const article = wikiArticles.find((a) => a.id === articleId);
    const content = articleContent[articleId];

    if (!article)
      return (
        <div className="p-8 text-center">
          <p className="text-muted-foreground">Makale bulunamadı.</p>
          <button
            onClick={() => navigate("/wiki")}
            className="mt-4 text-main font-medium"
          >
            Geri Dön
          </button>
        </div>
      );

    return (
      <div className="pb-20 md:pb-6">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4">
          {/* BACK */}
          <button
            onClick={() => navigate("/wiki")}
            className="flex items-center gap-2 text-foreground hover:text-main mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Vikipedi'ye Dön
          </button>

          {/* HEADER */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 text-main text-sm font-medium mb-3">
              <span>{article.category}</span>

              {article.subcategory && (
                <>
                  <span className="text-muted-foreground">/</span>
                  <span>{article.subcategory}</span>
                </>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 text-muted-foreground text-sm border-y border-border py-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Son güncelleme: {article.lastEdited}
              </div>

              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.editors} editör
              </div>

              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                {article.views} görüntüleme
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 mb-6">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {content ? (
                <div className="space-y-8">
                  {content.sections.map((section, index) => (
                    <section key={index}>
                      <h2 className="text-xl sm:text-2xl font-bold mb-4 pb-2 border-b border-border">
                        {section.title}
                      </h2>

                      <p className="text-base sm:text-lg leading-relaxed">
                        {section.content}
                      </p>
                    </section>
                  ))}

                  {content.references.length > 0 && (
                    <section className="mt-12 pt-8 border-t border-border">
                      <h2 className="text-xl font-bold mb-4">Kaynakça</h2>

                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {content.references.map((ref, i) => (
                          <li key={i}>{ref}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-base sm:text-lg">{article.excerpt}</p>

                  <div className="p-4 bg-accent rounded-lg text-center">
                    <p className="italic text-muted-foreground">
                      Bu makalenin detaylı içeriği henüz girilmemiştir.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between bg-card border border-border rounded-lg p-4">
            <div className="flex flex-wrap gap-2">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 hover:bg-accent rounded-lg">
                <Bookmark className="w-5 h-5" />
                Kaydet
              </button>

              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 hover:bg-accent rounded-lg">
                <Share2 className="w-5 h-5" />
                Paylaş
              </button>
            </div>

            <button className="w-full sm:w-auto px-4 py-2 bg-main text-white rounded-lg hover:bg-main/90">
              Düzenle
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     WIKI LIST PAGE
  ==========================*/

  return (
    <div className="pb-20 md:pb-6">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            Uhuvvet Vikipedi
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground">
            Risale-i Nur Külliyatı ve İslami kavramlar hakkında ansiklopedik
            bilgi kaynağı.
          </p>
        </div>
        <div className="space-y-4 mb-8">
          {/* SEARCH */}
          <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ansiklopedide ara..."
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="hidden sm:block mb-4">
            <ScrollArea className="w-full max-w-4xl mx-auto rounded-lg border border-border">
              <div className="flex gap-2 p-2 min-w-max">
                {wikiCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm border whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-main text-white border-main"
                        : "bg-card border-border hover:bg-accent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="h-2" />
            </ScrollArea>
          </div>
        </div>
        {/* ARTICLES */} {/* ARTICLES */}
        <div className="grid grid-cols-1 gap-4">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/wiki/${article.id}`)}
              className="bg-card border border-border rounded-xl
                         p-4 sm:p-6
                         cursor-pointer
                         hover:border-main/50
                         transition-all
                         group
                         w-full overflow-hidden"
            >
              {/* HEADER */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="px-2 py-1 bg-main/10 text-main text-xs font-semibold rounded whitespace-nowrap">
                  {article.category}
                </span>

                <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                  <Eye className="w-3.5 h-3.5" />
                  {article.views}
                </div>
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-base sm:text-lg md:text-xl
                  font-bold
                  mb-2
                  group-hover:text-main
                  transition-colors
                  break-words
                "
              >
                {article.title}
              </h3>

              {/* EXCERPT */}
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 break-words">
                {article.excerpt}
              </p>

              {/* FOOTER */}
              <div
                className="
                  flex flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-3
                  text-xs text-muted-foreground
                  pt-4
                  border-t border-border
                "
              >
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{article.readTime}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 shrink-0" />
                    <span>{article.editors}</span>
                  </div>
                </div>

                <div className="text-main font-medium flex items-center gap-1">
                  Devamını Oku
                  <ArrowLeft className="w-3.5 h-3.5 rotate-180 shrink-0" />
                </div>
              </div>
            </div>
          ))}

          {filteredArticles.length === 0 && (
            <div className="text-center py-10 sm:py-12 bg-card border border-border rounded-lg border-dashed">
              <BookOpen className="w-12 h-12 mx-auto opacity-20 mb-4" />
              <p className="text-muted-foreground">Makale bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
