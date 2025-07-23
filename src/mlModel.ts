import { FoodSample, PredictionResult } from '../types';

// Simulated ML model for food adulteration detection
export class AdulterationMLModel {
  // Simulate model weights based on typical food adulteration patterns
  private weights = {
    pH: 0.25,
    starch: 0.20,
    fat: 0.18,
    urea: 0.22,
    color: 0.15
  };

  // Reference ranges for pure food samples
  private pureRanges = {
    pH: { min: 6.0, max: 7.5 },
    starch: { min: 0, max: 15 },
    fat: { min: 0.5, max: 25 },
    urea: { min: 0, max: 5 },
    color: { min: 1, max: 5 }
  };

  predict(sample: Omit<FoodSample, 'id' | 'timestamp'>): PredictionResult {
    const scores = this.calculateAnomalyScores(sample);
    const overallScore = this.calculateOverallScore(scores);
    const confidence = Math.min(Math.abs(overallScore - 0.5) * 2, 0.95);
    
    const prediction: 'Pure' | 'Adulterated' = overallScore > 0.6 ? 'Adulterated' : 'Pure';
    const riskFactors = this.identifyRiskFactors(sample, scores);
    const recommendations = this.generateRecommendations(prediction, riskFactors);
    const qualityScore = prediction === 'Pure' ? 
      Math.round((1 - overallScore) * 100) : 
      Math.round(overallScore * 100);

    return {
      prediction,
      confidence: Math.round(confidence * 100) / 100,
      riskFactors,
      recommendations,
      qualityScore
    };
  }

  private calculateAnomalyScores(sample: Omit<FoodSample, 'id' | 'timestamp'>) {
    const scores: Record<string, number> = {};
    
    // Calculate normalized anomaly scores for each parameter
    Object.keys(this.pureRanges).forEach(key => {
      const value = sample[key as keyof typeof sample] as number;
      const range = this.pureRanges[key as keyof typeof this.pureRanges];
      
      if (value < range.min) {
        scores[key] = (range.min - value) / range.min;
      } else if (value > range.max) {
        scores[key] = (value - range.max) / range.max;
      } else {
        scores[key] = 0;
      }
    });
    
    return scores;
  }

  private calculateOverallScore(scores: Record<string, number>): number {
    let weightedSum = 0;
    Object.keys(scores).forEach(key => {
      weightedSum += scores[key] * this.weights[key as keyof typeof this.weights];
    });
    
    // Apply sigmoid function to normalize between 0 and 1
    return 1 / (1 + Math.exp(-5 * (weightedSum - 0.3)));
  }

  private identifyRiskFactors(sample: Omit<FoodSample, 'id' | 'timestamp'>, scores: Record<string, number>): string[] {
    const factors: string[] = [];
    
    if (scores.pH > 0.2) {
      factors.push(`Abnormal pH level (${sample.pH})`);
    }
    if (scores.starch > 0.2) {
      factors.push(`High starch content (${sample.starch}%)`);
    }
    if (scores.fat > 0.2) {
      factors.push(`Unusual fat content (${sample.fat}%)`);
    }
    if (scores.urea > 0.2) {
      factors.push(`Elevated urea levels (${sample.urea} mg/L)`);
    }
    if (scores.color > 0.2) {
      factors.push(`Color irregularities (${sample.color})`);
    }
    
    return factors;
  }

  private generateRecommendations(prediction: 'Pure' | 'Adulterated', riskFactors: string[]): string[] {
    if (prediction === 'Pure') {
      return [
        'Sample appears to be pure and safe for consumption',
        'Continue monitoring quality during storage',
        'Maintain proper storage conditions'
      ];
    }
    
    const recommendations = [
      'Do not consume this sample - potential adulteration detected',
      'Contact your supplier for quality verification',
      'Consider third-party laboratory testing for confirmation'
    ];
    
    if (riskFactors.some(f => f.includes('pH'))) {
      recommendations.push('Check for chemical additives or preservatives');
    }
    if (riskFactors.some(f => f.includes('starch'))) {
      recommendations.push('Test for starch-based adulterants');
    }
    if (riskFactors.some(f => f.includes('urea'))) {
      recommendations.push('Screen for nitrogen-based contaminants');
    }
    
    return recommendations;
  }
}

export const mlModel = new AdulterationMLModel();