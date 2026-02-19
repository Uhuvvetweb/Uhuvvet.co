import { Clock, Users, BookOpen, Building2 } from "lucide-react";
import { Link } from "react-router";

interface BottomNavProps {
  activeTab: string;
}

export function BottomNav({ activeTab }: BottomNavProps) {
  const tabs = [
    { id: "time", label: "Zaman", icon: Clock, path: "/time" },
    { id: "community", label: "Topluluk", icon: Users, path: "/community" },
    { id: "wiki", label: "Wiki", icon: BookOpen, path: "/wiki" },
    { id: "idari", label: "İdari", icon: Building2, path: "/idari" },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0
      bg-background/90 backdrop-blur-md
      border-t border-border
      z-50 pb-safe"
    >
      <div className="max-w-2xl mx-auto px-2 py-1">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`flex flex-col items-center
                  gap-0.5 px-2 py-1.5 rounded-md
                  transition-colors ${
                    isActive
                      ? "text-main"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Icon className="w-[18px] h-[18px]" />

                <span className="text-[9px] leading-none">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
