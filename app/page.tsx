"use client"

import { GradientBackground } from "@/components/gradient-background"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <p>Loading chart...</p>,
}) as any

interface HeikinAshiData {
  Date: string
  HA_Open: number
  HA_High: number
  HA_Low: number
  HA_Close: number
}

interface FibonacciLevels {
  [key: string]: number
}

export default function HomePage() {
  const [data, setData] = useState<{ heikin_ashi: HeikinAshiData[]; fibonacci_levels: FibonacciLevels } | null>(null)
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/heikin-ashi/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // Open: [1, 2, 3],
            // High: [2, 3, 4],
            // Low: [0.5, 1.5, 2.5],
            // Close: [1.5, 2.5, 3.5],
            ticker:"AAPL",
            period:"1mo"
          }),
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        console.log("Fetching data from /api/heikin-ashi/", result)
        setData(result)
      } catch (error) {
        console.error("Error fetching data from /api/heikin-ashi/", error)
      }
    }

    // fetchData()
  }, [])

  const handleAnalyze = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/heikin-ashi-with-fib/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Open: [1, 2, 3],
          High: [2, 3, 4],
          Low: [0.5, 1.5, 2.5],
          Close: [1.5, 2.5, 3.5],
        }),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      console.log("Fetching data from /api/heikin-ashi-with-fib/", result)
      setData(result)

      // Prepare chart data
      const ha = result.heikin_ashi
      const fibLevels = result.fibonacci_levels

      const trace1 = {
        x: ha.map((item: HeikinAshiData) => item.Date),
        open: ha.map((item: HeikinAshiData) => item.HA_Open),
        high: ha.map((item: HeikinAshiData) => item.HA_High),
        low: ha.map((item: HeikinAshiData) => item.HA_Low),
        close: ha.map((item: HeikinAshiData) => item.HA_Close),
        type: "candlestick",
        name: "Heikin Ashi",
      }

      const fibTraces = Object.entries(fibLevels).map(([level, price]) => ({
        x: [ha[0].Date, ha[ha.length - 1].Date],
        y: [price, price],
        mode: "lines",
        name: `${level} (${price})`,
        line: { dash: "dash" },
      }))

      setChartData([trace1, ...fibTraces])
    } catch (error) {
      console.error("Error fetching data from /api/heikin-ashi-with-fib/", error)
    }
  }

  return (
    <main className="min-h-screen">
      <GradientBackground />
      <Navbar />
      <Hero />
      <div>
        <h1></h1>
        <button onClick={handleAnalyze}></button>
        {chartData.length > 0 && (
          <Plot
            data={chartData}
            layout={{
              title: "Heikin Ashi with Fibonacci Retracement",
              xaxis: { title: "Date" },
              yaxis: { title: "Price" },
            }}
          />
        )}
      </div>
      <Footer />
    </main>
  )
}

if (typeof window !== "undefined") {
  if (typeof self === "undefined") {
    global.self = window;
  }
}
