"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import { LoginModal } from "./login-modal"

export function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleMyHeikinAshiClick = (e: React.MouseEvent) => {
    if (pathname === "/my-heikin-ashi") {
      e.preventDefault()
      router.refresh()
      window.location.reload()
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black via-60% to-purple-900/50 backdrop-blur-md border-b border-white/10 h-24">
        <div className="max-w-7xl mx-auto px-6 py-6 h-full">
          <div className="flex items-center justify-evenly w-full h-full">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
              TrendSniper
            </Link>

            {/* Product Navigation */}
            <div className="hidden lg:flex items-center justify-evenly flex-1 max-w-2xl">
              <Link href="/my-heikin-ashi" onClick={handleMyHeikinAshiClick}>
                <ProductNavItem title="myHeikinAshi" titleColor="text-red-300" />
              </Link>
              <Link href="/my-stat-arb">
                <ProductNavItem title="myStatArb" status="In Progress" titleColor="text-yellow-300" />
              </Link>
              <Link href="/my-quant-twist">
                <ProductNavItem title="myQuantTwist" status="In Progress" titleColor="text-blue-300" />
              </Link>
              <Link href="/my-range-trader">
                <ProductNavItem title="myRangeTrader" status="In Progress" titleColor="text-green-300" />
              </Link>
            </div>

            {/* Avatar
            <Avatar
              className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-accent transition-all"
              onClick={() => setShowLoginModal(true)}
            >
              <AvatarFallback className="bg-secondary text-foreground font-medium text-sm">Login</AvatarFallback>
            </Avatar> */}
          </div>
        </div>
      </nav>

      {/* <LoginModal open={showLoginModal} onOpenChange={setShowLoginModal} /> */}
    </>
  )
}

function ProductNavItem({ title, status, titleColor }: { title: string; status?: string; titleColor?: string }) {
  return (
    <div className="text-center cursor-pointer group">
      <div className={`${titleColor || "text-foreground"} font-medium group-hover:text-accent transition-colors`}>
        {title}
      </div>
      {status && <div className="text-xs text-muted-foreground mt-1 italic">({status})</div>}
    </div>
  )
}
