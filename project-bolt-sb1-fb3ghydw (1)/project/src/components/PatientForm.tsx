import React from 'react';
import { User, Ruler, Weight, MapPin, Phone } from 'lucide-react';
import type { Patient } from '../types';

interface PatientFormProps {
  onSubmit: (data: Patient) => void;
}

export function PatientForm({ onSubmit }: PatientFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get('name') as string,
      age: Number(formData.get('age')),
      height: Number(formData.get('height')),
      weight: Number(formData.get('weight')),
      location: formData.get('location') as string,
      gender: formData.get('gender') as 'male' | 'female' | 'other',
      phoneNumber: formData.get('phoneNumber') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <User className="h-4 w-4" />
            Full Name
          </div>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <label className="block text-sm font-medium text-gray-700">
          Age
          <input
            type="number"
            name="age"
            required
            min="0"
            max="150"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Gender
          <select
            name="gender"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <Ruler className="h-4 w-4" />
            Height (cm)
          </div>
          <input
            type="number"
            name="height"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <Weight className="h-4 w-4" />
            Weight (kg)
          </div>
          <input
            type="number"
            name="weight"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="h-4 w-4" />
            Location
          </div>
          <input
            type="text"
            name="location"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <Phone className="h-4 w-4" />
            Phone Number
          </div>
          <input
            type="tel"
            name="phoneNumber"
            required
            pattern="[0-9]{10}"
            placeholder="10 digit number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Next: Dietary Information
      </button>
    </form>
  );
}