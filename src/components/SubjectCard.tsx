import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "primary" | "secondary" | "accent";
  onClick: () => void;
}

export const SubjectCard = ({ title, description, icon: Icon, color, onClick }: SubjectCardProps) => {
  const colorClasses = {
    primary: "border-primary/20 hover:border-primary/40 hover:shadow-gentle",
    secondary: "border-secondary/20 hover:border-secondary/40 hover:shadow-warm",
    accent: "border-accent/20 hover:border-accent/40 hover:shadow-card",
  };

  const iconColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <Card 
      className={`transition-all duration-300 hover:scale-105 cursor-pointer ${colorClasses[color]} hover:bg-gradient-subtle`}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className={`w-12 h-12 rounded-lg bg-${color}/10 flex items-center justify-center mb-3 animate-float`}>
          <Icon className={`w-6 h-6 ${iconColors[color]}`} />
        </div>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <Button 
          variant={color === "primary" ? "nova" : color === "secondary" ? "warm" : "default"} 
          size="sm" 
          className="w-full"
        >
          Start Learning
        </Button>
      </CardContent>
    </Card>
  );
};