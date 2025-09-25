"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, BookOpen, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const pages = [
  {
    title: "What is Heikin Ashi?",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Heikin-Ashi is a Japanese candlestick charting technique that creates a smoother visual representation of
          price movements compared to traditional candlesticks.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The name "Heikin-Ashi" literally means "average bar" in Japanese, which perfectly describes what this
          technique does - it averages price data to reduce market noise and make trends easier to identify.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Unlike regular candlesticks that use actual open, high, low, and close prices, Heikin-Ashi candles are
          calculated using modified formulas that smooth out price action.
        </p>
      </div>
    ),
  },
  {
    title: "How Heikin Ashi Works",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">Heikin-Ashi candles are calculated using these formulas:</p>
        <div className="bg-black/50 p-4 rounded-lg border border-white/10">
          <ul className="text-gray-300 space-y-2 font-mono text-sm">
            <li>
              <span className="text-purple-400">Close:</span> (Open + High + Low + Close) ÷ 4
            </li>
            <li>
              <span className="text-purple-400">Open:</span> (Previous Open + Previous Close) ÷ 2
            </li>
            <li>
              <span className="text-purple-400">High:</span> Maximum of (High, Open, Close)
            </li>
            <li>
              <span className="text-purple-400">Low:</span> Minimum of (Low, Open, Close)
            </li>
          </ul>
        </div>
        <p className="text-gray-300 leading-relaxed">
          These calculations create candles that better represent the overall trend direction by smoothing out
          short-term price fluctuations.
        </p>
      </div>
    ),
  },
  {
    title: "Reading Heikin Ashi Candles",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">Heikin-Ashi candles provide clear visual signals:</p>
        <div className="space-y-3">
          <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
            <h4 className="text-green-400 font-semibold mb-2">Strong Uptrend</h4>
            <p className="text-gray-300 text-sm">
              Large green candles with no lower shadows indicate strong buying pressure.
            </p>
          </div>
          <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/20">
            <h4 className="text-red-400 font-semibold mb-2">Strong Downtrend</h4>
            <p className="text-gray-300 text-sm">
              Large red candles with no upper shadows indicate strong selling pressure.
            </p>
          </div>
          <div className="bg-yellow-900/20 p-3 rounded-lg border border-yellow-500/20">
            <h4 className="text-yellow-400 font-semibold mb-2">Trend Weakness</h4>
            <p className="text-gray-300 text-sm">
              Small candles with both upper and lower shadows suggest trend exhaustion.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Trading with Heikin Ashi",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">Heikin-Ashi is particularly useful for:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="text-white font-semibold">Trend Identification</h4>
              <p className="text-gray-300 text-sm">Consecutive candles of the same color indicate strong trends.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="text-white font-semibold">Entry Points</h4>
              <p className="text-gray-300 text-sm">
                Color changes can signal potential trend reversals or continuation patterns.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="text-white font-semibold">Risk Management</h4>
              <p className="text-gray-300 text-sm">Smoother price action helps reduce false signals and whipsaws.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function HeikinAshiLearnPage() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black">
      <div className="pt-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/my-heikin-ashi"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to myHeikinAshi
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-8 h-8 text-red-400" />
              <div className="relative">
                <div className="absolute inset-0 -inset-x-4 -inset-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-orange-500/20 via-red-600/25 to-red-800/30 rounded-lg blur-sm animate-[aurora_4s_ease-in-out_infinite_alternate]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-400/15 via-red-500/20 to-red-700/25 rounded-lg blur-md animate-[aurora_6s_ease-in-out_infinite_alternate-reverse]"></div>
                </div>
                <h1 className="relative text-3xl font-bold text-white">Learn Heikin Ashi</h1>
              </div>
            </div>
            <p className="text-gray-400">
              Page {currentPage + 1} of {pages.length}
            </p>
          </div>

          {/* Book Content */}
          <Card className="bg-black/30 backdrop-blur-md border-white/10 min-h-[500px]">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">{pages[currentPage].title}</h2>
                {pages[currentPage].content}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6">
            <Button
              onClick={prevPage}
              disabled={currentPage === 0}
              variant="outline"
              className="bg-black/50 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPage ? "bg-red-400" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              variant="outline"
              className="bg-black/50 border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes aurora {
          0% { background-position: 0% 50%; background-size: 200% 100%; }
          50% { background-position: 100% 50%; background-size: 250% 120%; }
          100% { background-position: 200% 50%; background-size: 200% 100%; }
        }
      `}</style>
    </div>
  )
}
