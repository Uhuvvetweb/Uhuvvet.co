import {
  Clock,
  Users,
  BookOpen,
  Building2,
  Settings,
  Bookmark,
  Bell,
} from "lucide-react";
import { useNavigate, Link } from "react-router";

interface LeftSidebarProps {
  activeTab: string;
}

const menuItems = [
  {
    id: "time",
    label: "Zaman Tüneli",
    icon: Clock,
    path: "/time",
  },
  {
    id: "community",
    label: "Topluluklar",
    icon: Users,
    path: "/community",
  },
  {
    id: "wiki",
    label: "Vikipedi",
    icon: BookOpen,
    path: "/wiki",
  },
  {
    id: "idari",
    label: "İdari",
    icon: Building2,
    path: "/idari",
  },
  {
    id: "notifications",
    label: "Bildirimler",
    icon: Bell,
    path: "/notifications",
  },
];

export function LeftSidebar({ activeTab }: LeftSidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="hidden md:block md:w-56 lg:w-68 xl:w-72 sticky top-[48px] h-[calc(100vh-48px)] overflow-y-auto scrollbar-hide">
      <div className="p-3 lg:p-4 space-y-4">
        {/* Navigation Menu */}
        <div className="bg-card border border-border rounded-lg p-3 lg:p-4">
          <h2 className="text-foreground font-semibold mb-4">Navigasyon</h2>
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-main/10 text-main"
                      : "hover:bg-accent text-foreground"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "fill-main" : ""}`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}

            {/* Divider */}
            <div className="my-2 border-t border-border" />

            {/* Additional Menu Items */}
            <Link
              to="/saved"
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                activeTab === "saved"
                  ? "bg-main/10 text-main"
                  : "hover:bg-accent text-foreground"
              }`}
            >
              <Bookmark className="w-5 h-5" />
              <span className="font-medium">Kaydedilenler</span>
            </Link>

            <Link
              to="/settings"
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                activeTab === "settings"
                  ? "bg-main/10 text-main"
                  : "hover:bg-accent text-foreground"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Ayarlar</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
