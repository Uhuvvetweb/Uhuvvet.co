/**
 * Left Sidebar Component
 * Main navigation menu for the application
 */

import {
  Clock,
  Users,
  BookOpen,
  Building2,
  Settings,
  Bookmark,
  Bell,
  LucideIcon,
} from "lucide-react";
import { Link } from "react-router";
import { ROUTES } from "../../constants";

interface LeftSidebarProps {
  activeTab: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

const MAIN_MENU_ITEMS: MenuItem[] = [
  {
    id: "time",
    label: "Zaman Tüneli",
    icon: Clock,
    path: ROUTES.TIME,
  },
  {
    id: "community",
    label: "Topluluklar",
    icon: Users,
    path: ROUTES.COMMUNITY,
  },
  {
    id: "wiki",
    label: "Vikipedi",
    icon: BookOpen,
    path: ROUTES.WIKI,
  },
  {
    id: "idari",
    label: "İdari",
    icon: Building2,
    path: ROUTES.DEPARTMENTS,
  },
  {
    id: "notifications",
    label: "Bildirimler",
    icon: Bell,
    path: ROUTES.NOTIFICATIONS,
  },
];

const SECONDARY_MENU_ITEMS: MenuItem[] = [
  {
    id: "saved",
    label: "Kaydedilenler",
    icon: Bookmark,
    path: ROUTES.SAVED,
  },
  {
    id: "settings",
    label: "Ayarlar",
    icon: Settings,
    path: ROUTES.SETTINGS,
  },
];

export function LeftSidebar({ activeTab }: LeftSidebarProps) {
  const renderMenuItem = (item: MenuItem) => {
    const Icon = item.icon;
    const isActive = activeTab === item.id;

    return (
      <Link
        key={item.id}
        to={item.path}
        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
          isActive ? "bg-main/10 text-main" : "hover:bg-accent text-foreground"
        }`}
      >
        <Icon className={`w-5 h-5 ${isActive ? "fill-main" : ""}`} />
        <span className="font-medium">{item.label}</span>
      </Link>
    );
  };

  return (
    <aside className="hidden md:block md:w-56 lg:w-68 xl:w-72 sticky top-[48px] h-[calc(100vh-48px)] overflow-y-auto scrollbar-hide">
      <div className="p-3 lg:p-4 space-y-4">
        <nav className="bg-card border border-border rounded-lg p-3 lg:p-4">
          <h2 className="text-foreground font-semibold mb-4">Navigasyon</h2>

          <div className="space-y-1">
            {MAIN_MENU_ITEMS.map(renderMenuItem)}

            <div className="my-2 border-t border-border" />

            {SECONDARY_MENU_ITEMS.map(renderMenuItem)}
          </div>
        </nav>
      </div>
    </aside>
  );
}
