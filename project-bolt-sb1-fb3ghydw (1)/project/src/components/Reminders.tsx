import React from 'react';
import { Bell, Calendar, Check } from 'lucide-react';
import type { Reminder } from '../types';

interface RemindersProps {
  reminders: Reminder[];
  onComplete: (id: string) => void;
}

export function Reminders({ reminders, onComplete }: RemindersProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Reminders</h2>
      </div>

      <div className="space-y-4">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className={`flex items-center gap-4 p-4 rounded-lg border ${
              reminder.isCompleted ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <button
              onClick={() => onComplete(reminder.id)}
              className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                reminder.isCompleted
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-gray-300'
              }`}
            >
              {reminder.isCompleted && <Check className="h-4 w-4" />}
            </button>

            <div className="flex-1">
              <h3 className={`font-medium ${reminder.isCompleted ? 'line-through text-gray-500' : ''}`}>
                {reminder.title}
              </h3>
              <p className="text-sm text-gray-600">{reminder.description}</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              {formatDate(reminder.datetime)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}