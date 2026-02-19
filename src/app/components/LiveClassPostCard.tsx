import { Video, BookOpen, Users, Heart, MessageCircle } from "lucide-react";

interface LiveClassPostCardProps {
  id: number;
  title: string;
  instructor: string;
  content: string;
  students: number;
  startTime: string;
  likes: number;
  comments: number;
  avatar: string;
  avatarColor: string;
  timestamp: string;
  onClick?: () => void;
}

export function LiveClassPostCard({
  id,
  title,
  instructor,
  content,
  students,
  startTime,
  likes,
  comments,
  avatar,
  avatarColor,
  timestamp,
  onClick,
}: LiveClassPostCardProps) {
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
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-600 mt-1 uppercase">
            Canlı Ders
          </span>
        </div>
      </div>

      <div className="relative rounded-lg overflow-hidden mb-4 aspect-video bg-zinc-900 flex items-center justify-center">
        <Video className="w-12 h-12 text-white/20" />
        <div className="absolute top-3 left-3 px-2 py-1 bg-red-600 text-white text-[10px] font-bold rounded flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-lg bg-white animate-pulse" />
          CANLI
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-bold line-clamp-1">{title}</h3>
          <p className="text-white/70 text-xs">{instructor}</p>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {content}
      </p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Users className="w-3.5 h-3.5" />
          <span>{students} izleyici</span>
        </div>
        <div className="text-xs font-medium text-main">{startTime} başladı</div>
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
