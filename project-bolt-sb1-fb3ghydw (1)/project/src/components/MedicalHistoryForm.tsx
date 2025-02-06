import React, { useRef } from 'react';
import { FileText, Calendar, Guitar as Hospital, Upload } from 'lucide-react';
import type { MedicalHistory } from '../types';

interface MedicalHistoryFormProps {
  onSubmit: (data: MedicalHistory) => void;
  onBack: () => void;
}

export function MedicalHistoryForm({ onSubmit, onBack }: MedicalHistoryFormProps) {
  const [illnesses, setIllnesses] = React.useState<MedicalHistory['diagnosedIllnesses']>([]);
  const [surgeries, setSurgeries] = React.useState<MedicalHistory['surgeries']>([]);
  const [hospitalizations, setHospitalizations] = React.useState<MedicalHistory['hospitalizations']>([]);
  const [documents, setDocuments] = React.useState<MedicalHistory['documents']>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      diagnosedIllnesses: illnesses,
      surgeries,
      hospitalizations,
      documents,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDocuments([
          ...documents,
          {
            type: 'report',
            name: file.name,
            url: reader.result as string,
            date: new Date().toISOString().split('T')[0],
          },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Past Diagnosed Illnesses */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <FileText className="h-4 w-4" />
              Past Diagnosed Illnesses
            </div>
          </label>
          <div className="space-y-2">
            {illnesses.map((illness, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={illness.condition}
                  onChange={(e) => {
                    const newIllnesses = [...illnesses];
                    newIllnesses[index].condition = e.target.value;
                    setIllnesses(newIllnesses);
                  }}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="date"
                  value={illness.diagnosedDate}
                  onChange={(e) => {
                    const newIllnesses = [...illnesses];
                    newIllnesses[index].diagnosedDate = e.target.value;
                    setIllnesses(newIllnesses);
                  }}
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setIllnesses(illnesses.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setIllnesses([...illnesses, { condition: '', diagnosedDate: '' }])}
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              + Add Illness
            </button>
          </div>
        </div>

        {/* Past Surgeries */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-4 w-4" />
              Past Surgeries
            </div>
          </label>
          <div className="space-y-2">
            {surgeries.map((surgery, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={surgery.procedure}
                  onChange={(e) => {
                    const newSurgeries = [...surgeries];
                    newSurgeries[index].procedure = e.target.value;
                    setSurgeries(newSurgeries);
                  }}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="date"
                  value={surgery.date}
                  onChange={(e) => {
                    const newSurgeries = [...surgeries];
                    newSurgeries[index].date = e.target.value;
                    setSurgeries(newSurgeries);
                  }}
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setSurgeries(surgeries.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setSurgeries([...surgeries, { procedure: '', date: '' }])}
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              + Add Surgery
            </button>
          </div>
        </div>

        {/* Past Hospitalizations */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Hospital className="h-4 w-4" />
              Past Hospitalizations
            </div>
          </label>
          <div className="space-y-2">
            {hospitalizations.map((hospitalization, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={hospitalization.reason}
                  onChange={(e) => {
                    const newHospitalizations = [...hospitalizations];
                    newHospitalizations[index].reason = e.target.value;
                    setHospitalizations(newHospitalizations);
                  }}
                  placeholder="Reason"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="date"
                  value={hospitalization.date}
                  onChange={(e) => {
                    const newHospitalizations = [...hospitalizations];
                    newHospitalizations[index].date = e.target.value;
                    setHospitalizations(newHospitalizations);
                  }}
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={hospitalization.duration}
                  onChange={(e) => {
                    const newHospitalizations = [...hospitalizations];
                    newHospitalizations[index].duration = e.target.value;
                    setHospitalizations(newHospitalizations);
                  }}
                  placeholder="Duration"
                  className="w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setHospitalizations(hospitalizations.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setHospitalizations([...hospitalizations, { reason: '', date: '', duration: '' }])}
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              + Add Hospitalization
            </button>
          </div>
        </div>

        {/* Medical Documents */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Upload className="h-4 w-4" />
              Medical Documents
            </div>
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
          />
          <div className="space-y-2">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <span className="text-sm">{doc.name}</span>
                <button
                  type="button"
                  onClick={() => setDocuments(documents.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-2 px-4 border-2 border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              Upload Document
            </button>
          </div>
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
          Generate Report
        </button>
      </div>
    </form>
  );
}