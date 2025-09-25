"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type ModalState = "login" | "signup" | "forgot-password"

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [modalState, setModalState] = useState<ModalState>("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // No real authentication yet - just close modal
    onOpenChange(false)
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    // No real authentication yet - just close modal
    onOpenChange(false)
  }

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Password reset link sent to your email!")
    setModalState("login")
  }

  const switchModalState = (newState: ModalState) => {
    setModalState(newState)
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setName("")
  }

  const getTitle = () => {
    switch (modalState) {
      case "signup":
        return "Join TrendSniper"
      case "forgot-password":
        return "Reset Password"
      default:
        return "Login to TrendSniper"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-sm border border-border/50">
        <DialogHeader>
          <div className="relative">
            <div className="absolute inset-0 -mx-4 h-12 rounded-lg opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-yellow-500/40 via-blue-500/40 to-green-500/40 rounded-lg blur-sm animate-aurora" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 via-yellow-400/30 via-blue-400/30 to-green-400/30 rounded-lg animate-aurora-slow" />
              <div className="absolute inset-0 border border-gradient-to-r from-red-300/20 via-yellow-300/20 via-blue-300/20 to-green-300/20 rounded-lg" />
            </div>
            <DialogTitle className="relative text-2xl font-bold text-center text-foreground py-2">
              {getTitle()}
            </DialogTitle>
          </div>
        </DialogHeader>

        {modalState === "login" && (
          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary/50 border-border/50"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-secondary/50 border-border/50"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Login
            </Button>
            <div className="text-center space-y-2">
              <button
                type="button"
                onClick={() => switchModalState("forgot-password")}
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                Forgot your password?
              </button>
              <div className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchModalState("signup")}
                  className="text-accent hover:text-accent/80 underline"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        )}

        {modalState === "signup" && (
          <form onSubmit={handleSignup} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary/50 border-border/50"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email" className="text-foreground">
                Email
              </Label>
              <Input
                id="signup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary/50 border-border/50"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password" className="text-foreground">
                Password
              </Label>
              <Input
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-secondary/50 border-border/50"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-foreground">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-secondary/50 border-border/50"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Create Account
            </Button>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchModalState("login")}
                  className="text-accent hover:text-accent/80 underline"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        )}

        {modalState === "forgot-password" && (
          <form onSubmit={handleForgotPassword} className="space-y-4 mt-4">
            <div className="text-sm text-muted-foreground text-center mb-4">
              Enter your email address and we'll send you a link to reset your password.
            </div>
            <div className="space-y-2">
              <Label htmlFor="reset-email" className="text-foreground">
                Email
              </Label>
              <Input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary/50 border-border/50"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Send Reset Link
            </Button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => switchModalState("login")}
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                Back to Login
              </button>
            </div>
          </form>
        )}
      </DialogContent>
      <style jsx>{`
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
            background-size: 200% 100%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 300% 100%;
          }
          100% {
            background-position: 0% 50%;
            background-size: 200% 100%;
          }
        }
        
        @keyframes aurora-slow {
          0% {
            background-position: 0% 50%;
            background-size: 250% 100%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 350% 100%;
          }
          100% {
            background-position: 0% 50%;
            background-size: 250% 100%;
          }
        }
        
        .animate-aurora {
          animation: aurora 4s ease-in-out infinite;
        }
        
        .animate-aurora-slow {
          animation: aurora-slow 6s ease-in-out infinite;
        }
      `}</style>
    </Dialog>
  )
}
