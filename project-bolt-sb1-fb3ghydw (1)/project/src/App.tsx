import React, { useState } from 'react';
import { Scanner } from './components/Scanner';
import { PatientForm } from './components/PatientForm';
import { DietaryForm } from './components/DietaryForm';
import { MedicalHistoryForm } from './components/MedicalHistoryForm';
import { Report } from './components/Report';
import { Brain } from 'lucide-react';
import type { Patient, DietaryInfo, MedicalHistory } from './types';
import { mockReport, mockHospitals, mockLifestyle } from './mockData';
import { WeeklyAnalysis } from './components/WeeklyAnalysis';
import { FoodDirectory } from './components/FoodDirectory';
import { Reminders } from './components/Reminders';
import { HealthPrediction } from './components/HealthPrediction';
import {
  mockWeeklyAnalysis,
  mockFoodDirectories,
  mockReminders,
  mockHealthPredictions
} from './mockData';

function App() {
  const [scan, setScan] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<'patient' | 'dietary' | 'history' | 'report'>('patient');
  const [patientData, setPatientData] = useState<Patient | null>(null);
  const [dietaryData, setDietaryData] = useState<DietaryInfo | null>(null);
  const [medicalHistory, setMedicalHistory] = useState<MedicalHistory | null>(null);
  const [foodPreferences, setFoodPreferences] = useState(mockFoodDirectories);
  const [reminders, setReminders] = useState(mockReminders);

  const handleScanComplete = (imageUrl: string) => {
    setScan(imageUrl);
  };

  const handlePatientSubmit = (data: Patient) => {
    setPatientData(data);
    setCurrentStep('dietary');
  };

  const handleDietarySubmit = (data: DietaryInfo) => {
    setDietaryData(data);
    setCurrentStep('history');
  };

  const handleMedicalHistorySubmit = (data: MedicalHistory) => {
    setMedicalHistory(data);
    setCurrentStep('report');
  };

  const handleFoodSelection = (category: string, itemName: string, isSelected: boolean) => {
    setFoodPreferences(
      foodPreferences.map((dir) =>
        dir.category === category
          ? {
              ...dir,
              items: dir.items.map((item) =>
                item.name === itemName ? { ...item, isSelected } : item
              ),
            }
          : dir
      )
    );
  };

  const handleReminderComplete = (id: string) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, isCompleted: !reminder.isCompleted }
          : reminder
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">Brain Scan Analysis</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {currentStep !== 'report' && (
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Upload Brain Scan</h2>
              <Scanner onScanComplete={handleScanComplete} />
            </section>
          )}

          {scan && (
            <section className="space-y-4">
              {currentStep === 'patient' && (
                <>
                  <h2 className="text-xl font-semibold">Patient Information</h2>
                  <PatientForm onSubmit={handlePatientSubmit} />
                </>
              )}

              {currentStep === 'dietary' && (
                <>
                  <h2 className="text-xl font-semibold">Dietary & Lifestyle Information</h2>
                  <DietaryForm
                    onSubmit={handleDietarySubmit}
                    onBack={() => setCurrentStep('patient')}
                  />
                  <FoodDirectory
                    directories={foodPreferences}
                    onSelectionChange={handleFoodSelection}
                  />
                </>
              )}

              {currentStep === 'history' && (
                <>
                  <h2 className="text-xl font-semibold">Medical History</h2>
                  <MedicalHistoryForm
                    onSubmit={handleMedicalHistorySubmit}
                    onBack={() => setCurrentStep('dietary')}
                  />
                </>
              )}

              {currentStep === 'report' && (
                <section>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Medical Report</h2>
                    <button
                      onClick={() => {
                        setCurrentStep('patient');
                        setScan(null);
                        setPatientData(null);
                        setDietaryData(null);
                        setMedicalHistory(null);
                      }}
                      className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
                    >
                      New Analysis
                    </button>
                  </div>

                  {patientData && (
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                      <h3 className="text-lg font-medium mb-4">Patient Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <p><span className="font-medium">Name:</span> {patientData.name}</p>
                        <p><span className="font-medium">Age:</span> {patientData.age}</p>
                        <p><span className="font-medium">Gender:</span> {patientData.gender}</p>
                        <p><span className="font-medium">Phone:</span> {patientData.phoneNumber}</p>
                        <p><span className="font-medium">Height:</span> {patientData.height}cm</p>
                        <p><span className="font-medium">Weight:</span> {patientData.weight}kg</p>
                        <p><span className="font-medium">Location:</span> {patientData.location}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6">
                    <Report
                      report={mockReport}
                      hospitals={mockHospitals}
                      lifestyle={mockLifestyle}
                    />
                    
                    <WeeklyAnalysis data={mockWeeklyAnalysis} />
                    
                    <Reminders
                      reminders={reminders}
                      onComplete={handleReminderComplete}
                    />
                    
                    <HealthPrediction predictions={mockHealthPredictions} />
                  </div>
                </section>
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;