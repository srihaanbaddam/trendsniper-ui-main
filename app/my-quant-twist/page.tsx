"use client"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

export default function MyQuantTwistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black">
      <Navbar />

      <div className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/25 via-teal-400/30 to-blue-600/20 rounded-lg blur-sm animate-aurora"></div>
            <div className="relative bg-gradient-to-r from-blue-500/10 via-cyan-300/15 via-teal-300/20 to-blue-600/10 rounded-lg px-6 py-3 border border-blue-400/20 animate-aurora-slow">
              <h1 className="text-4xl font-bold text-white">myQuantTwist</h1>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-4">
                <span className="text-blue-300 font-medium">In Progress</span>
              </div>
            </div>

            <div className="mb-6">
              <Link
                href="/learn/quant-twist"
                className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
              >
                What is QuantTwist?
              </Link>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">Quantitative Analysis Engine</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              myQuantTwist will revolutionize quantitative trading with cutting-edge machine learning algorithms and
              alternative data sources. This comprehensive platform will combine traditional quantitative methods with
              modern AI techniques to uncover hidden market patterns and generate alpha. Features will include factor
              modeling, portfolio optimization, backtesting frameworks, and real-time strategy execution with advanced
              risk controls and performance attribution analysis.
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
