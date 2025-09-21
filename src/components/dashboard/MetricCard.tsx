import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: React.ReactNode;
  variant?: "default" | "success" | "warning" | "primary";
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeLabel, 
  icon, 
  variant = "default" 
}: MetricCardProps) {
  const isPositive = change > 0;
  
  return (
    <Card className="relative overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className={cn(
        "absolute inset-0 opacity-5",
        variant === "success" && "bg-success",
        variant === "warning" && "bg-warning", 
        variant === "primary" && "bg-primary",
        variant === "default" && "bg-muted"
      )} />
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn(
          "p-2 rounded-md",
          variant === "success" && "bg-success/10 text-success",
          variant === "warning" && "bg-warning/10 text-warning",
          variant === "primary" && "bg-primary/10 text-primary",
          variant === "default" && "bg-muted text-muted-foreground"
        )}>
          {icon}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        <div className="flex items-center text-xs">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-success mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 text-destructive mr-1" />
          )}
          <span className={cn(
            "font-medium",
            isPositive ? "text-success" : "text-destructive"
          )}>
            {Math.abs(change)}%
          </span>
          <span className="text-muted-foreground ml-1">
            {changeLabel}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}