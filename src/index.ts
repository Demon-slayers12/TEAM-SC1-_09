export interface FoodSample {
  id: string;
  pH: number;
  starch: number;
  fat: number;
  urea: number;
  color: number;
  timestamp: string;
  prediction?: 'Pure' | 'Adulterated';
  confidence?: number;
  sampleName?: string;
}

export interface PredictionResult {
  prediction: 'Pure' | 'Adulterated';
  confidence: number;
  riskFactors: string[];
  recommendations: string[];
  qualityScore: number;
}

export interface AdulterantInfo {
  name: string;
  description: string;
  healthImpacts: string[];
  commonIn: string[];
  detectionMethod: string;
}