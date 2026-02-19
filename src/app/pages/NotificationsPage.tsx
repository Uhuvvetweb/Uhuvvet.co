import { Bell, Clock, CheckCircle2, MoreHorizontal } from "lucide-react";

export function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Yeni yorum",
      message: "Gönderinize yeni bir yorum yapıldı",
      time: "5 dk önce",
      isRead: false,
      type: "comment",
    },
    {
      id: 2,
      title: "Yeni takipçi",
      message: "Ahmet Yılmaz sizi takip etmeye başladı",
      time: "1 saat önce",
      isRead: false,
      type: "follow",
    },
    {
      id: 3,
      title: "Etkinlik hatırlatma",
      message: "Webinar yarın saat 19:00'da başlayacak",
      time: "2 saat önce",
      isRead: true,
      type: "event",
    },
    {
      id: 4,
      title: "Sistem Mesajı",
      message:
        "Uhuvvet Community'ye hoş geldiniz! Profilinizi tamamlayarak daha fazla kişiye ulaşabilirsiniz.",
      time: "1 gün önce",
      isRead: true,
      type: "system",
    },
    {
      id: 5,
      title: "Beğeni",
      message: "Ayşe Demir gönderinizi beğendi",
      time: "2 gün önce",
      isRead: true,
      type: "like",
    },
  ];

  return (
    <div className="pb-20 md:pb-4">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Bell className="w-6 h-6 text-main" />
            <h1 className="text-2xl font-bold text-foreground">Bildirimler</h1>
          </div>
          <button className="text-sm text-main hover:underline font-medium">
            Tümünü okundu işaretle
          </button>
        </div>

        <div className="space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border transition-colors flex items-start gap-4 ${
                !notification.isRead
                  ? "bg-main/5 border-main/20"
                  : "bg-card border-border hover:bg-accent"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  !notification.isRead ? "bg-main/10" : "bg-accent"
                }`}
              >
                {notification.type === "comment" && (
                  <MessageSquare className="w-5 h-5 text-main" />
                )}
                {notification.type === "follow" && (
                  <UserPlus className="w-5 h-5 text-blue-500" />
                )}
                {notification.type === "event" && (
                  <Calendar className="w-5 h-5 text-orange-500" />
                )}
                {notification.type === "system" && (
                  <Bell className="w-5 h-5 text-teal-500" />
                )}
                {notification.type === "like" && (
                  <Heart className="w-5 h-5 text-red-500" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className={`text-sm font-semibold truncate ${!notification.isRead ? "text-foreground" : "text-foreground/80"}`}
                  >
                    {notification.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {notification.message}
                </p>
              </div>

              {!notification.isRead && (
                <div className="w-2 h-2 bg-main rounded-lg self-center" />
              )}

              <button className="p-1 hover:bg-accent rounded-lg self-center">
                <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper icons for the types (local definitions to avoid missing imports in this block)
function MessageSquare(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function UserPlus(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="16" x2="22" y1="11" y2="11" />
    </svg>
  );
}

function Calendar(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function Heart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
