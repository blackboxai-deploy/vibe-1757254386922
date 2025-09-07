'use client';

import { MetricCard } from '@/components/MetricCard';
import { ChartWidget } from '@/components/ChartWidget';
import { ActivityFeed } from '@/components/ActivityFeed';
import { QuickActions } from '@/components/QuickActions';
import { MobileNavigation } from '@/components/MobileNavigation';
import { dashboardData } from '@/lib/dashboard-data';

export function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Welcome back! Here's what's happening.</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-6 space-y-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardData.metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartWidget
              title="Revenue Trend"
              data={dashboardData.revenueChart}
              type="line"
              height={250}
            />
            <ChartWidget
              title="User Growth"
              data={dashboardData.userGrowthChart}
              type="line"
              height={250}
            />
          </div>

          {/* Category Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <ChartWidget
                title="Sales by Category"
                data={dashboardData.categoryChart}
                type="pie"
                height={300}
              />
            </div>
            
            {/* Activity Feed */}
            <div className="lg:col-span-2">
              <ActivityFeed activities={dashboardData.recentActivity} />
            </div>
          </div>

          {/* Quick Actions */}
          <QuickActions actions={dashboardData.quickActions} />

          {/* Bottom Spacing for Mobile Navigation */}
          <div className="h-4" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </>
  );
}