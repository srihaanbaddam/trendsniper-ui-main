"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, BookOpen, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const pages = [
  {
    title: "What is Statistical Arbitrage?",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Statistical arbitrage (StatArb) is a quantitative trading strategy that seeks to profit from pricing
          inefficiencies between related financial instruments by using mathematical models and statistical analysis.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Unlike traditional arbitrage that exploits risk-free price differences, statistical arbitrage involves some
          risk but aims to generate consistent profits through the law of large numbers and mean reversion principles.
        </p>
        <p className="text-gray-300 leading-relaxed">
          This strategy typically involves taking long and short positions simultaneously in correlated securities,
          betting that their price relationship will return to historical norms.
        </p>
      </div>
    ),
  },
  {
    title: "How Statistical Arbitrage Works",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">Statistical arbitrage relies on several key concepts:</p>
        <div className="space-y-3">
          <div className="bg-black/50 p-4 rounded-lg border border-white/10">
            <h4 className="text-yellow-400 font-semibold mb-2">Pairs Trading</h4>
            <p className="text-gray-300 text-sm">
              Identifying two historically correlated stocks and trading their price divergence.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/10">
            <h4 className="text-yellow-400 font-semibold mb-2">Mean Reversion</h4>
            <p className="text-gray-300 text-sm">
              Assuming that price relationships will return to their historical average over time.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/10">
            <h4 className="text-yellow-400 font-semibold mb-2">Market Neutral</h4>
            <p className="text-gray-300 text-sm">
              Maintaining equal long and short positions to minimize market risk exposure.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Key Strategies in StatArb",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">Common statistical arbitrage strategies include:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="text-white font-semibold">Equity Market Neutral</h4>
              <p className="text-gray-300 text-sm">
                Long undervalued stocks, short overvalued stocks within the same sector.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="text-white font-semibold">Index Arbitrage</h4>
              <p className="text-gray-300 text-sm">
                Exploiting price differences between index futures and underlying stocks.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="text-white font-semibold">Cross-Asset Arbitrage</h4>
              <p className="text-gray-300 text-sm">
                Trading relationships between different asset classes like stocks and bonds.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Risks and Considerations",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          While statistical arbitrage can be profitable, it involves several risks:
        </p>
        <div className="space-y-3">
          <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/20">
            <h4 className="text-red-400 font-semibold mb-2">Model Risk</h4>
            <p className="text-gray-300 text-sm">
              Statistical models may fail if market conditions change or relationships break down.
            </p>
          </div>
          <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-500/20">
            <h4 className="text-orange-400 font-semibold mb-2">Execution Risk</h4>
            <p className="text-gray-300 text-sm">
              Slippage and timing issues can erode the small profit margins typical in StatArb.
            </p>
          </div>
          <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
            <h4 className="text-purple-400 font-semibold mb-2">Capacity Constraints</h4>
            <p className="text-gray-300 text-sm">Strategies may become less effective as more capital is deployed.</p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function StatArbLearnPage() {
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
              href="/my-stat-arb"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to myStatArb
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-8 h-8 text-yellow-400" />
              <div className="relative">
                <div className="absolute inset-0 -inset-x-4 -inset-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-amber-500/20 via-orange-500/25 to-yellow-600/30 rounded-lg blur-sm animate-[aurora_4s_ease-in-out_infinite_alternate]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-amber-400/15 via-orange-400/20 to-yellow-700/25 rounded-lg blur-md animate-[aurora_6s_ease-in-out_infinite_alternate-reverse]"></div>
                </div>
                <h1 className="relative text-3xl font-bold text-white">Learn Statistical Arbitrage</h1>
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
                    index === currentPage ? "bg-yellow-400" : "bg-white/20 hover:bg-white/40"
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
