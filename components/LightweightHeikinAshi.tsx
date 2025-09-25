'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  createChart, 
  ColorType, 
  Time, 
  UTCTimestamp, 
  IChartApi, 
  DeepPartial, 
  CandlestickStyleOptions,
  SeriesOptionsCommon,
  CandlestickSeries
} from 'lightweight-charts';

interface HeikinAshiPoint {
  Date: string;
  HA_Open: number;
  HA_High: number;
  HA_Low: number;
  HA_Close: number;
  // Optional fields for regular candles if available
  Open?: number;
  High?: number;
  Low?: number;
  Close?: number;
}

interface LightweightChartProps {
  data: HeikinAshiPoint[] | any;
  fibLevels?: Record<string, number>;
  width?: number;
  height?: number;
}

export const LightweightHeikinAshi = ({ 
  data, 
  fibLevels, 
  width = 600, 
  height = 400 
}: LightweightChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isMounted || !chartContainerRef.current || !data || !Array.isArray(data) || data.length === 0) {
      return;
    }

    // Initialize chart
    const handleResize = () => {
      if (chartRef.current && chartContainerRef.current) {
        chartRef.current.applyOptions({ 
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight
        });
      }
    };

    const chartOptions = {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: { type: ColorType.Solid, color: 'rgba(0, 0, 0, 0.5)' },
        textColor: '#d1d5db',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      },
      grid: {
        vertLines: { color: 'rgba(197, 203, 206, 0.1)' },
        horzLines: { color: 'rgba(197, 203, 206, 0.1)' },
      },
      timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.4)',
        timeVisible: true,
      },
      rightPriceScale: {
        borderColor: 'rgba(197, 203, 206, 0.4)',
      },
      crosshair: {
        horzLine: {
          color: 'rgba(255, 255, 255, 0.3)',
          labelBackgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
        vertLine: {
          color: 'rgba(255, 255, 255, 0.3)',
          labelBackgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      },
      handleScale: true,
      handleScroll: true,
    };

    chartRef.current = createChart(chartContainerRef.current, chartOptions);

    // Convert data for chart
    const heikinAshiData = data.map((item: HeikinAshiPoint) => {
      // Convert date string to timestamp
      const timestamp = new Date(item.Date).getTime() / 1000;
      
      return {
        time: timestamp as UTCTimestamp,
        open: item.HA_Open,
        high: item.HA_High,
        low: item.HA_Low,
        close: item.HA_Close,
      };
    });

    // Create and add Heikin Ashi series
    const candlestickOptions: DeepPartial<CandlestickStyleOptions & SeriesOptionsCommon> = {
      upColor: '#26a69a', // Green for bullish
      downColor: '#ef5350', // Red for bearish
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    };
    
    // In v5, we need to use the addSeries method with CandlestickSeries type
    const heikinAshiSeries = chartRef.current!.addSeries(CandlestickSeries, candlestickOptions);
    
    heikinAshiSeries.setData(heikinAshiData);

    // Add Fibonacci levels if available
    if (fibLevels) {
      const fibColors = {
        '78.6%': 'rgba(255, 152, 0, 0.6)',
        '61.8%': 'rgba(255, 193, 7, 0.6)',
        '50.0%': 'rgba(156, 39, 176, 0.6)',
        '38.2%': 'rgba(33, 150, 243, 0.6)',
        '23.6%': 'rgba(0, 188, 212, 0.6)',
      };

      // Add horizontal lines for each Fibonacci level
      Object.entries(fibLevels).forEach(([level, price]) => {
        if (level !== 'High' && level !== 'Low') {
          const color = (fibColors as any)[level] || 'rgba(255, 255, 255, 0.5)';
          const lineOptions = {
            price: price,
            color: color,
            lineWidth: 1 as const, // Type safety for v5 API
            lineStyle: 2 as const, // Dashed (2 = LineStyle.Dashed in v5)
            axisLabelVisible: true,
            title: `${level} (${price.toFixed(2)})`,
          };
          heikinAshiSeries.createPriceLine(lineOptions);
        }
      });
    }

    // Fit content
    chartRef.current.timeScale().fitContent();

    // Handle resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [data, fibLevels, isMounted]);

  if (!isMounted) {
    return (
      <div className="h-96 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
        <p className="text-gray-400">Initializing chart...</p>
      </div>
    );
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="h-96 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
        <p className="text-gray-400">Chart will display when data is loaded</p>
      </div>
    );
  }

  return (
    <div className="h-96 bg-black/50 rounded-lg border border-white/10 p-4">
      <div 
        ref={chartContainerRef} 
        className="w-full h-full"
      />
    </div>
  );
};
