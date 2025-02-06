export const mockReport = {
  tumorDetected: true,
  confidence: 95.6,
  location: "Right temporal lobe",
  size: 2.3,
  type: "Meningioma",
  severity: "Medium" as const,
  recommendations: [
    "Regular monitoring required",
    "Consult with a neuro-oncologist",
    "Consider surgical evaluation"
  ]
};

export const mockHospitals = [
  {
    name: "Neuro Care Excellence Center",
    distance: 2.5,
    rating: 4.8,
    specialization: "Neurosurgery",
    address: "123 Medical Plaza, Healthcare District",
    contact: "+1 (555) 123-4567"
  },
  {
    name: "Brain & Spine Institute",
    distance: 4.1,
    rating: 4.9,
    specialization: "Neuro-oncology",
    address: "456 Wellness Avenue, Medical Center",
    contact: "+1 (555) 987-6543"
  },
  {
    name: "Metropolitan Neuroscience Hospital",
    distance: 5.8,
    rating: 4.7,
    specialization: "Comprehensive Neurology",
    address: "789 Health Boulevard, City Center",
    contact: "+1 (555) 456-7890"
  }
];

export const mockLifestyle = {
  sleep: [
    "Maintain a consistent sleep schedule",
    "Aim for 7-9 hours of sleep per night",
    "Create a dark, quiet sleeping environment",
    "Avoid screens 1 hour before bedtime"
  ],
  diet: [
    "Increase antioxidant-rich foods",
    "Reduce processed sugar intake",
    "Stay hydrated with 8 glasses of water daily",
    "Include omega-3 rich foods",
    "Consume more leafy greens"
  ],
  yoga: [
    "Practice gentle neck stretches",
    "Try mindful meditation",
    "Perform breathing exercises",
    "Simple balance poses",
    "Light stretching routines"
  ]
};

export const mockWeeklyAnalysis = {
  week: "March 18-24, 2024",
  sleepQuality: 85,
  dietAdherence: 78,
  exerciseCompletion: 70,
  stressLevels: 45,
  symptoms: ["Mild headache", "Occasional dizziness"]
};

export const mockFoodDirectories = [
  {
    category: "Proteins",
    items: [
      {
        name: "Salmon",
        isRecommended: true,
        nutritionalValue: "Rich in Omega-3, protein, and vitamin D",
        isSelected: false
      },
      {
        name: "Lean Chicken",
        isRecommended: true,
        nutritionalValue: "High protein, low fat",
        isSelected: false
      },
      {
        name: "Eggs",
        isRecommended: true,
        nutritionalValue: "Complete protein, choline for brain health",
        isSelected: false
      }
    ]
  },
  {
    category: "Vegetables",
    items: [
      {
        name: "Spinach",
        isRecommended: true,
        nutritionalValue: "Iron, folate, antioxidants",
        isSelected: false
      },
      {
        name: "Broccoli",
        isRecommended: true,
        nutritionalValue: "Vitamin C, fiber, anti-inflammatory",
        isSelected: false
      },
      {
        name: "Sweet Potatoes",
        isRecommended: true,
        nutritionalValue: "Beta carotene, fiber, vitamins",
        isSelected: false
      }
    ]
  },
  {
    category: "Fruits",
    items: [
      {
        name: "Blueberries",
        isRecommended: true,
        nutritionalValue: "Antioxidants, brain health support",
        isSelected: false
      },
      {
        name: "Avocados",
        isRecommended: true,
        nutritionalValue: "Healthy fats, vitamin E",
        isSelected: false
      }
    ]
  }
];

export const mockReminders = [
  {
    id: "1",
    type: "medication",
    title: "Take morning medication",
    description: "2 tablets with water",
    datetime: "2024-03-20T08:00:00",
    isCompleted: false
  },
  {
    id: "2",
    type: "appointment",
    title: "Follow-up with Dr. Smith",
    description: "Neurology consultation",
    datetime: "2024-03-22T14:30:00",
    isCompleted: false
  },
  {
    id: "3",
    type: "exercise",
    title: "Yoga session",
    description: "30 minutes of gentle yoga",
    datetime: "2024-03-20T17:00:00",
    isCompleted: true
  }
];

export const mockHealthPredictions = [
  {
    date: "2024-03-20",
    metrics: {
      brainHealth: 85,
      physicalHealth: 80,
      mentalHealth: 75,
      overallWellness: 80
    },
    recommendations: [
      "Continue with prescribed medication",
      "Maintain regular sleep schedule",
      "Increase water intake"
    ]
  },
  {
    date: "2024-03-27",
    metrics: {
      brainHealth: 87,
      physicalHealth: 82,
      mentalHealth: 78,
      overallWellness: 82
    },
    recommendations: [
      "Add 15 minutes to daily meditation",
      "Incorporate more omega-3 rich foods",
      "Schedule follow-up scan"
    ]
  },
  {
    date: "2024-04-03",
    metrics: {
      brainHealth: 90,
      physicalHealth: 85,
      mentalHealth: 80,
      overallWellness: 85
    },
    recommendations: [
      "Consider increasing exercise duration",
      "Maintain dietary improvements",
      "Continue stress management practices"
    ]
  }
];