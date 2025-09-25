'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import Plotly dynamically to avoid SSR issues
// Using any type to avoid TypeScript errors with dynamic imports
const Plot: any = dynamic(() => import('react-plotly.js'), { 
  ssr: false,
  loading: () => (
    <div className="h-full flex items-center justify-center">
      <p className="text-gray-400">Loading chart...</p>
    </div>
  )
});

// Define proper types for Plotly data
interface PlotlyDataItem {
  x?: any[];
  y?: any[];
  type?: string;
  mode?: string;
  name?: string;
  [key: string]: any;  // Allow other properties that might be in the data
}

interface PlotlyLayoutProps {
  title?: string;
  xaxis?: any;
  yaxis?: any;
  [key: string]: any;  // Allow other properties
}

interface PlotlyChartData {
  data: PlotlyDataItem[];
  layout: PlotlyLayoutProps;
}

interface PlotlyChartProps {
  chartData: PlotlyChartData;
}

export const PlotlyChart = ({ chartData }: PlotlyChartProps) => {
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

  if (!chartData || !chartData.data) {
    return (
      <div className="h-96 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
        <p className="text-gray-400">No chart data available</p>
      </div>
    );
  }

  // Customize layout for dark theme
  const customLayout = {
    ...chartData.layout,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0.2)',
    font: { color: '#d1d5db' },
    xaxis: {
      ...chartData.layout?.xaxis,
      gridcolor: 'rgba(255,255,255,0.1)'
    },
    yaxis: {
      ...chartData.layout?.yaxis,
      gridcolor: 'rgba(255,255,255,0.1)'
    },
    margin: { l: 50, r: 30, t: 30, b: 40 }
  };

  return (
    <div className="h-96 bg-black/50 rounded-lg border border-white/10 p-4">
      <Plot 
        data={chartData.data} 
        layout={customLayout}
        config={{ responsive: true }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
