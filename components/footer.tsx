import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
              About
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="/terms-of-use" className="text-muted-foreground hover:text-accent transition-colors">
              Terms of Use
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>
              TrendSniper provides market analysis tools for informational purposes only. Trading involves substantial
              risk and is not suitable for all investors. Past performance does not guarantee future results. Please
              consult with a financial advisor before making investment decisions.
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border/20 text-center text-sm text-muted-foreground">
          © 2025 TrendSniper. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
