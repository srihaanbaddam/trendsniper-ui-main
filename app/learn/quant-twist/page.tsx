"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, BookOpen, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const pages = [
  {
    title: "What is QuantTwist?",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          QuantTwist represents the evolution of quantitative trading, combining traditional mathematical models with
          cutting-edge machine learning and alternative data sources to create sophisticated trading strategies.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Unlike conventional quantitative approaches that rely solely on price and volume data, QuantTwist incorporates
          diverse data streams including sentiment analysis, satellite imagery, social media trends, and economic
          indicators.
        </p>
        <p className="text-gray-300 leading-relaxed">
          This multi-dimensional approach allows for the discovery of hidden market patterns and the generation of alpha
          through advanced predictive modeling and systematic strategy execution.
        </p>
      </div>
    ),
  },
  {
    title: "Core Components of QuantTwist",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">QuantTwist integrates several advanced technologies:</p>
        <div className="space-y-3">
          <div className="bg-black/50 p-4 rounded-lg border border-white/10">
            <h4 className="text-blue-400 font-semibold mb-2">Machine Learning Models</h4>
            <p className="text-gray-300 text-sm">
              Neural networks, random forests, and ensemble methods for pattern recognition.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/10">
            <h4 className="text-blue-400 font-semibold mb-2">Alternative Data</h4>
            <p className="text-gray-300 text-sm">
              Satellite data, social sentiment, news flow, and economic nowcasting indicators.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/10">
            <h4 className="text-blue-400 font-semibold mb-2">Factor Engineering</h4>
            <p className="text-gray-300 text-sm">
              Automated feature extraction and factor construction from multiple data sources.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Strategy Development Process",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          QuantTwist follows a systematic approach to strategy development:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-400 font-bold text-sm">1</span>
            </div>
            <div>
              <h4 className="text-white font-semibold">Data Collection & Preprocessing</h4>
              <p className="text-gray-300 text-sm">Gathering and cleaning diverse data sources for analysis.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-400 font-bold text-sm">2</span>
            </div>
            <div>
              <h4 className="text-white font-semibold">Feature Engineering</h4>
              <p className="text-gray-300 text-sm">Creating predictive features and factors from raw data.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-400 font-bold text-sm">3</span>
            </div>
            <div>
              <h4 className="text-white font-semibold">Model Training & Validation</h4>
              <p className="text-gray-300 text-sm">Building and testing predictive models with cross-validation.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-400 font-bold text-sm">4</span>
            </div>
            <div>
              <h4 className="text-white font-semibold">Portfolio Construction & Risk Management</h4>
              <p className="text-gray-300 text-sm">
                Optimizing portfolios with advanced risk controls and attribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Applications and Benefits",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">QuantTwist strategies excel in various market conditions:</p>
        <div className="space-y-3">
          <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
            <h4 className="text-green-400 font-semibold mb-2">Alpha Generation</h4>
            <p className="text-gray-300 text-sm">
              Uncovering unique market inefficiencies through alternative data analysis.
            </p>
          </div>
          <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20">
            <h4 className="text-blue-400 font-semibold mb-2">Risk Management</h4>
            <p className="text-gray-300 text-sm">Advanced portfolio optimization and dynamic hedging strategies.</p>
          </div>
          <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
            <h4 className="text-purple-400 font-semibold mb-2">Adaptability</h4>
            <p className="text-gray-300 text-sm">Machine learning models that adapt to changing market regimes.</p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function QuantTwistLearnPage() {
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
              href="/my-quant-twist"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to myQuantTwist
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <div className="relative">
                <div className="absolute inset-0 -inset-x-4 -inset-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/20 via-blue-600/25 to-teal-500/30 rounded-lg blur-sm animate-[aurora_4s_ease-in-out_infinite_alternate]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-400/15 via-teal-400/20 to-blue-700/25 rounded-lg blur-md animate-[aurora_6s_ease-in-out_infinite_alternate-reverse]"></div>
                </div>
                <h1 className="relative text-3xl font-bold text-white">Learn QuantTwist</h1>
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
                    index === currentPage ? "bg-blue-400" : "bg-white/20 hover:bg-white/40"
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
