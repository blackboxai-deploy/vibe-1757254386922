'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QuickAction } from '@/types/dashboard';

interface QuickActionsProps {
  actions: QuickAction[];
}

export function QuickActions({ actions }: QuickActionsProps) {
  const handleActionClick = (action: string) => {
    // In a real app, this would navigate or perform the action
    console.log(`Navigating to: ${action}`);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <Button
              key={action.id}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-gray-50 transition-colors"
              onClick={() => handleActionClick(action.action)}
            >
              <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center`}>
                <div className="w-6 h-6 bg-white rounded-lg opacity-80" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">
                  {action.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {action.description}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}