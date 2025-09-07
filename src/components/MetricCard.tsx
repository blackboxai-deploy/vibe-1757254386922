'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricData } from '@/types/dashboard';

interface MetricCardProps {
  metric: MetricData;
}

export function MetricCard({ metric }: MetricCardProps) {
  const isPositive = metric.changeType === 'increase';
  const isNegative = metric.changeType === 'decrease';
  
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {metric.title}
        </CardTitle>
        <div className={`w-4 h-4 rounded-full ${
          isPositive ? 'bg-green-100' : isNegative ? 'bg-red-100' : 'bg-gray-100'
        }`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">
          {metric.value}
        </div>
        <div className="flex items-center mt-1">
          <span className={`text-xs flex items-center ${
            isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-gray-600'
          }`}>
            <span className={`mr-1 ${
              isPositive ? '↗' : isNegative ? '↘' : '→'
            }`}>
              {isPositive ? '↗' : isNegative ? '↘' : '→'}
            </span>
            {Math.abs(metric.change)}%
          </span>
          <span className="text-xs text-gray-500 ml-1">
            {metric.description}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}