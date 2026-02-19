import { ChevronRight } from "lucide-react";

interface DepartmentCardProps {
  name: string;
  description: string;
  responsibility: string;
  icon: React.ReactNode;
}

export function DepartmentCard({
  name,
  description,
  responsibility,
  icon,
}: DepartmentCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-3 hover:border-main/50 transition-colors cursor-pointer">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-muted to-accent flex items-center justify-center text-main flex-shrink-0 border border-border">
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-foreground font-medium text-lg mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm mb-2">{description}</p>

          <div className="bg-accent border border-border rounded-lg p-2 mb-3">
            <p className="text-foreground text-xs">
              <span className="text-main font-medium">Sorumluluk:</span>{" "}
              {responsibility}
            </p>
          </div>

          <div className="flex items-center gap-1 text-main hover:text-main/80 text-sm font-medium transition-colors">
            Departmanı Görüntüle
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
