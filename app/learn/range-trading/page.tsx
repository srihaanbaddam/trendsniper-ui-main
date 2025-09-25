"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, BookOpen, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const pages = [
  {
    title: "What is Range Trading?",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Range trading is a strategy that capitalizes on securities trading within defined price boundaries, known as
          support and resistance levels, rather than following strong directional trends.
        </p>
        <p className="text-gray-300 leading-relaxed">
          This approach assumes that prices will oscillate between these levels for extended periods, creating
          predictable buying and selling opportunities at the range boundaries.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Range traders buy near support levels (the lower boundary) and sell near resistance levels (the upper
          boundary), profiting from the price oscillations within the established range.
        </p>
      </div>
    ),
  },
  {
    title: "Identifying Trading Ranges",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Successful range trading requires identifying clear support and resistance levels:
        </p>
        <div className="space-y-3">
          <div className="bg-black/50 p-4 rounded-lg border border-white/10">
            <h4 className="text-green-400 font-semibold mb-2">Support Levels</h4>
            <p className="text-gray-300 text-sm">
              Price floors where buying interest typically emerges, preventing further declines.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/10">
            <h4 className="text-green-400 font-semibold mb-2">Resistance Levels</h4>
            <p className="text-gray-300 text-sm">
              Price ceilings where selling pressure typically increases, preventing further advances.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/10">
            <h4 className="text-green-400 font-semibold mb-2">Range Confirmation</h4>
            <p className="text-gray-300 text-sm">
              Multiple touches of support and resistance levels validate the trading range.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Range Trading Strategies",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">Common range trading approaches include:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="text-white font-semibold">Buy Low, Sell High</h4>
              <p className="text-gray-300 text-sm">Purchase near support and sell near resistance within the range.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="text-white font-semibold">Mean Reversion</h4>
              <p className="text-gray-300 text-sm">
                Trade against extreme moves, expecting prices to return to the range center.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="text-white font-semibold">Oscillator Signals</h4>
              <p className="text-gray-300 text-sm">
                Use RSI, Stochastic, or other oscillators to time entries and exits.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Risk Management in Range Trading",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">Effective range trading requires careful risk management:</p>
        <div className="space-y-3">
          <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/20">
            <h4 className="text-red-400 font-semibold mb-2">Breakout Risk</h4>
            <p className="text-gray-300 text-sm">
              Ranges can break, leading to significant losses if not properly managed.
            </p>
          </div>
          <div className="bg-yellow-900/20 p-3 rounded-lg border border-yellow-500/20">
            <h4 className="text-yellow-400 font-semibold mb-2">Stop Loss Placement</h4>
            <p className="text-gray-300 text-sm">
              Set stops beyond support/resistance levels to limit losses on breakouts.
            </p>
          </div>
          <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
            <h4 className="text-green-400 font-semibold mb-2">Position Sizing</h4>
            <p className="text-gray-300 text-sm">Use appropriate position sizes based on range width and volatility.</p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function RangeTradingLearnPage() {
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
          <div className="mb-8">
            <Link
              href="/my-range-trader"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to myRangeTrader
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-8 h-8 text-green-400" />
              <div className="relative">
                <div className="absolute inset-0 -inset-x-4 -inset-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-emerald-500/20 via-green-600/25 to-lime-500/30 rounded-lg blur-sm animate-[aurora_4s_ease-in-out_infinite_alternate]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-400/15 via-lime-400/20 to-green-700/25 rounded-lg blur-md animate-[aurora_6s_ease-in-out_infinite_alternate-reverse]"></div>
                </div>
                <h1 className="relative text-3xl font-bold text-white">Learn Range Trading</h1>
              </div>
            </div>
            <p className="text-gray-400">
              Page {currentPage + 1} of {pages.length}
            </p>
          </div>

          <Card className="bg-black/30 backdrop-blur-md border-white/10 min-h-[500px]">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">{pages[currentPage].title}</h2>
                {pages[currentPage].content}
              </div>
            </CardContent>
          </Card>

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
                    index === currentPage ? "bg-green-400" : "bg-white/20 hover:bg-white/40"
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
