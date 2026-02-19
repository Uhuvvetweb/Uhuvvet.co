import { ArrowLeft, Heart, MessageCircle } from "lucide-react";
import { posts, comments } from "../../lib/mock-data";
import { useNavigate, useParams } from "react-router";

export function TimePost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const postId = parseInt(id || "0");
  const post = posts.find((p) => p.id === postId);
  const postComments = comments.filter((c) => c.postId === postId);

  if (!post) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Gönderi bulunamadı.</p>
        <button
          onClick={() => navigate("/time")}
          className="mt-4 text-main font-medium"
        >
          Geri Dön
        </button>
      </div>
    );
  }

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

        {/* Post Detail */}
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
              style={{ backgroundColor: post.avatarColor }}
            >
              {post.avatar}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-foreground font-medium text-lg">
                    Anonim
                  </span>
                  <p className="text-muted-foreground text-sm">@anonim</p>
                </div>
                <span className="text-muted-foreground text-sm">
                  {post.timestamp}
                </span>
              </div>

              <p className="text-foreground text-lg leading-relaxed mb-4 whitespace-pre-wrap">
                {post.content}
              </p>

              <div className="flex items-center gap-6 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-main hover:text-main/80 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes} beğeni</span>
                </button>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments} yorum</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-foreground font-semibold text-lg mb-4">
            Yorumlar
          </h2>

          {/* Comment Input */}
          <div className="flex items-start gap-3 mb-6 pb-6 border-b border-border">
            <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              m
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Yorumunuzu yazın..."
                className="w-full bg-accent rounded-lg p-3 text-foreground placeholder-muted-foreground outline-none resize-none"
                rows={3}
              />
              <button className="mt-2 px-4 py-2 bg-main hover:bg-main/90 text-white font-medium rounded-lg transition-colors">
                Yorum Yap
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {postComments.length > 0 ? (
              postComments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: comment.avatarColor }}
                  >
                    {comment.avatar}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-foreground font-medium">Anonim</p>
                      <span className="text-muted-foreground text-xs">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-foreground mb-2">{comment.content}</p>
                    <button className="flex items-center gap-1 text-main hover:text-main/80 transition-colors text-sm">
                      <Heart className="w-3.5 h-3.5" />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-4">
                Henüz yorum yapılmamış.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
