import React from 'react';
import type { MedicalReport, Hospital, LifestyleRecommendation } from '../types';
import { Brain, Guitar as HospitalIcon, Moon, Salad, Cog as Yoga } from 'lucide-react';

interface ReportProps {
  report: MedicalReport;
  hospitals: Hospital[];
  lifestyle: LifestyleRecommendation;
}

export function Report({ report, hospitals, lifestyle }: ReportProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-6 w-6 text-blue-500" />
          <h2 className="text-xl font-semibold">Scan Analysis Results</h2>
        </div>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Tumor Detection:</span>{' '}
            <span className={report.tumorDetected ? 'text-red-500' : 'text-green-500'}>
              {report.tumorDetected ? 'Detected' : 'Not Detected'}
            </span>
          </p>
          {report.tumorDetected && (
            <>
              <p><span className="font-medium">Confidence:</span> {report.confidence}%</p>
              <p><span className="font-medium">Location:</span> {report.location}</p>
              <p><span className="font-medium">Size:</span> {report.size}mm</p>
              <p><span className="font-medium">Type:</span> {report.type}</p>
              <p><span className="font-medium">Severity:</span> {report.severity}</p>
            </>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <HospitalIcon className="h-6 w-6 text-blue-500" />
          <h2 className="text-xl font-semibold">Recommended Hospitals</h2>
        </div>
        <div className="space-y-4">
          {hospitals.map((hospital, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <h3 className="font-medium">{hospital.name}</h3>
              <p className="text-sm text-gray-600">{hospital.address}</p>
              <p className="text-sm">
                <span className="font-medium">Distance:</span> {hospital.distance}km
                <span className="mx-2">•</span>
                <span className="font-medium">Rating:</span> {hospital.rating}/5
              </p>
              <p className="text-sm">
                <span className="font-medium">Contact:</span> {hospital.contact}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Moon className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Sleep Recommendations</h2>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {lifestyle.sleep.map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Salad className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Diet Recommendations</h2>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {lifestyle.diet.map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Yoga className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Yoga Recommendations</h2>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {lifestyle.yoga.map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}