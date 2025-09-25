"use client"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                See the Trends.{" "}
                <span className="text-accent">
                  Strike with <strong>Confidence</strong>.
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed font-sans">
                TrendSniper is a free-to-use AI-powered financial analysis tool designed to give traders clarity and
                precision. It leverages advanced technical and quantitative analysis methods to detect market trends
                with accuracy and confidence. With real-time analysis and AI-driven insights, TrendSniper helps you cut
                through the noise and make smarter, faster trading decisions.
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="space-y-6">
                {/* Mock Laptop Screen */}
                <div className="bg-secondary rounded-lg p-4 border border-border/30">
                  <div className="space-y-4">
                    {/* Chart Area */}
                    <div className="relative h-48 rounded border border-accent/30 flex items-center justify-center overflow-hidden">
                      {/* Animated aurora background */}
                      <div className="absolute inset-0 opacity-30">
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-orange-500/40 via-yellow-500/40 via-green-500/40 via-blue-500/40 to-purple-500/40 blur-sm"
                          style={{
                            backgroundSize: "200% 100%",
                            animation: "aurora-flow 6s ease-in-out infinite",
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/30 via-green-600/30 via-yellow-600/30 via-orange-600/30 to-red-600/30 blur-md"
                          style={{
                            backgroundSize: "300% 100%",
                            animation: "aurora-flow-reverse 8s ease-in-out infinite",
                          }}
                        />
                      </div>
                      {/* Chart content */}
                      <div className="relative z-10 w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded flex items-center justify-center">
                        <motion.div
                          className="w-full h-full"
                          initial={{
                            opacity: 0,
                            x: 0,
                            y: 0,
                            filter: "hue-rotate(0deg) saturate(1) brightness(1)",
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            filter: "hue-rotate(0deg) saturate(1) brightness(1)",
                          }}
                          transition={{
                            duration: 1.2,
                            delay: 1,
                            ease: "easeOut",
                          }}
                          whileInView={{
                            x: [-2, 1, -1, 2, -2, 1, 0, -1, 1, 0],
                            y: [1, -1, 2, -2, 0, 1, -1, 0, 0, 0],
                            filter: [
                              "hue-rotate(0deg) saturate(1) brightness(1)",
                              "hue-rotate(90deg) saturate(2) brightness(1.2)",
                              "hue-rotate(180deg) saturate(0.5) brightness(0.8)",
                              "hue-rotate(270deg) saturate(1.5) brightness(1.1)",
                              "hue-rotate(45deg) saturate(0.8) brightness(1.3)",
                              "hue-rotate(135deg) saturate(1.2) brightness(0.9)",
                              "hue-rotate(225deg) saturate(1.8) brightness(1.1)",
                              "hue-rotate(315deg) saturate(0.6) brightness(1.2)",
                              "hue-rotate(15deg) saturate(1.1) brightness(1.05)",
                              "hue-rotate(0deg) saturate(1) brightness(1)",
                            ],
                          }}
                          viewport={{ once: true }}
                        >
                          <FullCandlestickChart />
                        </motion.div>
                      </div>
                    </div>

                    {/* Real-Time Analysis Log */}
                    <div className="bg-background/50 rounded p-3 border border-border/20">
                      <div className="text-xs text-accent font-medium mb-2">Real-Time Analysis Log</div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Trend Detection:</span>
                          <span className="text-green-400">Bullish</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Confidence:</span>
                          <span className="text-accent">94.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Signal Strength:</span>
                          <span className="text-yellow-400">Strong</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes aurora-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes aurora-flow-reverse {
          0% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  )
}

function FullCandlestickChart() {
  return (
    <svg width="280" height="160" viewBox="0 0 280 160" className="w-full h-full">
      {/* Grid lines */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="280" height="160" fill="url(#grid)" />

      {/* Candlesticks */}
      <g>
        {/* Red candle 1 */}
        <line x1="30" y1="40" x2="30" y2="100" stroke="#ef4444" strokeWidth="1" />
        <rect x="26" y="60" width="8" height="25" fill="#ef4444" />

        {/* Green candle 2 */}
        <line x1="50" y1="35" x2="50" y2="90" stroke="#22c55e" strokeWidth="1" />
        <rect x="46" y="50" width="8" height="20" fill="#22c55e" />

        {/* Red candle 3 */}
        <line x1="70" y1="45" x2="70" y2="105" stroke="#ef4444" strokeWidth="1" />
        <rect x="66" y="65" width="8" height="30" fill="#ef4444" />

        {/* Green candle 4 */}
        <line x1="90" y1="30" x2="90" y2="85" stroke="#22c55e" strokeWidth="1" />
        <rect x="86" y="45" width="8" height="25" fill="#22c55e" />

        {/* Green candle 5 */}
        <line x1="110" y1="25" x2="110" y2="80" stroke="#22c55e" strokeWidth="1" />
        <rect x="106" y="40" width="8" height="20" fill="#22c55e" />

        {/* Red candle 6 */}
        <line x1="130" y1="35" x2="130" y2="95" stroke="#ef4444" strokeWidth="1" />
        <rect x="126" y="55" width="8" height="25" fill="#ef4444" />

        {/* Green candle 7 */}
        <line x1="150" y1="20" x2="150" y2="75" stroke="#22c55e" strokeWidth="1" />
        <rect x="146" y="35" width="8" height="20" fill="#22c55e" />

        {/* Green candle 8 */}
        <line x1="170" y1="15" x2="170" y2="70" stroke="#22c55e" strokeWidth="1" />
        <rect x="166" y="30" width="8" height="25" fill="#22c55e" />

        {/* Red candle 9 */}
        <line x1="190" y1="25" x2="190" y2="80" stroke="#ef4444" strokeWidth="1" />
        <rect x="186" y="45" width="8" height="20" fill="#ef4444" />

        {/* Green candle 10 */}
        <line x1="210" y1="10" x2="210" y2="65" stroke="#22c55e" strokeWidth="1" />
        <rect x="206" y="25" width="8" height="25" fill="#22c55e" />

        {/* Green candle 11 */}
        <line x1="230" y1="5" x2="230" y2="60" stroke="#22c55e" strokeWidth="1" />
        <rect x="226" y="20" width="8" height="20" fill="#22c55e" />

        {/* Green candle 12 */}
        <line x1="250" y1="8" x2="250" y2="55" stroke="#22c55e" strokeWidth="1" />
        <rect x="246" y="23" width="8" height="18" fill="#22c55e" />
      </g>

      {/* Trend line showing upward movement */}
      <path
        d="M 30 85 Q 140 60 250 35"
        stroke="#8b5cf6"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
        strokeDasharray="5,5"
      />

      {/* Volume bars at bottom */}
      <g opacity="0.4">
        <rect x="28" y="120" width="4" height="15" fill="#6b7280" />
        <rect x="48" y="115" width="4" height="20" fill="#6b7280" />
        <rect x="68" y="125" width="4" height="10" fill="#6b7280" />
        <rect x="88" y="110" width="4" height="25" fill="#6b7280" />
        <rect x="108" y="118" width="4" height="17" fill="#6b7280" />
        <rect x="128" y="122" width="4" height="13" fill="#6b7280" />
        <rect x="148" y="108" width="4" height="27" fill="#6b7280" />
        <rect x="168" y="112" width="4" height="23" fill="#6b7280" />
        <rect x="188" y="120" width="4" height="15" fill="#6b7280" />
        <rect x="208" y="105" width="4" height="30" fill="#6b7280" />
        <rect x="228" y="115" width="4" height="20" fill="#6b7280" />
        <rect x="248" y="110" width="4" height="25" fill="#6b7280" />
      </g>
    </svg>
  )
}
