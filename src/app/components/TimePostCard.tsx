import { Heart, MessageCircle, Repeat2 } from "lucide-react";

interface TimePostCardProps {
  id: number;
  userId: number;
  author: string;
  username: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  hearts?: number;
  timestamp: string;
  avatarColor: string;
  onClick?: () => void;
  onProfileClick?: (userId: number) => void;
}

export function TimePostCard({
  id,
  userId,
  author,
  username,
  avatar,
  content,
  likes,
  comments,
  hearts,
  timestamp,
  avatarColor,
  onClick,
  onProfileClick,
}: TimePostCardProps) {
  // Requirement: All posts should look anonymous
  const displayAuthor = "Anonim";
  const displayUsername = "anonim";

  return (
    <div
      className="bg-card border border-border rounded-lg p-4 mb-3 hover:border-main/50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onProfileClick?.(userId);
          }}
          className="flex-shrink-0"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm hover:opacity-80 transition-opacity"
            style={{ backgroundColor: avatarColor }}
          >
            {avatar}
          </div>
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onProfileClick?.(userId);
                }}
                className="text-foreground font-medium hover:text-main transition-colors"
              >
                {displayAuthor}
              </button>
              <p className="text-muted-foreground text-sm">
                @{displayUsername}
              </p>
            </div>
            <span className="text-muted-foreground text-sm">{timestamp}</span>
          </div>

          <div>
            <p className="text-foreground mb-4 whitespace-pre-wrap">
              {content}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-main hover:text-main/80 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{likes} beğeni</span>
            </button>

            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{comments} yorum</span>
            </button>

            {hearts !== undefined && hearts > 0 && (
              <div className="flex items-center gap-1 text-main">
                <Heart className="w-4 h-4 fill-main" />
                <span className="text-sm">{hearts}</span>
              </div>
            )}

            <button className="ml-auto text-muted-foreground hover:text-foreground transition-colors">
              <Repeat2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
