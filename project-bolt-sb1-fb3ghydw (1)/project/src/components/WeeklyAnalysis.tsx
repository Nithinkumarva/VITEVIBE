import React from 'react';
import { LineChart, BarChart } from 'lucide-react';
import type { WeeklyAnalysis } from '../types';

interface WeeklyAnalysisProps {
  data: WeeklyAnalysis;
}

export function WeeklyAnalysis({ data }: WeeklyAnalysisProps) {
  const metrics = [
    { label: 'Sleep Quality', value: data.sleepQuality, color: 'bg-blue-500' },
    { label: 'Diet Adherence', value: data.dietAdherence, color: 'bg-green-500' },
    { label: 'Exercise Completion', value: data.exerciseCompletion, color: 'bg-purple-500' },
    { label: 'Stress Levels', value: data.stressLevels, color: 'bg-red-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <LineChart className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Weekly Health Analysis</h2>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{metric.label}</span>
                <span className="text-sm text-gray-600">{metric.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${metric.color} h-2 rounded-full`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {data.symptoms.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Reported Symptoms</h3>
            <div className="flex flex-wrap gap-2">
              {data.symptoms.map((symptom, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {symptom}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}