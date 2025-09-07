export interface MetricData {
  id: string;
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon?: string;
  description?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  date?: string;
  category?: string;
}

export interface ActivityItem {
  id: string;
  type: 'sale' | 'user' | 'system' | 'notification';
  message: string;
  timestamp: string;
  amount?: number;
  user?: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  color: string;
  action: string;
}

export interface DashboardData {
  metrics: MetricData[];
  revenueChart: ChartDataPoint[];
  userGrowthChart: ChartDataPoint[];
  categoryChart: ChartDataPoint[];
  recentActivity: ActivityItem[];
  quickActions: QuickAction[];
}