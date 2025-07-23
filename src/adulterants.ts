import { AdulterantInfo } from '../types';

export const adulterantDatabase: AdulterantInfo[] = [
  {
    name: "Melamine",
    description: "Industrial chemical illegally added to food products to artificially boost protein content readings",
    healthImpacts: [
      "Kidney stones and kidney failure",
      "Bladder cancer risk",
      "Reproductive system damage",
      "Infant formula contamination leading to severe health issues"
    ],
    commonIn: ["Milk", "Dairy products", "Pet food", "Infant formula"],
    detectionMethod: "Chemical analysis, Spectroscopy, and Microbiological testing"
  },
  {
    name: "Artificial Sweeteners",
    description: "Synthetic sugar substitutes added to mask taste or reduce costs in food production",
    healthImpacts: [
      "Digestive issues and gastrointestinal problems",
      "Headaches and migraines",
      "Potential carcinogenic effects with excessive consumption",
      "Blood sugar regulation disruption"
    ],
    commonIn: ["Beverages", "Processed foods", "Dairy products", "Baked goods"],
    detectionMethod: "Chemical analysis, Spectroscopy, and Sensory evaluation"
  },
  {
    name: "Coloring Agents",
    description: "Artificial dyes and colorants added to enhance visual appeal and mask quality defects",
    healthImpacts: [
      "Allergic reactions and skin irritation",
      "Hyperactivity in children (ADHD symptoms)",
      "Potential carcinogenic effects with long-term exposure",
      "Respiratory problems in sensitive individuals"
    ],
    commonIn: ["Spices", "Beverages", "Processed foods", "Confectionery"],
    detectionMethod: "Spectroscopy, Chemical analysis, and Sensory evaluation"
  },
  {
    name: "Chalk (Calcium Carbonate)",
    description: "Inorganic compound illegally added to increase weight and volume of food products",
    healthImpacts: [
      "Digestive blockages and constipation",
      "Kidney stone formation",
      "Nutritional dilution of food products",
      "Gastrointestinal irritation"
    ],
    commonIn: ["Flour", "Spices", "Dairy products", "Processed foods"],
    detectionMethod: "Chemical analysis, Spectroscopy, and Microbiological testing"
  },
  {
    name: "Water Adulteration",
    description: "Excessive water addition to liquid products to increase volume and reduce costs",
    healthImpacts: [
      "Nutritional dilution and reduced food value",
      "Microbial contamination risk",
      "Electrolyte imbalance in dairy products",
      "Compromised food safety and quality"
    ],
    commonIn: ["Milk", "Beverages", "Liquid food products", "Dairy items"],
    detectionMethod: "Sensory evaluation, Chemical analysis, and Microbiological testing"
  }
];