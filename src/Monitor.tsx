import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle, Clock, Zap, TrendingUp } from 'lucide-react';

const Monitor: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState({
    apiStatus: 'online',
    modelStatus: 'active',
    databaseStatus: 'connected',
    lastUpdate: new Date()
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Real-time monitoring data based on dataset analysis
  const recentActivities = [
    { id: 1, type: 'detection', message: 'High-risk melamine detected in Milk sample from BrandC', time: '2 minutes ago', status: 'critical', severity: 'Severe' },
    { id: 2, type: 'alert', message: 'Artificial sweeteners trend increasing in Beverages category', time: '15 minutes ago', status: 'warning', severity: 'Moderate' },
    { id: 3, type: 'analysis', message: 'Monthly report generated: 87 detections processed', time: '1 hour ago', status: 'info', severity: 'Minor' },
    { id: 4, type: 'system', message: 'Detection model updated with new adulterant patterns', time: '3 hours ago', status: 'success', severity: 'Minor' },
    { id: 5, type: 'detection', message: 'Coloring agents detected in Juice sample - Product recall initiated', time: '5 hours ago', status: 'critical', severity: 'Severe' },
    { id: 6, type: 'alert', message: 'BrandD showing increased adulteration patterns', time: '6 hours ago', status: 'warning', severity: 'Moderate' },
    { id: 7, type: 'analysis', message: 'Spectroscopy method showing 94% detection accuracy', time: '8 hours ago', status: 'success', severity: 'Minor' }
  ];

  const performanceMetrics = [
    { label: 'Detection Accuracy', value: '93.2%', trend: 'up', color: 'green', change: '+2.1%' },
    { label: 'Processing Speed', value: '0.8s', trend: 'down', color: 'blue', change: '-15%' },
    { label: 'System Uptime', value: '99.9%', trend: 'stable', color: 'green', change: '0%' },
    { label: 'False Positive Rate', value: '2.3%', trend: 'down', color: 'red', change: '-0.5%' }
  ];

  const realTimeStats = [
    { label: 'Active Investigations', value: 334, color: 'blue', icon: Activity },
    { label: 'Product Recalls', value: 250, color: 'red', icon: AlertTriangle },
    { label: 'Samples Processed', value: 1000, color: 'green', icon: CheckCircle },
    { label: 'High Risk Cases', value: 170, color: 'orange', icon: TrendingUp }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
      case 'active':
      case 'connected':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-orange-600 bg-orange-100';
      case 'error':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type: string, status: string) => {
    if (type === 'detection') {
      return status === 'critical' ? AlertTriangle : CheckCircle;
    }
    if (type === 'alert') {
      return AlertTriangle;
    }
    return Activity;
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Severe':
        return 'text-red-600 bg-red-100';
      case 'Moderate':
        return 'text-orange-600 bg-orange-100';
      case 'Minor':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Real-Time System Monitor</h2>
        <p className="text-gray-600 mt-1">Live monitoring of food safety detection system performance and activities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {realTimeStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{stat.label}</h3>
                <Icon className={`w-5 h-5 ${
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'red' ? 'text-red-600' : 'text-orange-600'
                }`} />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center mt-2">
                <div className={`w-3 h-3 rounded-full animate-pulse mr-2 ${
                  stat.color === 'green' ? 'bg-green-500' :
                  stat.color === 'blue' ? 'bg-blue-500' :
                  stat.color === 'red' ? 'bg-red-500' : 'bg-orange-500'
                }`}></div>
                <span className="text-sm text-gray-600">Live data</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">API Status</h3>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(systemStatus.apiStatus)}`}>
              {systemStatus.apiStatus}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm text-gray-600">All endpoints responding</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Detection Model</h3>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(systemStatus.modelStatus)}`}>
              {systemStatus.modelStatus}
            </div>
          </div>
          <div className="flex items-center">
            <Zap className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm text-gray-600">Processing samples</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Database</h3>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(systemStatus.databaseStatus)}`}>
              {systemStatus.databaseStatus}
            </div>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm text-gray-600">1,000 records active</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Current Time</h3>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-lg font-mono text-gray-900">
            {currentTime.toLocaleTimeString()}
          </div>
          <div className="text-sm text-gray-600">
            {currentTime.toLocaleDateString()}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{metric.label}</span>
                <div className="flex items-center">
                  <span className={`font-bold mr-2 ${
                    metric.color === 'green' ? 'text-green-600' :
                    metric.color === 'blue' ? 'text-blue-600' :
                    metric.color === 'red' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {metric.value}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    metric.trend === 'up' ? 'bg-green-100 text-green-800' :
                    metric.trend === 'down' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity Feed</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {recentActivities.map((activity) => {
              const Icon = getActivityIcon(activity.type, activity.status);
              return (
                <div key={activity.id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <Icon className={`w-5 h-5 mr-3 mt-0.5 ${
                    activity.status === 'critical' ? 'text-red-600' :
                    activity.status === 'warning' ? 'text-orange-600' :
                    activity.status === 'success' ? 'text-green-600' : 'text-blue-600'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 font-medium">{activity.message}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">{activity.time}</p>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getSeverityColor(activity.severity)}`}>
                        {activity.severity}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;