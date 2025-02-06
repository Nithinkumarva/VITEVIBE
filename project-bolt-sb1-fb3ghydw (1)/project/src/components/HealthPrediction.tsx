import React from 'react';
import { TrendingUp, Activity } from 'lucide-react';
import type { HealthPrediction } from '../types';

interface HealthPredictionProps {
  predictions: HealthPrediction[];
}

export function HealthPrediction({ predictions }: HealthPredictionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Health Predictions</h2>
      </div>

      <div className="space-y-8">
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200" />
          
          {predictions.map((prediction, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              <div className="absolute -left-6 top-0 h-4 w-4 rounded-full bg-blue-500" />
              
              <div className="pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-blue-500" />
                  <h3 className="font-medium">
                    {new Date(prediction.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                    })}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(prediction.metrics).map(([key, value]) => (
                    <div key={key} className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-lg font-semibold">{value}%</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {prediction.recommendations.map((rec, idx) => (
                    <p key={idx} className="text-sm text-gray-600">
                      • {rec}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}