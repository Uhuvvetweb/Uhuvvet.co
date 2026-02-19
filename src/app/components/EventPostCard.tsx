import { Calendar, MapPin, Users, Heart, MessageCircle } from "lucide-react";

interface EventPostCardProps {
  id: number;
  title: string;
  content: string;
  date: string;
  time: string;
  location?: string;
  participants: number;
  likes: number;
  comments: number;
  avatar: string;
  avatarColor: string;
  timestamp: string;
  onClick?: () => void;
}

export function EventPostCard({
  id,
  title,
  content,
  date,
  time,
  location,
  participants,
  likes,
  comments,
  avatar,
  avatarColor,
  timestamp,
  onClick,
}: EventPostCardProps) {
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
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-purple-100 text-purple-600 mt-1">
            ETKİNLİK
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {content}
      </p>

      <div className="bg-accent/50 rounded-lg p-3 mb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-foreground">
          <Calendar className="w-4 h-4 text-main" />
          <span>
            {date} • {time}
          </span>
        </div>
        {location && (
          <div className="flex items-center gap-2 text-sm text-foreground">
            <MapPin className="w-4 h-4 text-main" />
            <span>{location}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-foreground">
          <Users className="w-4 h-4 text-main" />
          <span>{participants} kişi katılıyor</span>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-border">
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
