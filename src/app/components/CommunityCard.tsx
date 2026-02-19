import { Users } from "lucide-react";

interface CommunityCardProps {
  name: string;
  description: string;
  members: number;
  icon: string;
  iconColor: string;
}

export function CommunityCard({
  name,
  description,
  members,
  icon,
  iconColor,
}: CommunityCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-3 hover:border-main/50 transition-colors cursor-pointer">
      <div className="flex items-start gap-3">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
          style={{ backgroundColor: iconColor }}
        >
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-foreground font-medium text-lg mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm mb-3">{description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-sm">{members.toLocaleString()} üye</span>
            </div>

            <button className="px-4 py-1.5 bg-main hover:bg-main/90 text-white text-sm font-medium rounded-lg transition-colors">
              Katıl
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
