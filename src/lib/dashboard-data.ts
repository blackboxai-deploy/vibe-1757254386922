import { DashboardData } from '@/types/dashboard';

export const dashboardData: DashboardData = {
  metrics: [
    {
      id: 'revenue',
      title: 'Total Revenue',
      value: '$124,592',
      change: 12.5,
      changeType: 'increase',
      description: 'From last month'
    },
    {
      id: 'users',
      title: 'Active Users',
      value: '8,429',
      change: 8.2,
      changeType: 'increase',
      description: 'Daily active users'
    },
    {
      id: 'orders',
      title: 'Total Orders',
      value: '1,247',
      change: -3.1,
      changeType: 'decrease',
      description: 'This month'
    },
    {
      id: 'conversion',
      title: 'Conversion Rate',
      value: '3.24%',
      change: 0.8,
      changeType: 'increase',
      description: 'From last week'
    }
  ],
  
  revenueChart: [
    { name: 'Jan', value: 85000 },
    { name: 'Feb', value: 92000 },
    { name: 'Mar', value: 78000 },
    { name: 'Apr', value: 108000 },
    { name: 'May', value: 115000 },
    { name: 'Jun', value: 124592 }
  ],
  
  userGrowthChart: [
    { name: 'Mon', value: 7200 },
    { name: 'Tue', value: 7800 },
    { name: 'Wed', value: 8100 },
    { name: 'Thu', value: 8400 },
    { name: 'Fri', value: 8650 },
    { name: 'Sat', value: 8200 },
    { name: 'Sun', value: 8429 }
  ],
  
  categoryChart: [
    { name: 'Electronics', value: 45, category: 'electronics' },
    { name: 'Clothing', value: 30, category: 'clothing' },
    { name: 'Home & Garden', value: 15, category: 'home' },
    { name: 'Sports', value: 10, category: 'sports' }
  ],
  
  recentActivity: [
    {
      id: '1',
      type: 'sale',
      message: 'New order received',
      timestamp: '2 minutes ago',
      amount: 299,
      user: 'John Doe'
    },
    {
      id: '2',
      type: 'user',
      message: 'New user registration',
      timestamp: '5 minutes ago',
      user: 'Sarah Smith'
    },
    {
      id: '3',
      type: 'system',
      message: 'Server backup completed',
      timestamp: '15 minutes ago'
    },
    {
      id: '4',
      type: 'sale',
      message: 'Payment processed',
      timestamp: '22 minutes ago',
      amount: 156,
      user: 'Mike Johnson'
    },
    {
      id: '5',
      type: 'notification',
      message: 'Inventory low alert',
      timestamp: '1 hour ago'
    }
  ],
  
  quickActions: [
    {
      id: 'add-product',
      title: 'Add Product',
      description: 'Add new item to inventory',
      color: 'bg-blue-500',
      action: '/products/add'
    },
    {
      id: 'view-orders',
      title: 'View Orders',
      description: 'Check recent orders',
      color: 'bg-green-500',
      action: '/orders'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'View detailed reports',
      color: 'bg-purple-500',
      action: '/analytics'
    },
    {
      id: 'settings',
      title: 'Settings',
      description: 'Manage preferences',
      color: 'bg-orange-500',
      action: '/settings'
    }
  ]
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const getTimeAgo = (timestamp: string): string => {
  // This is a simplified version - in a real app you'd use a library like date-fns
  return timestamp;
};