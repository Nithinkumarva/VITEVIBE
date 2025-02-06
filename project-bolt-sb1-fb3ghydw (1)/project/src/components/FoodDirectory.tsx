import React, { useState } from 'react';
import { Utensils, Check } from 'lucide-react';
import type { FoodDirectory as FoodDirectoryType } from '../types';

interface FoodDirectoryProps {
  directories: FoodDirectoryType[];
  onSelectionChange: (category: string, itemName: string, isSelected: boolean) => void;
}

export function FoodDirectory({ directories, onSelectionChange }: FoodDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState(directories[0]?.category);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Utensils className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Food Directory</h2>
      </div>

      <div className="flex gap-6">
        <div className="w-1/4 border-r">
          <nav className="space-y-1">
            {directories.map((dir) => (
              <button
                key={dir.category}
                onClick={() => setActiveCategory(dir.category)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeCategory === dir.category
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {dir.category}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            {directories
              .find((dir) => dir.category === activeCategory)
              ?.items.map((item) => (
                <label
                  key={item.name}
                  className="flex items-start gap-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={item.isSelected}
                    onChange={(e) =>
                      onSelectionChange(activeCategory, item.name, e.target.checked)
                    }
                    className="mt-1"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.name}</span>
                      {item.isRecommended && (
                        <Check className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{item.nutritionalValue}</p>
                  </div>
                </label>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}