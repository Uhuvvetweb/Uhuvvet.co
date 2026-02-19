import {
  ArrowLeft,
  Video,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Send,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";

const classData = {
  id: 1,
  title: "Sözler Mütalaası - 1. Söz",
  instructor: "Mustafa Hoca",
  content:
    "Besmele'nin tefsiri ve kainattaki yansımaları üzerine derinlemesine bir ders. 'Bismillah her hayrın başıdır' hakikatinin gündelik hayatımızdaki karşılığını konuşuyoruz.",
  students: 1450,
  startTime: "15 dakika önce",
  likes: 230,
  comments: 89,
  avatar: "M",
  avatarColor: "#3b82f6",
  timestamp: "15 dk önce",
};

export function LiveClassPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const liveClass = classData;

  return (
    <div className="pb-20 md:pb-4">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-foreground hover:text-main transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Geri Dön</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden aspect-video relative group mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <Video className="w-16 h-16 text-white/20" />
                <p className="text-white/40 absolute mt-20">
                  Canlı Yayın Yükleniyor...
                </p>
              </div>

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2 py-1 bg-red-600 text-white text-[10px] font-bold rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-lg bg-white animate-pulse" />
                  CANLI
                </span>
                <span className="px-2 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium rounded flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {liveClass.students}
                </span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {liveClass.title}
              </h1>
              <p className="text-main font-medium mb-4">
                {liveClass.instructor}
              </p>

              <div className="prose prose-sm max-w-none text-muted-foreground mb-6">
                <p>{liveClass.content}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-main font-medium">
                    <Heart className="w-5 h-5" />
                    <span>{liveClass.likes}</span>
                  </button>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MessageCircle className="w-5 h-5" />
                    <span>{liveClass.comments}</span>
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

          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg h-[600px] flex flex-col">
              <div className="p-4 border-b border-border">
                <h3 className="font-bold text-foreground">Canlı Sohbet</h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 flex-shrink-0" />
                  <div className="bg-accent p-2 rounded-lg text-sm">
                    <p className="font-bold text-[10px] mb-0.5">Ahmet Y.</p>
                    <p>Selamun aleykum hayırlı dersler.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500 flex-shrink-0" />
                  <div className="bg-accent p-2 rounded-lg text-sm">
                    <p className="font-bold text-[10px] mb-0.5">Mehmet S.</p>
                    <p>Aleykum selam, harika bir konu.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-border">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Mesaj yazın..."
                    className="w-full bg-accent border-none rounded-lg py-2 pl-4 pr-10 text-sm focus:ring-1 focus:ring-main outline-none"
                  />
                  <button className="absolute right-2 top-1.5 text-main">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
