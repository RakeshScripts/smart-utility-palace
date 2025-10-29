import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category: string;
}

const ToolCard = ({ title, description, icon: Icon, href, category }: ToolCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xs font-medium text-muted-foreground px-2 py-1 rounded-full bg-secondary">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={href}>
          <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Use Tool
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
