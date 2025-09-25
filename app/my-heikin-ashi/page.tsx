"use client"
import { TrendingUp, BarChart3 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { HeikinAshiChart } from '@/components/HeikinAshiChart';
import { LightweightHeikinAshi } from '@/components/LightweightHeikinAshi';

export default function MyHeikinAshiPage() {
  const [ticker, setTicker] = useState("")
  const [timeframe, setTimeframe] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hasData, setHasData] = useState(false)
  const [chartData, setChartData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [aiSummary, setAiSummary] = useState("");
  const [aiStatus, setAiStatus] = useState("");
  const [dojiData, setDojiData] = useState({ bullish: 0, bearish: 0 });
  const [movementStrength, setMovementStrength] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [fibLevels, setFibLevels] = useState({});
  const [chartType, setChartType] = useState<'lightweight'>('lightweight');
  const [tickerError, setTickerError] = useState("");

  const handleAnalyze = async () => {
    if (!ticker || !timeframe) return
    
    // Clear any previous error messages
    setTickerError("")
    setIsAnalyzing(true)
    
    try {
      console.log("Making API request to:", `${process.env.NEXT_PUBLIC_API_URL}/api/heikin-ashi/`);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/heikin-ashi/`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticker: ticker,
          period: timeframe,
        }),
      });

      console.log("API Response Status:", response.status);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch OHLC data: ${response.status} ${response.statusText}`)
      }
      
      const data = await response.json()
      
      // Check if data returned is empty or indicates invalid ticker
      if (!data.chart || (Array.isArray(data.chart) && data.chart.length === 0)) {
        setTickerError("Invalid ticker symbol. Please try again.")
        setHasData(false)
        return
      }
      
      setChartData(data.chart) // Store the chart data
      
      // Store raw data for lightweight charts
      if (data.rawData) {
        setRawData(data.rawData)
      }
      
      // Store AI summary and other data
      setAiSummary(data.aiSummary)
      setAiStatus(data.aiStatus)
      setDojiData(data.doji)
      setMovementStrength(data.movementStrength)
      setConfidence(data.confidence)
      
      // Store Fibonacci levels if available
      if (data.fibLevels) {
        setFibLevels(data.fibLevels)
      }
      
      setHasData(true)
    } catch (error: any) {
      console.error("Error fetching OHLC data:", error)
      setTickerError(`Error: ${error.message || "Invalid ticker symbol. Please try again."}`)
      setHasData(false)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black">
      <Navbar />

      <div className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/25 via-red-600/30 to-red-900/20 rounded-lg blur-sm animate-aurora"></div>
            <div className="relative bg-gradient-to-r from-red-500/10 via-orange-400/15 via-red-500/20 to-red-900/10 rounded-lg px-6 py-3 border border-red-400/20 animate-aurora-slow">
              <h1 className="text-4xl font-bold text-white">myHeikinAshi</h1>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-8 mb-8">
            <p className="text-gray-300 text-lg mb-6">
              Advanced Heikin-Ashi candlestick analysis tool for smoother trend identification.
            </p>

            <div className="mb-6">
              <Link
                href="/learn/heikin-ashi"
                className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
              >
                What is Heikin Ashi?
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Input
                    placeholder="Enter a ticker (e.g., AAPL for Apple)"
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value.toUpperCase())}
                    className={`bg-black/50 border-white/20 text-white placeholder:text-gray-400 ${tickerError ? 'border-red-500' : ''}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && ticker && timeframe && !isAnalyzing) {
                        handleAnalyze();
                      }
                    }}
                  />
                  {tickerError && (
                    <p className="text-red-500 text-sm mt-1 absolute">{tickerError}</p>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-48">
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="bg-black/50 border-white/20 text-white">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="1d">1 Day</SelectItem>
                    <SelectItem value="5d">5 Days</SelectItem>
                    <SelectItem value="1mo">1 Month</SelectItem>
                    <SelectItem value="3mo">3 Months</SelectItem>
                    <SelectItem value="6mo">6 Months</SelectItem>
                    <SelectItem value="1y">1 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* <div className="w-full sm:w-40 mr-4">
  <div className="text-white px-3 py-2 rounded-md w-full text-center">
    {chartType.toUpperCase()}
  </div>
</div> */}

              <Button
                onClick={handleAnalyze}
                disabled={!ticker || !timeframe || isAnalyzing}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze"}
              </Button>
            </div>
          </div>

          {hasData && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Stock Chart */}
              <Card className="bg-black/30 backdrop-blur-md border-white/10 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Heikin-Ashi Chart with Fibonacci Retracement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!chartData ? (
                    <div className="h-96 bg-black/50 rounded-lg flex items-center justify-center border border-white/10">
                      <p className="text-gray-400">Chart will display here when data is loaded</p>
                    </div>
                  ) : chartType === 'lightweight' ? (
                    <LightweightHeikinAshi data={rawData.length > 0 ? rawData : chartData} fibLevels={fibLevels} />
                  ) : (
                    <HeikinAshiChart data={chartData} />
                  )}
                </CardContent>
              </Card>

              {/* AI Summary */}
              <Card className="bg-black/30 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">AI Analysis Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-black/50 rounded-lg p-4 border border-white/10 overflow-auto">
                    {aiSummary ? (
                      <p className="text-gray-200">{aiSummary}</p>
                    ) : (
                      <p className="text-gray-400 text-center flex items-center justify-center h-full">
                        AI-generated summary will appear here
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Doji Patterns */}
              <Card className="bg-black/30 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Doji Patterns ({timeframe})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-green-400">Bullish Doji</span>
                      <span className="text-white font-mono">{dojiData.bullish || '--'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-400">Bearish Doji</span>
                      <span className="text-white font-mono">{dojiData.bearish || '--'}</span>
                    </div>
                    {/* {aiStatus && (
                      <div className="mt-4 bg-black/30 rounded p-2 border border-white/10">
                        <span className="text-purple-400 text-sm font-semibold">Status: </span>
                        <span className="text-white text-sm">{aiStatus}</span>
                      </div>
                    )} */}
                  </div>
                </CardContent>
              </Card>

              {/* Confidence & Movement Strength */}
              <Card className="bg-black/30 backdrop-blur-md border-white/10 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white">Market Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Confidence Level</span>
                        <span className="text-white font-mono">{confidence}%</span>
                      </div>
                      <Progress value={confidence} className="h-3 bg-black/50" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Movement Strength</span>
                        <span className="text-white font-mono">{movementStrength}%</span>
                      </div>
                      <Progress value={movementStrength} className="h-3 bg-black/50" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
            background-size: 200% 100%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 300% 100%;
          }
          100% {
            background-position: 0% 50%;
            background-size: 200% 100%;
          }
        }
        
        @keyframes aurora-slow {
          0% {
            background-position: 0% 50%;
            background-size: 250% 100%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 350% 100%;
          }
          100% {
            background-position: 0% 50%;
            background-size: 250% 100%;
          }
        }
        
        .animate-aurora {
          animation: aurora 4s ease-in-out infinite;
        }
        
        .animate-aurora-slow {
          animation: aurora-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
