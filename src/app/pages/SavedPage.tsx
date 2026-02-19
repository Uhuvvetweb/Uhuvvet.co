import { ArrowLeft, Bookmark } from "lucide-react";
import { TimePostCard } from "../components/TimePostCard";
import { posts } from "../../lib/mock-data";
import { useNavigate } from "react-router";

export function SavedPage() {
  const navigate = useNavigate();
  // Mock saved posts
  const savedPosts = posts.slice(0, 2);

  return (
    <div className="pb-20 md:pb-4">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-foreground hover:text-main transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Geri Dön</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Bookmark className="w-6 h-6 text-main" />
            <h1 className="text-foreground text-2xl font-bold">
              Kaydedilenler
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Daha sonra okumak için kaydettiğiniz içerikler
          </p>
        </div>

        {/* Saved Posts */}
        {savedPosts.length > 0 ? (
          <div className="space-y-3">
            {savedPosts.map((post) => (
              <TimePostCard
                key={post.id}
                {...post}
                onClick={() => navigate(`/time/${post.id}`)}
                onProfileClick={() => navigate("/profile")}
              />
            ))}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-12 text-center shadow-sm">
            <Bookmark className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-20" />
            <h2 className="text-foreground text-lg font-semibold mb-2">
              Henüz kayıtlı gönderi yok
            </h2>
            <p className="text-muted-foreground text-sm">
              İlgilendiğiniz gönderileri kaydederek daha sonra kolayca
              erişebilirsiniz.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
