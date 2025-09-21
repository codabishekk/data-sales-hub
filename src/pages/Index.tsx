import { useState } from "react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { TopProductsTable } from "@/components/dashboard/TopProductsTable";
import { DateRangeFilter } from "@/components/dashboard/DateRangeFilter";
import { 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  Users,
  BarChart3,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  mockSalesData, 
  mockTopProducts, 
  mockTopCustomers, 
  mockMetrics 
} from "@/data/mockData";

const Index = () => {
  const [chartType, setChartType] = useState<"line" | "bar">("line");
  const [dateRange, setDateRange] = useState({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date()
  });

  const handleDateRangeChange = (range: any) => {
    setDateRange(range);
    // In a real app, this would trigger data refetch
    console.log("Date range changed:", range);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Sales Analytics</h1>
              <p className="text-muted-foreground mt-1">
                Comprehensive insights into your sales performance
              </p>
            </div>
            <DateRangeFilter 
              onDateRangeChange={handleDateRangeChange}
              defaultRange={dateRange}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value={`$${mockMetrics.totalRevenue.value.toLocaleString()}`}
            change={mockMetrics.totalRevenue.change}
            changeLabel={mockMetrics.totalRevenue.changeLabel}
            icon={<DollarSign className="h-4 w-4" />}
            variant="success"
          />
          <MetricCard
            title="Total Sales"
            value={mockMetrics.totalSales.value.toLocaleString()}
            change={mockMetrics.totalSales.change}
            changeLabel={mockMetrics.totalSales.changeLabel}
            icon={<ShoppingCart className="h-4 w-4" />}
            variant="primary"
          />
          <MetricCard
            title="Average Order Value"
            value={`$${mockMetrics.averageOrderValue.value}`}
            change={mockMetrics.averageOrderValue.change}
            changeLabel={mockMetrics.averageOrderValue.changeLabel}
            icon={<TrendingUp className="h-4 w-4" />}
            variant="warning"
          />
          <MetricCard
            title="Total Customers"
            value={mockMetrics.totalCustomers.value.toLocaleString()}
            change={mockMetrics.totalCustomers.change}
            changeLabel={mockMetrics.totalCustomers.changeLabel}
            icon={<Users className="h-4 w-4" />}
            variant="default"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Sales Trends</h2>
              <div className="flex space-x-2">
                <Button
                  variant={chartType === "line" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setChartType("line")}
                >
                  <LineChart className="h-4 w-4 mr-2" />
                  Line
                </Button>
                <Button
                  variant={chartType === "bar" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setChartType("bar")}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Bar
                </Button>
              </div>
            </div>
            <SalesChart
              data={mockSalesData}
              type={chartType}
              title="Monthly Sales Performance"
              description="Track your sales volume and revenue over time"
            />
          </div>

          <div className="space-y-6">
            <TopProductsTable products={mockTopProducts} />
          </div>
        </div>

        {/* Additional Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopProductsTable 
            products={mockTopCustomers.map(customer => ({
              id: customer.id,
              name: customer.name,
              category: customer.email,
              sales: customer.totalOrders,
              revenue: customer.totalSpent,
              change: customer.change
            }))}
            title="Top Customers"
          />
          
          <div className="space-y-6">
            {/* Placeholder for additional widgets */}
            <div className="h-64 bg-card rounded-lg border border-dashed border-border flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Ready for Real Data?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect your database to see live analytics
                </p>
                <p className="text-xs text-muted-foreground">
                  Currently showing mock data for demonstration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
