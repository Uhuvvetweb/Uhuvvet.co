/**
 * Global Header Component
 * Manages site-wide navigation, notifications, and user menu
 */

import {
  Bell,
  ChevronDown,
  X,
  User,
  Settings,
  Bookmark,
  LogOut,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router";
import { ROUTES } from "../../constants";

// This will be replaced with real notifications from API
const mockNotifications = [
  {
    id: 1,
    title: "Yeni yorum",
    message: "Gönderinize yeni bir yorum yapıldı",
    time: "5 dk önce",
    isRead: false,
  },
  {
    id: 2,
    title: "Yeni takipçi",
    message: "Ahmet Yılmaz sizi takip etmeye başladı",
    time: "1 saat önce",
    isRead: false,
  },
  {
    id: 3,
    title: "Etkinlik hatırlatma",
    message: "Webinar yarın saat 19:00'da başlayacak",
    time: "2 saat önce",
    isRead: true,
  },
];

export function GlobalHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    }

    if (showNotifications || showProfileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications, showProfileMenu]);

  const unreadCount = mockNotifications.filter((n) => !n.isRead).length;

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border transition-colors duration-200">
      <div className="flex items-center h-12 px-3">
        <Link to={ROUTES.HOME} className="flex items-center gap-1.5">
          <h1 className="text-base sm:text-lg font-bold text-main whitespace-nowrap">
            Uhuvvet Community
          </h1>
          <ChevronDown className="w-3.5 h-3.5 text-foreground hidden sm:block" />
        </Link>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          {/* Notifications Dropdown */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-1.5 hover:bg-accent rounded-lg transition-colors relative"
              aria-label="Bildirimler"
            >
              <Bell className="w-4.5 h-4.5 text-foreground" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-main rounded-lg" />
              )}
            </button>

            {showNotifications && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
                <div className="p-3 border-b border-border flex items-center justify-between">
                  <h3 className="text-foreground font-semibold text-sm">
                    Bildirimler
                  </h3>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="p-1 hover:bg-accent rounded transition-colors"
                    aria-label="Kapat"
                  >
                    <X className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {mockNotifications.map((notification) => (
                    <button
                      key={notification.id}
                      className={`w-full text-left p-3 hover:bg-accent transition-colors border-b border-border last:border-b-0 ${
                        !notification.isRead ? "bg-main/5" : ""
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="flex-1 min-w-0">
                          <p className="text-foreground font-medium text-sm mb-0.5 truncate">
                            {notification.title}
                          </p>
                          <p className="text-muted-foreground text-xs mb-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-muted-foreground text-[10px]">
                            {notification.time}
                          </p>
                        </div>
                        {!notification.isRead && (
                          <div className="w-1.5 h-1.5 bg-main rounded-lg mt-1.5 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setShowNotifications(false);
                    navigate(ROUTES.NOTIFICATIONS);
                  }}
                  className="w-full p-2.5 text-main hover:bg-accent text-xs font-semibold transition-colors border-t border-border"
                >
                  Tümünü Gör
                </button>
              </div>
            )}
          </div>

          {/* Profile Menu */}
          <div className="relative" ref={profileMenuRef}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-1.5 p-1 rounded-lg hover:bg-accent transition-colors"
              aria-label="Profil menüsü"
            >
              <div className="w-7 h-7 rounded-lg bg-main/10 flex items-center justify-center text-xs font-bold text-main flex-shrink-0">
                M
              </div>
              <span className="text-foreground text-sm hidden sm:inline font-medium">
                mtulw
              </span>
              <ChevronDown
                className={`w-3 h-3 text-muted-foreground hidden sm:block transition-transform ${showProfileMenu ? "rotate-180" : ""}`}
              />
            </button>

            {showProfileMenu && (
              <div className="absolute top-full right-0 mt-2 w-52 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50 p-1.5">
                <div className="px-2.5 py-2 border-b border-border mb-1 sm:hidden">
                  <p className="text-foreground font-semibold text-sm">mtulw</p>
                  <p className="text-muted-foreground text-xs truncate">
                    mtulw@uhuvvet.com
                  </p>
                </div>

                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate(ROUTES.PROFILE);
                  }}
                  className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-accent text-foreground text-sm transition-colors"
                >
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span>Hesap</span>
                </button>

                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate(ROUTES.SETTINGS);
                  }}
                  className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-accent text-foreground text-sm transition-colors"
                >
                  <Settings className="w-4 h-4 text-muted-foreground" />
                  <span>Ayarlar</span>
                </button>

                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate(ROUTES.SAVED);
                  }}
                  className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-accent text-foreground text-sm transition-colors"
                >
                  <Bookmark className="w-4 h-4 text-muted-foreground" />
                  <span>Kaydedilenler</span>
                </button>

                <div className="h-px bg-border my-1" />

                <button
                  className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-destructive/10 text-destructive text-sm transition-colors"
                  onClick={() => {
                    // TODO: Implement logout with useAuth hook
                    console.log("Logout");
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Çıkış Yap</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
