import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Content */}
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-6">About TrendSniper</h1>

          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              TrendSniper is a cutting-edge AI-powered financial analysis platform designed to empower traders and
              investors with precision market insights. Our mission is to democratize advanced technical analysis by
              making sophisticated trading tools accessible to everyone, from novice traders to seasoned professionals.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Technology</h2>
            <p>
              Built on advanced machine learning algorithms and quantitative analysis methods, TrendSniper processes
              vast amounts of market data in real-time to identify trends, patterns, and trading opportunities. Our AI
              engine combines traditional technical indicators with modern data science to deliver actionable insights.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Products</h2>
            <ul className="space-y-3">
              <li>
                <strong className="text-purple-300">myHeikinAshi:</strong> Advanced Heikin-Ashi analysis with Fibonacci
                retracements and pattern recognition
              </li>
              <li>
                <strong className="text-yellow-300">myStatArb:</strong> Statistical arbitrage opportunities and pair
                trading insights
              </li>
              <li>
                <strong className="text-blue-300">myQuantTwist:</strong> Quantitative analysis with custom algorithmic
                strategies
              </li>
              <li>
                <strong className="text-green-300">myRangeTrader:</strong> Range-bound market analysis and breakout
                predictions
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Commitment</h2>
            <p>
              We believe in transparency, accuracy, and continuous innovation. TrendSniper is committed to providing
              reliable market analysis tools while maintaining the highest standards of data security and user privacy.
              Our platform is designed to enhance your trading decisions, not replace your judgment.
            </p>

            <p className="text-sm text-white/60 mt-8 p-4 bg-white/5 rounded border border-white/10">
              <strong>Disclaimer:</strong> TrendSniper provides analysis tools for educational and informational
              purposes. All trading involves risk, and past performance does not guarantee future results. Please trade
              responsibly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
