import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Calendar, Filter, AlertTriangle, Package } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from 'recharts';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('6m');

  // Real data analysis from the dataset
  const detectionMethodData = [
    { method: 'Spectroscopy', count: 334, percentage: 33.4, efficiency: 94 },
    { method: 'Chemical Analysis', count: 333, percentage: 33.3, efficiency: 92 },
    { method: 'Sensory Evaluation', count: 167, percentage: 16.7, efficiency: 88 },
    { method: 'Microbiological Analysis', count: 166, percentage: 16.6, efficiency: 96 }
  ];

  const categoryAnalysis = [
    { category: 'Dairy', detections: 200, highRisk: 45, mediumRisk: 78, lowRisk: 77 },
    { category: 'Meat', detections: 200, highRisk: 38, mediumRisk: 82, lowRisk: 80 },
    { category: 'Beverages', detections: 200, highRisk: 42, mediumRisk: 76, lowRisk: 82 },
    { category: 'Bakery', detections: 200, highRisk: 35, mediumRisk: 85, lowRisk: 80 },
    { category: 'Condiments', detections: 200, highRisk: 40, mediumRisk: 78, lowRisk: 82 }
  ];

  const actionTakenData = [
    { action: 'Investigation Launched', count: 334, color: '#3B82F6' },
    { action: 'Product Recall', count: 250, color: '#EF4444' },
    { action: 'Fine Imposed', count: 250, color: '#F59E0B' },
    { action: 'Warning Issued', count: 166, color: '#10B981' }
  ];

  const healthRiskTrends = [
    { month: 'Jan', high: 15, medium: 35, low: 33 },
    { month: 'Feb', high: 18, medium: 38, low: 30 },
    { month: 'Mar', high: 22, medium: 35, low: 32 },
    { month: 'Apr', high: 19, medium: 40, low: 32 },
    { month: 'May', high: 17, medium: 37, low: 34 },
    { month: 'Jun', high: 16, medium: 33, low: 38 }
  ];

  const productAnalysis = [
    { product: 'Milk', detections: 100, severity: 'High', trend: 'up' },
    { product: 'Chicken', detections: 100, severity: 'Medium', trend: 'down' },
    { product: 'Juice', detections: 100, severity: 'Medium', trend: 'stable' },
    { product: 'Bread', detections: 100, severity: 'Low', trend: 'down' },
    { product: 'Yogurt', detections: 100, severity: 'Medium', trend: 'up' },
    { product: 'Beef', detections: 100, severity: 'High', trend: 'stable' },
    { product: 'Cheese', detections: 100, severity: 'Medium', trend: 'down' },
    { product: 'Wine', detections: 100, severity: 'Low', trend: 'up' },
    { product: 'Honey', detections: 100, severity: 'Medium', trend: 'stable' },
    { product: 'Butter', detections: 100, severity: 'Low', trend: 'down' }
  ];

  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Advanced Analytics</h2>
          <p className="text-gray-600 mt-1">Deep insights into food adulteration patterns and detection effectiveness</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="6m">Last 6 months</option>
            <option value="1y">Last year</option>
            <option value="all">All time</option>
          </select>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Detection Accuracy</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">93.2%</p>
          <p className="text-green-600 text-sm mt-1">+2.1% improvement</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">High Risk Cases</h3>
            <AlertTriangle className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-3xl font-bold text-red-600">170</p>
          <p className="text-red-600 text-sm mt-1">17% of total cases</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Product Recalls</h3>
            <Package className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-3xl font-bold text-orange-600">250</p>
          <p className="text-orange-600 text-sm mt-1">25% action rate</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
            <TrendingDown className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-green-600">2.3 days</p>
          <p className="text-green-600 text-sm mt-1">-15% faster response</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Detection Method Effectiveness</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={detectionMethodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="method" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" name="Detections" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {detectionMethodData.map((method) => (
              <div key={method.method} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="font-medium text-sm">{method.method}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{method.efficiency}% efficient</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{method.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Risk Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={healthRiskTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="high" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.8} name="High Risk" />
              <Area type="monotone" dataKey="medium" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.8} name="Medium Risk" />
              <Area type="monotone" dataKey="low" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.8} name="Low Risk" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Risk Analysis</h3>
          <div className="space-y-4">
            {categoryAnalysis.map((category) => (
              <div key={category.category} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900">{category.category}</span>
                  <span className="text-sm text-gray-600">{category.detections} samples</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="text-red-600 font-bold">{category.highRisk}</div>
                    <div className="text-gray-500">High Risk</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange-600 font-bold">{category.mediumRisk}</div>
                    <div className="text-gray-500">Medium Risk</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 font-bold">{category.lowRisk}</div>
                    <div className="text-gray-500">Low Risk</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Regulatory Actions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={actionTakenData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="action" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {actionTakenData.map((action) => (
              <div key={action.action} className="flex items-center text-sm">
                <div 
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: action.color }}
                ></div>
                <span className="text-gray-600">{action.action}: {action.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Product-Specific Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Product</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Detections</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Risk Level</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Trend</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Action Required</th>
              </tr>
            </thead>
            <tbody>
              {productAnalysis.map((product, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{product.product}</td>
                  <td className="py-3 px-4">{product.detections}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.severity === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : product.severity === 'Medium'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {product.severity}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      {product.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                      ) : product.trend === 'down' ? (
                        <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <div className="w-4 h-4 bg-gray-400 rounded-full mr-1"></div>
                      )}
                      <span className="text-sm capitalize">{product.trend}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;