
🔍 Project Overview
The Food Adulteration Detection System is a comprehensive data science and machine learning platform designed to identify, analyze, and predict health risks associated with food product adulteration. This system combines state-of-the-art machine learning techniques with a modern web APP to provide real-time analysis and prediction capabilities.
# Adulteration Detector - Food Safety Analytics Platform


A comprehensive web application that leverages machine learning to detect adulteration in food products, providing real-time analytics and insights for food safety professionals.

## 🚀 Features

- **Real-time Food Safety Analytics** - Comprehensive dashboard with detection statistics
- **Advanced Data Visualization** - Interactive charts and graphs using Recharts
- **Adulterant Information Database** - Detailed information about common food adulterants
- **Detection Method Analysis** - Performance metrics for different testing methods
- **Brand Risk Assessment** - Risk scoring and analysis for food brands
- **Live Monitoring System** - Real-time activity feed and system status
- **Responsive Design** - Optimized for desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm
- **Power-BI**:

## 📊 Dataset

Based on a comprehensive food adulteration dataset containing 1,000 samples with analysis of:
- pH levels, starch content, fat content, urea levels, and color indicators
- 5 major adulterants: Melamine, Artificial Sweeteners, Coloring Agents, Chalk, Water
- 4 detection methods: Spectroscopy, Chemical Analysis, Sensory Evaluation, Microbiological Analysis
- Risk severity levels and regulatory actions taken 
- https://www.kaggle.com/datasets/fahmidachowdhury/food-adulteration-dataset/data

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/adulteration-detector.git
cd adulteration-detector
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Analytics/          # Advanced analytics components
│   ├── Dashboard/          # Main dashboard components
│   ├── Info/              # Adulterant information components
│   ├── Layout/            # Layout components (Header, Sidebar)
│   └── Monitor/           # Real-time monitoring components
├── data/                  # Static data and adulterant database
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions and ML model simulation
└── App.tsx               # Main application component
```

## 🎯 Key Components

### Dashboard
- **Statistics Overview**: Total detections, severity distribution, detection rates
- **Trend Analysis**: Monthly detection patterns and risk assessment
- **Brand Analysis**: Risk scoring for different food brands
- **Adulterant Distribution**: Pie charts showing adulterant prevalence

### Analytics
- **Detection Method Effectiveness**: Performance comparison of testing methods
- **Health Risk Trends**: Temporal analysis of health risk levels
- **Category Analysis**: Risk assessment by food category
- **Regulatory Actions**: Analysis of actions taken for violations

### Monitor
- **Real-time Activity Feed**: Live updates on detection activities
- **System Status**: API, model, and database status monitoring
- **Performance Metrics**: Detection accuracy and processing speed
- **Alert Management**: Critical case notifications

## 📈 Data Insights

- **1,000 samples** analyzed across multiple food categories
- **28.9% Melamine** detection rate (highest adulterant)
- **93.2% overall** detection accuracy
- **17% high-risk cases** requiring immediate action
- **4 detection methods** with varying effectiveness rates

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Professional UI/UX** with medical-grade interface design
- **Responsive Layout** optimized for all screen sizes
- **Interactive Elements** with hover effects and micro-interactions
- **Accessibility** compliant with proper contrast ratios
- **Modern Color Palette** with green primary and semantic colors

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
