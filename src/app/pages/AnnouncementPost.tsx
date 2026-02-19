import {
  ArrowLeft,
  Megaphone,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";

const announcementData = {
  id: 1,
  title: "Yeni Eğitim Dönemi Kayıtları Başladı",
  content:
    "Uhuvvet Topluluğu olarak yeni dönem eğitim programlarımızı netleştirdik. Osmanlıca, Risale Mütalaası ve Arapça derslerimize kayıt olmak için web sitemizdeki formu doldurabilirsiniz. Son başvuru tarihi 25 Şubat.\n\nDerslerimiz hem online hem de yüz yüze olarak planlanmıştır. Detaylı bilgi için İdari Birimler ile iletişime geçebilirsiniz.",
  likes: 38,
  comments: 7,
  avatar: "U",
  avatarColor: "#f59e0b",
  timestamp: "1 gün önce",
};

export function AnnouncementPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const announcement = announcementData;

  return (
    <div className="pb-20 md:pb-4">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-foreground hover:text-main transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Geri Dön</span>
        </button>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-600 uppercase">
                Duyuru
              </span>
              <p className="text-muted-foreground text-xs mt-0.5">
                {announcement.timestamp}
              </p>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-4">
            {announcement.title}
          </h1>

          <div className="prose prose-sm max-w-none text-foreground mb-8 text-lg leading-relaxed">
            <p className="whitespace-pre-wrap">{announcement.content}</p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-border">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-main font-medium">
                <Heart className="w-5 h-5" />
                <span>{announcement.likes}</span>
              </button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-5 h-5" />
                <span>{announcement.comments}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <Bookmark className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
