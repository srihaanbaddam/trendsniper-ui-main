'use client';

import { useEffect, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { PlotlyChart } from '@/components/PlotlyChart';

// Define the data structure for Heikin Ashi data points
interface HeikinAshiPoint {
  Date: string;
  HA_Open: number;
  HA_High: number;
  HA_Low: number;
  HA_Close: number;
}

// Define interface for chart props
interface ChartProps {
  data: any;
}

export const HeikinAshiChart = ({ data }: ChartProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-96 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
        <p className="text-gray-400">Initializing chart...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-96 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
        <p className="text-gray-400">Chart will display here when data is loaded</p>
      </div>
    );
  }

  // Check if we have a Plotly chart (data.data would exist for Plotly)
  if (data.data) {
    return <PlotlyChart chartData={data} />;
  } 
  
  // Fallback to recharts if we don't have Plotly data
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="h-96 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
        <p className="text-gray-400">No chart data available</p>
      </div>
    );
  }
  
  // Process data for recharts visualization as fallback
  const chartData = data.map(item => ({
    date: item.Date,
    open: item.HA_Open,
    high: item.HA_High,
    low: item.HA_Low,
    close: item.HA_Close,
    range: item.HA_High - item.HA_Low,
    bullishBody: item.HA_Close >= item.HA_Open ? Math.abs(item.HA_Close - item.HA_Open) : 0,
    bearishBody: item.HA_Close < item.HA_Open ? Math.abs(item.HA_Close - item.HA_Open) : 0
  }));

  return (
    <div className="h-96 bg-black/50 rounded-lg border border-white/10 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(197, 203, 206, 0.1)" />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#d1d5db' }}
            axisLine={{ stroke: '#d1d5db' }}
          />
          <YAxis 
            tick={{ fill: '#d1d5db' }}
            axisLine={{ stroke: '#d1d5db' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#d1d5db'
            }}
          />
          <Legend />
          <Bar 
            dataKey="range" 
            name="Price Range" 
            fill="#8884d8" 
          />
          <Bar 
            dataKey="bullishBody" 
            name="Bullish"
            fill="#26a69a"
            stackId="a"
          />
          <Bar 
            dataKey="bearishBody" 
            name="Bearish"
            fill="#ef5350"
            stackId="a"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
