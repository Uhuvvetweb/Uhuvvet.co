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
      <div className="pb-20 md:pb-4">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/wiki")}
            className="flex items-center gap-2 text-foreground hover:text-main transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Vikipedi\'ye Dön</span>
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-main text-sm font-medium mb-3">
              <span>{article.category}</span>
              {article.subcategory && (
                <>
                  <span className="text-muted-foreground">/</span>
                  <span>{article.subcategory}</span>
                </>
              )}
            </div>
            <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm border-y border-border py-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Son güncelleme: {article.lastEdited}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{article.editors} editör</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>{article.views} görüntüleme</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-6">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {content ? (
                <div className="space-y-8">
                  {content.sections.map((section, index) => (
                    <section key={index}>
                      <h2 className="text-foreground text-2xl font-bold mb-4 pb-2 border-b border-border">
                        {section.title}
                      </h2>
                      <p className="text-foreground/90 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </section>
                  ))}

                  {content.references.length > 0 && (
                    <section className="mt-12 pt-8 border-t border-border">
                      <h2 className="text-foreground text-xl font-bold mb-4">
                        Kaynakça
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                        {content.references.map((ref, index) => (
                          <li key={index}>{ref}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-foreground text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="p-4 bg-accent rounded-lg text-center">
                    <p className="text-muted-foreground italic">
                      Bu makalenin detaylı içeriği henüz sisteme girilmemiştir.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Article Actions */}
          <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-lg transition-colors text-foreground">
                <Bookmark className="w-5 h-5" />
                <span>Kaydet</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-accent rounded-lg transition-colors text-foreground">
                <Share2 className="w-5 h-5" />
                <span>Paylaş</span>
              </button>
            </div>
            <button className="px-4 py-2 bg-main text-white font-medium rounded-lg hover:bg-main/90 transition-colors">
              Düzenle
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 md:pb-4">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-foreground text-2xl font-bold mb-2">
            Uhuvvet Vikipedi
          </h1>
          <p className="text-muted-foreground">
            Risale-i Nur Külliyatı ve İslami kavramlar hakkında ansiklopedik
            bilgi kaynağı.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="space-y-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ansiklopedide ara (Örn: Said Nursi, Tevhid, Uhuvvet...)"
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none"
              />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {wikiCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap text-sm border ${
                  selectedCategory === category
                    ? "bg-main border-main text-white"
                    : "bg-card border-border text-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/wiki/${article.id}`)}
              className="bg-card border border-border rounded-lg p-6 hover:border-main/50 transition-colors cursor-pointer group shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="px-2 py-1 bg-main/10 text-main text-xs font-semibold rounded uppercase tracking-wider">
                  {article.category}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{article.views}</span>
                </div>
              </div>
              <h3 className="text-foreground text-xl font-bold mb-2 group-hover:text-main transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime} okuma</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{article.editors} editör</span>
                  </div>
                </div>
                <div className="text-main font-medium group-hover:underline flex items-center gap-1">
                  Devamını Oku <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                </div>
              </div>
            </div>
          ))}

          {filteredArticles.length === 0 && (
            <div className="text-center py-12 bg-card border border-border rounded-lg border-dashed">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
              <p className="text-muted-foreground">
                Aradığınız kriterlere uygun makale bulunamadı.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
