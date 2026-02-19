import { Bell, ChevronDown, Settings, Bookmark, LogOut } from "lucide-react";

import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router";

interface Props {
  mainWidth: string;
}

export function GlobalHeader({ mainWidth }: Props) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notificationRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: "Yeni yorum",
      message: "Gönderinize yorum yapıldı",
      time: "2 dk önce",
      isRead: false,
    },
    {
      id: 2,
      title: "Yeni takipçi",
      message: "Ahmet sizi takip etti",
      time: "1 saat önce",
      isRead: true,
    },
  ];

  /* OUTSIDE CLICK */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node)
      )
        setShowNotifications(false);

      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target as Node)
      )
        setShowProfileMenu(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md">
      <div className={mainWidth}>
        <div className="border-b border-border">
          <div className="flex items-center h-12 md:h-14 px-3 md:px-4">
            {/* ================= LOGO ================= */}
            <Link to="/" className="flex items-center gap-2">
              <h1 className="text-base md:text-lg font-bold text-main">
                Uhuvvet Community
              </h1>
              <ChevronDown className="w-4 h-4 hidden sm:block" />
            </Link>

            {/* ================= RIGHT ================= */}
            <div className="ml-auto flex items-center gap-2 md:gap-3">
              {/* ========= NOTIFICATIONS ========= */}
              <div ref={notificationRef} className="relative">
                <button
                  onClick={() => setShowNotifications((p) => !p)}
                  className="relative p-2 rounded-lg hover:bg-accent transition"
                >
                  <Bell className="w-5 h-5" />

                  {notifications.some((n) => !n.isRead) && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-main rounded-lg" />
                  )}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-[360px] bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                    {/* HEADER */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                      <span className="font-semibold text-sm">Bildirimler</span>

                      <button className="text-xs text-muted-foreground hover:text-foreground">
                        Tümünü gör
                      </button>
                    </div>

                    {/* LIST */}
                    <div className="max-h-[380px] overflow-y-auto">
                      {notifications.map((n) => (
                        <button
                          key={n.id}
                          className="w-full text-left px-4 py-3 flex gap-3 hover:bg-accent/40 transition"
                        >
                          <div className="w-9 h-9 rounded-lg bg-main/10 flex items-center justify-center text-main text-sm font-semibold">
                            N
                          </div>

                          <div className="flex-1">
                            <p className="text-sm font-medium">{n.title}</p>

                            <p className="text-xs text-muted-foreground">
                              {n.message}
                            </p>

                            <span className="text-[11px] text-muted-foreground">
                              {n.time}
                            </span>
                          </div>

                          {!n.isRead && (
                            <span className="w-2 h-2 mt-2 bg-main rounded-lg" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ========= PROFILE ========= */}
              <div ref={profileMenuRef} className="relative">
                <button
                  onClick={() => setShowProfileMenu((p) => !p)}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-accent transition"
                >
                  <div className="w-9 h-9 rounded-lg bg-main/10 flex items-center justify-center text-sm font-bold text-main">
                    M
                  </div>

                  <span className="hidden sm:block text-sm font-medium">
                    mtulw
                  </span>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 top-full mt-2 w-[280px] bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                    {/* USER CARD */}
                    <div className="p-4 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg bg-main/10 flex items-center justify-center text-main font-semibold">
                          M
                        </div>

                        <div>
                          <p className="text-sm font-semibold">mtulw</p>
                          <p className="text-xs text-muted-foreground">
                            @mtulw
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate("/profile")}
                        className="mt-3 w-full text-sm bg-accent hover:bg-accent/70 transition rounded-lg py-2 font-medium"
                      >
                        Profili Görüntüle
                      </button>
                    </div>

                    {/* MENU */}
                    <div className="p-2 space-y-1">
                      <button
                        onClick={() => navigate("/settings")}
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-accent transition text-sm"
                      >
                        <Settings className="w-4 h-4 opacity-70" />
                        Ayarlar
                      </button>

                      <button
                        onClick={() => navigate("/saved")}
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-accent transition text-sm"
                      >
                        <Bookmark className="w-4 h-4 opacity-70" />
                        Kaydedilenler
                      </button>
                    </div>

                    {/* LOGOUT */}
                    <div className="border-t border-border p-2">
                      <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-destructive/10 text-destructive transition text-sm">
                        <LogOut className="w-4 h-4" />
                        Çıkış Yap
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
