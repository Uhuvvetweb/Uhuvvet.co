import { Users, BookOpen, Clock, Eye } from "lucide-react";
import { communities } from "../../lib/mock-data";
import { wikiArticles } from "../../lib/mock-data/wiki";
import { useNavigate } from "react-router";

export function RightSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:block lg:w-68 xl:w-72 sticky top-[48px] h-[calc(100vh-48px)] overflow-y-auto scrollbar-hide">
      <div className="p-3 lg:p-4 space-y-4">
        {/* Communities */}
        <div className="bg-card border border-border rounded-lg p-3 lg:p-4">
          <h2 className="text-foreground font-semibold mb-4">Topluluklar</h2>
          <div className="space-y-3">
            {communities.slice(0, 5).map((community) => (
              <button
                key={community.id}
                onClick={() => navigate(`/community/${community.id}`)}
                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors text-left"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    backgroundColor: community.iconColor + "20",
                  }}
                >
                  {community.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground text-sm font-medium truncate">
                    {community.name}
                  </p>
                  <p className="text-muted-foreground text-xs flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {community.members.toLocaleString()}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate("/community")}
            className="w-full mt-4 py-2 text-main hover:text-main/80 text-sm font-medium transition-colors border-t border-border pt-3"
          >
            Tüm toplulukları gör →
          </button>
        </div>

        {/* Wiki Articles */}
        <div className="bg-card border border-border rounded-lg p-3 lg:p-4">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-main" />
            <h2 className="text-foreground font-semibold">Wiki Makaleleri</h2>
          </div>
          <div className="space-y-3">
            {wikiArticles.slice(0, 5).map((article) => (
              <button
                key={article.id}
                onClick={() => navigate(`/wiki/${article.id}`)}
                className="w-full text-left p-2 rounded-lg hover:bg-accent transition-colors group"
              >
                <p className="text-foreground text-sm font-medium group-hover:text-main transition-colors line-clamp-1">
                  {article.title}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-muted-foreground text-[10px] bg-accent px-1.5 py-0.5 rounded">
                    {article.category}
                  </p>
                  <p className="text-muted-foreground text-[10px] flex items-center gap-1">
                    <Eye className="w-2.5 h-2.5" />
                    {article.views}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate("/wiki")}
            className="w-full mt-4 py-2 text-main hover:text-main/80 text-sm font-medium transition-colors border-t border-border pt-3 text-center"
          >
            Wiki'yi Keşfet →
          </button>
        </div>
      </div>
    </aside>
  );
}
