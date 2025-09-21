import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  category: string;
  sales: number;
  revenue: number;
  change: number;
}

interface TopProductsTableProps {
  products: Product[];
  title?: string;
}

export function TopProductsTable({ products, title = "Top Products" }: TopProductsTableProps) {
  const getChangeColor = (change: number) => {
    if (change > 0) return "bg-success/10 text-success border-success/20";
    if (change < 0) return "bg-destructive/10 text-destructive border-destructive/20";
    return "bg-muted text-muted-foreground";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">
                    {product.sales} sold
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ${product.revenue.toLocaleString()}
                  </p>
                </div>
                
                <Badge 
                  variant="outline" 
                  className={cn("text-xs font-medium", getChangeColor(product.change))}
                >
                  {product.change > 0 ? '+' : ''}{product.change}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}