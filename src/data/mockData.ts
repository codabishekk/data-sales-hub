// Mock sales data for demonstration
export const mockSalesData = [
  { name: "Jan", sales: 186, revenue: 24500 },
  { name: "Feb", sales: 210, revenue: 28000 },
  { name: "Mar", sales: 245, revenue: 32500 },
  { name: "Apr", sales: 198, revenue: 26800 },
  { name: "May", sales: 278, revenue: 38200 },
  { name: "Jun", sales: 312, revenue: 42800 },
  { name: "Jul", sales: 289, revenue: 39500 },
  { name: "Aug", sales: 324, revenue: 44200 },
  { name: "Sep", sales: 356, revenue: 48900 },
  { name: "Oct", sales: 289, revenue: 39100 },
  { name: "Nov", sales: 267, revenue: 36500 },
  { name: "Dec", sales: 298, revenue: 41200 }
];

export const mockTopProducts = [
  {
    id: "1",
    name: "Premium Laptop Pro",
    category: "Electronics",
    sales: 156,
    revenue: 234000,
    change: 12.5
  },
  {
    id: "2", 
    name: "Wireless Headphones Elite",
    category: "Audio",
    sales: 243,
    revenue: 72900,
    change: 8.3
  },
  {
    id: "3",
    name: "Smart Watch Series X",
    category: "Wearables", 
    sales: 198,
    revenue: 118800,
    change: -2.1
  },
  {
    id: "4",
    name: "Gaming Keyboard RGB",
    category: "Accessories",
    sales: 289,
    revenue: 34680,
    change: 15.7
  },
  {
    id: "5",
    name: "4K Monitor Ultra",
    category: "Displays",
    sales: 134,
    revenue: 80400,
    change: 6.2
  }
];

export const mockTopCustomers = [
  {
    id: "1",
    name: "TechCorp Solutions",
    email: "contact@techcorp.com",
    totalOrders: 45,
    totalSpent: 125600,
    change: 18.5
  },
  {
    id: "2",
    name: "Digital Innovations Ltd",
    email: "orders@digitalinnovations.com", 
    totalOrders: 38,
    totalSpent: 98400,
    change: 12.3
  },
  {
    id: "3",
    name: "StartupHub Inc",
    email: "purchasing@startuphub.com",
    totalOrders: 52,
    totalSpent: 87200,
    change: -5.2
  },
  {
    id: "4",
    name: "Enterprise Systems",
    email: "procurement@enterprise.com",
    totalOrders: 29,
    totalSpent: 156800,
    change: 24.1
  },
  {
    id: "5",
    name: "Global Tech Partners",
    email: "orders@globaltech.com",
    totalOrders: 41,
    totalSpent: 76500,
    change: 9.7
  }
];

export const mockMetrics = {
  totalRevenue: {
    value: 1245600,
    change: 12.5,
    changeLabel: "vs last month"
  },
  totalSales: {
    value: 3245,
    change: 8.3,
    changeLabel: "vs last month"
  },
  averageOrderValue: {
    value: 384,
    change: 4.2,
    changeLabel: "vs last month"
  },
  totalCustomers: {
    value: 1856,
    change: 16.8,
    changeLabel: "vs last month"
  }
};