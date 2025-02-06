import React from 'react';
import { Moon, Utensils, AlertCircle, Wine, Gauge } from 'lucide-react';
import type { DietaryInfo } from '../types';

interface DietaryFormProps {
  onSubmit: (data: DietaryInfo) => void;
  onBack: () => void;
}

export function DietaryForm({ onSubmit, onBack }: DietaryFormProps) {
  const [preferences, setPreferences] = React.useState<string[]>([]);
  const [allergies, setAllergies] = React.useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    onSubmit({
      preferences,
      allergies,
      sleepDuration: Number(formData.get('sleepDuration')),
      addictions: {
        alcohol: formData.get('alcohol') === 'true',
        smoking: formData.get('smoking') === 'true',
      },
      stressLevel: Number(formData.get('stressLevel')),
    });
  };

  const handlePreference = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value && e.key === 'Enter') {
      setPreferences([...preferences, value]);
      e.target.value = '';
    }
  };

  const handleAllergy = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value && e.key === 'Enter') {
      setAllergies([...allergies, value]);
      e.target.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Utensils className="h-4 w-4" />
              Dietary Preferences
            </div>
            <input
              type="text"
              placeholder="Type and press Enter to add"
              onKeyDown={handlePreference}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {preferences.map((pref, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {pref}
                <button
                  type="button"
                  onClick={() => setPreferences(preferences.filter((_, i) => i !== index))}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="h-4 w-4" />
              Food Allergies
            </div>
            <input
              type="text"
              placeholder="Type and press Enter to add"
              onKeyDown={handleAllergy}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {allergies.map((allergy, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm"
              >
                {allergy}
                <button
                  type="button"
                  onClick={() => setAllergies(allergies.filter((_, i) => i !== index))}
                  className="ml-2 text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Moon className="h-4 w-4" />
              Sleep Duration (hours)
            </div>
            <input
              type="number"
              name="sleepDuration"
              min="0"
              max="24"
              step="0.5"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Wine className="h-4 w-4" />
              Addictions
            </div>
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="alcohol" value="true" className="rounded" />
              <span className="text-sm text-gray-700">Alcohol Consumption</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="smoking" value="true" className="rounded" />
              <span className="text-sm text-gray-700">Smoking</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Gauge className="h-4 w-4" />
              Stress Level
            </div>
            <input
              type="range"
              name="stressLevel"
              min="1"
              max="5"
              step="1"
              defaultValue="3"
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Next: Medical History
        </button>
      </div>
    </form>
  );
}