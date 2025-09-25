import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-white/60 mb-8">Last updated: August 2025</p>

          <div className="space-y-6 text-white/80 leading-relaxed">
            <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, use our services,
              or contact us for support. This may include your name, email address, and usage data.
            </p>

            <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our services</li>
              <li>To improve and personalize your experience</li>
              <li>To communicate with you about updates and features</li>
              <li>To ensure security and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy. We may share information with service providers who assist us
              in operating our platform.
            </p>

            <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-white">5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and
              improve our services. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-semibold text-white">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and comply with legal
              obligations. You may request deletion of your account and associated data at any time.
            </p>

            <h2 className="text-2xl font-semibold text-white">7. Your Rights</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability where applicable</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white">8. Third-Party Services</h2>
            <p>
              Our service may contain links to third-party websites or integrate with external services. We are not
              responsible for the privacy practices of these third parties.
            </p>

            <h2 className="text-2xl font-semibold text-white">9. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 18. We do not knowingly collect personal information from
              children under 18 years of age.
            </p>

            <h2 className="text-2xl font-semibold text-white">10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-white">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through our support channels.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
