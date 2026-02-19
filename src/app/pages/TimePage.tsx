import { Send, Users, FileText, X, ChevronDown } from "lucide-react";
import { TimePostCard } from "../components/TimePostCard";
import { EventPostCard } from "../components/EventPostCard";
import { AnnouncementPostCard } from "../components/AnnouncementPostCard";
import { LiveClassPostCard } from "../components/LiveClassPostCard";
import { posts, communities, departments } from "../../lib/mock-data";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

type PostType = "Duyuru" | "Yazı" | "Etkinlik" | "Canlı Ders";

export function TimePage() {
  const navigate = useNavigate();
  const [postContent, setPostContent] = useState("");
  const [selectedTargets, setSelectedTargets] = useState<
    Array<{ id: number; name: string; type: "community" | "department" }>
  >([]);
  const [selectedPostType, setSelectedPostType] = useState<PostType | null>(
    null,
  );
  const [showTargetPopover, setShowTargetPopover] = useState(false);
  const [showTypePopover, setShowTypePopover] = useState(false);

  const targetPopoverRef = useRef<HTMLDivElement>(null);
  const typePopoverRef = useRef<HTMLDivElement>(null);

  const postTypes: PostType[] = ["Duyuru", "Yazı", "Etkinlik", "Canlı Ders"];

  // Close popovers when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        targetPopoverRef.current &&
        !targetPopoverRef.current.contains(event.target as Node)
      ) {
        setShowTargetPopover(false);
      }
      if (
        typePopoverRef.current &&
        !typePopoverRef.current.contains(event.target as Node)
      ) {
        setShowTypePopover(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleTarget = (
    id: number,
    name: string,
    type: "community" | "department",
  ) => {
    const exists = selectedTargets.find((t) => t.id === id && t.type === type);
    if (exists) {
      setSelectedTargets(
        selectedTargets.filter((t) => !(t.id === id && t.type === type)),
      );
    } else {
      setSelectedTargets([...selectedTargets, { id, name, type }]);
    }
  };

  const handleRemoveTarget = (id: number, type: "community" | "department") => {
    setSelectedTargets(
      selectedTargets.filter((t) => !(t.id === id && t.type === type)),
    );
  };

  return (
    <div className="pb-20 md:pb-4">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
        {/* Create Post */}
        <div className="bg-card border border-border rounded-lg p-4 mb-4 shadow-sm">
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Neler düşünüyorsunuz? (Risale-i Nur mütalaalarınız, tefekkürleriniz...)"
            className="w-full bg-transparent text-foreground placeholder-muted-foreground outline-none resize-none mb-3 min-h-[100px]"
            rows={3}
          />

          {/* Badges for selected targets and post type */}
          {(selectedTargets.length > 0 || selectedPostType) && (
            <div className="flex flex-wrap gap-2 mb-3 pb-3 border-b border-border">
              {selectedTargets.map((target) => (
                <span
                  key={`${target.type}-${target.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-main/10 text-main rounded-lg text-sm"
                >
                  {target.type === "community" ? (
                    <Users className="w-3.5 h-3.5" />
                  ) : (
                    <FileText className="w-3.5 h-3.5" />
                  )}
                  {target.name}
                  <button
                    onClick={() => handleRemoveTarget(target.id, target.type)}
                    className="hover:bg-main/20 rounded-lg p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
              {selectedPostType && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-main/10 text-main rounded-lg text-sm">
                  📝 {selectedPostType}
                  <button
                    onClick={() => setSelectedPostType(null)}
                    className="hover:bg-main/20 rounded-lg p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {/* Target Selection Button */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowTargetPopover(!showTargetPopover);
                    setShowTypePopover(false);
                  }}
                  className="px-3 py-2 bg-accent hover:bg-accent/80 text-foreground font-medium rounded-lg transition-colors flex items-center gap-2 text-xs sm:text-sm"
                >
                  <Users className="w-4 h-4" />
                  Paylaşım Yeri
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {showTargetPopover && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg p-3 z-10 max-h-80 overflow-y-auto"
                    ref={targetPopoverRef}
                  >
                    <h3 className="font-semibold text-sm mb-2 text-foreground">
                      Topluluklar
                    </h3>
                    <div className="space-y-1 mb-4">
                      {communities.map((community) => (
                        <label
                          key={community.id}
                          className="flex items-center gap-2 p-2 rounded hover:bg-accent cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTargets.some(
                              (t) =>
                                t.id === community.id && t.type === "community",
                            )}
                            onChange={() =>
                              handleToggleTarget(
                                community.id,
                                community.name,
                                "community",
                              )
                            }
                            className="rounded border-border text-main focus:ring-main"
                          />
                          <span className="text-sm text-foreground">
                            {community.name}
                          </span>
                        </label>
                      ))}
                    </div>

                    <h3 className="font-semibold text-sm mb-2 text-foreground">
                      İdari Birimler
                    </h3>
                    <div className="space-y-1">
                      {departments.map((department) => (
                        <label
                          key={department.id}
                          className="flex items-center gap-2 p-2 rounded hover:bg-accent cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTargets.some(
                              (t) =>
                                t.id === department.id &&
                                t.type === "department",
                            )}
                            onChange={() =>
                              handleToggleTarget(
                                department.id,
                                department.name,
                                "department",
                              )
                            }
                            className="rounded border-border text-main focus:ring-main"
                          />
                          <span className="text-sm text-foreground">
                            {department.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Post Type Selection Button */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowTypePopover(!showTypePopover);
                    setShowTargetPopover(false);
                  }}
                  className="px-3 py-2 bg-accent hover:bg-accent/80 text-foreground font-medium rounded-lg transition-colors flex items-center gap-2 text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Gönderi Türü
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {showTypePopover && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg p-2 z-10"
                    ref={typePopoverRef}
                  >
                    {postTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setSelectedPostType(type);
                          setShowTypePopover(false);
                        }}
                        className="w-full text-left px-3 py-2 rounded hover:bg-accent transition-colors text-sm text-foreground"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Send Button */}
            <button className="w-full sm:w-auto px-6 py-2 bg-main hover:bg-main/90 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shadow-main/20">
              <Send className="w-4 h-4" />
              Gönder
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {/* Mixed content for demonstration */}
          <LiveClassPostCard
            id={1}
            title="Sözler Mütalaası - 1. Söz"
            instructor="Mustafa Hoca"
            content="Besmele'nin tefsiri ve kainattaki yansımaları üzerine derinlemesine bir ders."
            students={1450}
            startTime="15 dakika önce"
            likes={230}
            comments={89}
            avatar="M"
            avatarColor="#3b82f6"
            timestamp="15 dk önce"
            onClick={() => navigate("/liveclass/1")}
          />

          <AnnouncementPostCard
            id={1}
            title="Yeni Eğitim Dönemi Kayıtları Başladı"
            content="Uhuvvet Topluluğu olarak yeni dönem eğitim programlarımızı netleştirdik. Osmanlıca, Risale Mütalaası ve Arapça derslerimize kayıt olmak için web sitemizdeki formu doldurabilirsiniz."
            likes={38}
            comments={7}
            avatar="U"
            avatarColor="#f59e0b"
            timestamp="1 gün önce"
            onClick={() => navigate("/announcement/1")}
          />

          {posts.map((post) => (
            <TimePostCard
              key={post.id}
              {...post}
              onClick={() => navigate(`/time/${post.id}`)}
              onProfileClick={() => navigate("/profile")}
            />
          ))}

          <EventPostCard
            id={1}
            title="Online Risale Mütalaası"
            content="Bu hafta Kastamonu Lahikası'ndan 'Hücumat-ı Sitte' bahsini birlikte mütalaa edeceğiz."
            date="20 Şubat 2026"
            time="20:30"
            location="Zoom Online"
            participants={120}
            likes={45}
            comments={12}
            avatar="A"
            avatarColor="#8b5cf6"
            timestamp="3 saat önce"
            onClick={() => navigate("/event/1")}
          />
        </div>
      </div>
    </div>
  );
}
