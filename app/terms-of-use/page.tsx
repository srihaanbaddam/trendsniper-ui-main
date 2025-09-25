import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfUsePage() {
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
          <h1 className="text-4xl font-bold text-white mb-6">Terms of Use</h1>
          <p className="text-white/60 mb-8">Last updated: August 2025</p>

          <div className="space-y-6 text-white/80 leading-relaxed">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using TrendSniper, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-white">2. Service Description</h2>
            <p>
              TrendSniper provides AI-powered financial analysis tools and market insights for educational and
              informational purposes. Our platform offers technical analysis, pattern recognition, and market trend
              identification tools.
            </p>

            <h2 className="text-2xl font-semibold text-white">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You must be at least 18 years old to use this service</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to use the service only for lawful purposes</li>
              <li>You acknowledge that trading involves substantial risk</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white">4. Investment Disclaimer</h2>
            <p>
              TrendSniper does not provide investment advice. All analysis and insights are for informational purposes
              only. Trading and investing involve substantial risk of loss and are not suitable for all investors. Past
              performance does not guarantee future results.
            </p>

            <h2 className="text-2xl font-semibold text-white">5. Limitation of Liability</h2>
            <p>
              TrendSniper shall not be liable for any direct, indirect, incidental, special, or consequential damages
              resulting from the use or inability to use our service, including but not limited to trading losses.
            </p>

            <h2 className="text-2xl font-semibold text-white">6. Service Availability</h2>
            <p>
              We strive to maintain service availability but do not guarantee uninterrupted access. We reserve the right
              to modify, suspend, or discontinue the service at any time without notice.
            </p>

            <h2 className="text-2xl font-semibold text-white">7. Intellectual Property</h2>
            <p>
              All content, algorithms, and analysis methods used in TrendSniper are proprietary and protected by
              intellectual property laws. Users may not reproduce, distribute, or create derivative works without
              permission.
            </p>

            <h2 className="text-2xl font-semibold text-white">8. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service after changes
              constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-white">9. Contact Information</h2>
            <p>For questions about these Terms of Use, please contact us through our support channels.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
