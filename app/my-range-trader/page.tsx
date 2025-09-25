"use client"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

export default function MyRangeTraderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black">
      <Navbar />

      <div className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-400/25 via-lime-400/30 to-green-600/20 rounded-lg blur-sm animate-aurora"></div>
            <div className="relative bg-gradient-to-r from-green-500/10 via-emerald-300/15 via-lime-300/20 to-green-600/10 rounded-lg px-6 py-3 border border-green-400/20 animate-aurora-slow">
              <h1 className="text-4xl font-bold text-white">myRangeTrader</h1>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-4">
                <span className="text-green-300 font-medium">In Progress</span>
              </div>
            </div>

            <div className="mb-6">
              <Link
                href="/learn/range-trading"
                className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
              >
                What is Range Trading?
              </Link>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">Range-Bound Trading System</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              myRangeTrader will specialize in identifying and capitalizing on range-bound market conditions where
              assets trade within defined support and resistance levels. This intelligent system will use technical
              analysis, volume profiling, and market microstructure data to detect optimal entry and exit points within
              trading ranges. Advanced algorithms will monitor breakout probabilities and automatically adjust
              strategies based on volatility regimes and market sentiment indicators.
            </p>
          </div>
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
