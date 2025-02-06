export interface Patient {
  name: string;
  age: number;
  height: number; // in cm
  weight: number; // in kg
  location: string;
  gender: 'male' | 'female' | 'other';
  phoneNumber: string;
}

export interface DietaryInfo {
  preferences: string[];
  allergies: string[];
  sleepDuration: number;
  addictions: {
    alcohol: boolean;
    smoking: boolean;
  };
  stressLevel: number; // 1-5
}

export interface MedicalHistory {
  diagnosedIllnesses: {
    condition: string;
    diagnosedDate: string;
  }[];
  surgeries: {
    procedure: string;
    date: string;
  }[];
  hospitalizations: {
    reason: string;
    date: string;
    duration: string;
  }[];
  documents: {
    type: 'report' | 'test' | 'prescription';
    name: string;
    url: string;
    date: string;
  }[];
}

export interface MedicalReport {
  tumorDetected: boolean;
  confidence: number;
  location: string;
  size: number;
  type: string;
  severity: 'Low' | 'Medium' | 'High';
  recommendations: string[];
}

export interface Hospital {
  name: string;
  distance: number;
  rating: number;
  specialization: string;
  address: string;
  contact: string;
}

export interface LifestyleRecommendation {
  sleep: string[];
  diet: string[];
  yoga: string[];
}

export interface WeeklyAnalysis {
  week: string;
  sleepQuality: number;
  dietAdherence: number;
  exerciseCompletion: number;
  stressLevels: number;
  symptoms: string[];
}

export interface FoodDirectory {
  category: string;
  items: {
    name: string;
    isRecommended: boolean;
    nutritionalValue: string;
    isSelected: boolean;
  }[];
}

export interface Reminder {
  id: string;
  type: 'medication' | 'appointment' | 'exercise' | 'diet';
  title: string;
  description: string;
  datetime: string;
  isCompleted: boolean;
}

export interface HealthPrediction {
  date: string;
  metrics: {
    brainHealth: number;
    physicalHealth: number;
    mentalHealth: number;
    overallWellness: number;
  };
  recommendations: string[];
}