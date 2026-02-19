import {
  Search,
  ArrowLeft,
  Users,
  Calendar,
  BookOpen,
  MessageSquare,
  Mic,
  Volume2,
} from "lucide-react";
import { CommunityCard } from "../components/CommunityCard";
import { VoiceRoomModal } from "../components/VoiceRoomModal";
import { EventPostCard } from "../components/EventPostCard";
import { AnnouncementPostCard } from "../components/AnnouncementPostCard";
import { LiveClassPostCard } from "../components/LiveClassPostCard";
import { useState } from "react";
import {
  communities,
  communityPosts,
  communityAnnouncements,
  communityEvents,
  communityCourses,
} from "../../lib/mock-data";
import { useNavigate, useParams } from "react-router";

export function CommunityPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSubTab, setActiveSubTab] = useState("general");
  const [selectedVoiceRoom, setSelectedVoiceRoom] = useState<{
    name: string;
    participants: number;
  } | null>(null);

  // Mock voice chat data for "Heyet"
  const voiceRooms = [
    {
      id: 1,
      name: "Haftalık İstişare Odası",
      participants: 12,
      speakers: ["Hüseyin Efendi", "Mustafa Bey"],
      isActive: true,
    },
    {
      id: 2,
      name: "Ders Hazırlık Grubu",
      participants: 8,
      speakers: ["Zübeyir Bey", "Kemal Bey"],
      isActive: true,
    },
  ];

  if (id) {
    const communityId = parseInt(id);
    const community = communities.find((c) => c.id === communityId);

    if (!community)
      return (
        <div className="p-8 text-center">
          <p className="text-muted-foreground">Topluluk bulunamadı.</p>
          <button
            onClick={() => navigate("/community")}
            className="mt-4 text-main font-medium"
          >
            Geri Dön
          </button>
        </div>
      );

    return (
      <div className="pb-20 md:pb-4">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/community")}
            className="flex items-center gap-2 text-foreground hover:text-main transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Topluluklara Dön</span>
          </button>

          {/* Community Header */}
          <div className="bg-card border border-border rounded-lg p-6 mb-4">
            <div className="flex items-start gap-4">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center text-4xl flex-shrink-0"
                style={{ backgroundColor: community.iconColor + "20" }}
              >
                {community.icon}
              </div>
              <div className="flex-1">
                <h1 className="text-foreground text-2xl font-bold mb-2">
                  {community.name}
                </h1>
                <p className="text-muted-foreground mb-3">
                  {community.description}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Users className="w-4 h-4" />
                  <span>{community.members.toLocaleString()} üye</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="bg-card border border-border rounded-lg p-2 mb-4">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              {[
                {
                  id: "general",
                  label: "Genel",
                  icon: <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
                },
                { id: "announcements", label: "Duyuru", icon: "📢" },
                {
                  id: "events",
                  label: "Etkinlik",
                  icon: <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
                },
                {
                  id: "courses",
                  label: "Ders",
                  icon: <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
                },
                {
                  id: "heyet",
                  label: "Heyet",
                  icon: <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center justify-center gap-2 text-xs sm:text-sm ${
                    activeSubTab === tab.id
                      ? "bg-main text-white"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  <span className="flex-shrink-0">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Based on Active Tab */}
          {activeSubTab === "general" && (
            <div className="space-y-3">
              {/* Message Input */}
              <div className="bg-card border border-border rounded-lg p-4">
                <textarea
                  placeholder="Bu toplulukta bir mesaj paylaşın..."
                  className="w-full bg-accent rounded-lg p-3 text-foreground placeholder-muted-foreground outline-none resize-none"
                  rows={3}
                />
                <button className="mt-2 px-4 py-2 bg-main hover:bg-main/90 text-white font-medium rounded-lg transition-colors">
                  Gönder
                </button>
              </div>

              {/* Messages */}
              {communityPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-foreground font-medium">Anonim</p>
                        <span className="text-muted-foreground text-sm">
                          {post.timestamp}
                        </span>
                      </div>
                      <p className="text-foreground mb-3">{post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{post.likes} beğeni</span>
                        <span>{post.comments} yorum</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSubTab === "announcements" && (
            <div className="space-y-3">
              {communityAnnouncements.map((announcement) => (
                <AnnouncementPostCard
                  key={announcement.id}
                  id={announcement.id}
                  title={announcement.title}
                  content={announcement.content}
                  likes={12}
                  comments={3}
                  avatar="📢"
                  avatarColor="#f59e0b"
                  timestamp={announcement.date}
                  onClick={() => navigate(`/announcement/${announcement.id}`)}
                />
              ))}
            </div>
          )}

          {activeSubTab === "events" && (
            <div className="space-y-3">
              {communityEvents.map((event) => (
                <EventPostCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  content="Topluluk üyeleriyle mütalaa etkinliği."
                  date={event.date}
                  time={event.time}
                  participants={event.participants}
                  likes={24}
                  comments={5}
                  avatar="E"
                  avatarColor="#8b5cf6"
                  timestamp="Yakında"
                  onClick={() => navigate(`/event/${event.id}`)}
                />
              ))}
            </div>
          )}

          {activeSubTab === "courses" && (
            <div className="space-y-3">
              {communityCourses.map((course) => (
                <LiveClassPostCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  instructor={course.instructor}
                  content={`${course.duration} sürecek olan eğitim programı.`}
                  students={course.students}
                  startTime="Ders saati"
                  likes={56}
                  comments={18}
                  avatar="C"
                  avatarColor="#3b82f6"
                  timestamp="Ders"
                  onClick={() => navigate(`/liveclass/${course.id}`)}
                />
              ))}
            </div>
          )}

          {activeSubTab === "heyet" && (
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h2 className="text-foreground font-semibold text-lg mb-2">
                  İstişare Başlat
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Yeni bir konu hakkında mütalaa veya karar için heyet üyelerini
                  toplayın.
                </p>
                <textarea
                  placeholder="İstişare konusu veya gündemi yazın..."
                  className="w-full bg-accent rounded-lg p-4 text-foreground placeholder-muted-foreground outline-none resize-none mb-3"
                  rows={3}
                />
                <button className="w-full sm:w-auto px-6 py-2 bg-main hover:bg-main/90 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Mic className="w-4 h-4" />
                  İstişare Başlat
                </button>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-foreground font-semibold text-lg mb-4">
                  Aktif İstişare Odaları
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {voiceRooms.map((room) => (
                    <div
                      key={room.id}
                      className="bg-card border border-border rounded-lg p-5 hover:border-main/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-foreground font-semibold text-base">
                              {room.name}
                            </h3>
                            {room.isActive && (
                              <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-xs rounded-lg flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-lg animate-pulse" />
                                Canlı
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                            <Users className="w-3.5 h-3.5" />
                            <span>{room.participants}</span>
                            <span>•</span>
                            <Mic className="w-3.5 h-3.5" />
                            <span>{room.speakers.length}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground mb-2">
                          Konuşmacılar:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {room.speakers.map((speaker, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-accent rounded-lg text-xs text-foreground flex items-center gap-1"
                            >
                              <Volume2 className="w-3 h-3 text-main" />
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setSelectedVoiceRoom({
                            name: room.name,
                            participants: room.participants,
                          })
                        }
                        className="w-full px-4 py-2 bg-main hover:bg-main/90 text-white font-medium rounded-lg transition-colors text-sm"
                      >
                        Odaya Katıl
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {selectedVoiceRoom && (
          <VoiceRoomModal
            roomName={selectedVoiceRoom.name}
            participants={selectedVoiceRoom.participants}
            onClose={() => setSelectedVoiceRoom(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="pb-20 md:pb-4">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
        <div className="bg-card border border-border rounded-lg p-3 mb-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Hizmet topluluğu ara..."
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-foreground text-lg font-bold mb-4 px-1">
            Tüm Topluluklar
          </h2>
          <div className="space-y-4">
            {communities.map((community) => (
              <div
                key={community.id}
                className="cursor-pointer"
                onClick={() => navigate(`/community/${community.id}`)}
              >
                <CommunityCard {...community} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
