import { Megaphone, Heart, MessageCircle } from "lucide-react";

interface AnnouncementPostCardProps {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: number;
  avatar: string;
  avatarColor: string;
  timestamp: string;
  onClick?: () => void;
}

export function AnnouncementPostCard({
  id,
  title,
  content,
  likes,
  comments,
  avatar,
  avatarColor,
  timestamp,
  onClick,
}: AnnouncementPostCardProps) {
  return (
    <div
      className="bg-card border border-border rounded-lg p-4 mb-3 hover:border-main/50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: avatarColor }}
        >
          {avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-foreground font-medium">Anonim</span>
            <span className="text-muted-foreground text-xs">{timestamp}</span>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-600 mt-1 uppercase">
            Duyuru
          </span>
        </div>
      </div>

      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
          <Megaphone className="w-5 h-5 text-amber-500" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {content}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-3 border-t border-border">
        <div className="flex items-center gap-1.5 text-main">
          <Heart className="w-4 h-4" />
          <span className="text-xs">{likes}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs">{comments}</span>
        </div>
      </div>
    </div>
  );
}
