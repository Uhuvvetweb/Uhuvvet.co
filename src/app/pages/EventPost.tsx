import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";

// Mock data specifically for events
const eventData = {
  id: 1,
  title: "Online Risale Mütalaası",
  content:
    "Bu hafta Kastamonu Lahikası'ndan 'Hücumat-ı Sitte' bahsini birlikte mütalaa edeceğiz. Tüm kardeşlerimizi bekliyoruz. Program sonunda soru-cevap bölümü olacaktır.\n\nZoom üzerinden gerçekleştirilecek programın linki grup üzerinden paylaşılacaktır.",
  date: "20 Şubat 2026",
  time: "20:30",
  location: "Zoom Online",
  participants: 120,
  likes: 45,
  comments: 12,
  avatar: "A",
  avatarColor: "#8b5cf6",
  timestamp: "3 saat önce",
};

export function EventPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, we would fetch event by id
  const event = eventData;

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

        <div className="bg-card border border-border rounded-lg overflow-hidden mb-6">
          <div className="h-48 bg-main/10 flex items-center justify-center border-b border-border">
            <Calendar className="w-20 h-20 text-main opacity-20" />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 rounded text-xs font-bold bg-purple-100 text-purple-600 uppercase">
                Etkinlik
              </span>
              <span className="text-muted-foreground text-sm">
                {event.timestamp}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-foreground mb-4">
              {event.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-accent/50 p-3 rounded-lg flex items-center gap-3">
                <Calendar className="w-5 h-5 text-main" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">
                    Tarih & Saat
                  </p>
                  <p className="text-sm font-medium">
                    {event.date} • {event.time}
                  </p>
                </div>
              </div>
              <div className="bg-accent/50 p-3 rounded-lg flex items-center gap-3">
                <MapPin className="w-5 h-5 text-main" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">
                    Konum
                  </p>
                  <p className="text-sm font-medium">{event.location}</p>
                </div>
              </div>
              <div className="bg-accent/50 p-3 rounded-lg flex items-center gap-3">
                <Users className="w-5 h-5 text-main" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">
                    Katılımcı
                  </p>
                  <p className="text-sm font-medium">
                    {event.participants} Kişi
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-foreground mb-8">
              <p className="whitespace-pre-wrap leading-relaxed">
                {event.content}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-main font-medium">
                  <Heart className="w-5 h-5" />
                  <span>{event.likes}</span>
                </button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="w-5 h-5" />
                  <span>{event.comments}</span>
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

            <button className="w-full mt-6 py-3 bg-main hover:bg-main/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-main/20">
              Etkinliğe Katıl
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
