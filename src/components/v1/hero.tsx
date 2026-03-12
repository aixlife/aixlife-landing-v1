"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { NeuralNetworkBackground } from "@/components/ui/NeuralNetworkBackground"

const words = ["전문가로", "리더로", "혁신가로"]

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-black text-white overflow-hidden">
      {/* Neural Network Background */}
      <NeuralNetworkBackground />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent via-50% to-black/70 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#FFE87A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFE87A]" />
            </span>
            <span className="text-sm font-medium text-[#FFE87A] uppercase tracking-widest">
              AI 교육 & 컨설팅
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter uppercase leading-[0.85] mb-8">
            <span className="block text-white">당신의 조직을</span>
            <span className="block text-white mt-2">AI</span>
            <span className="block mt-2">
              <span 
                className={`inline-block text-[#FFE87A] transition-all duration-400 ${isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}
              >
                {words[currentWord]}
              </span>
            </span>
            <span className="block text-white mt-2">성장시킵니다</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#a3a3a3] max-w-2xl leading-relaxed mb-12 break-keep text-balance">
            600시간+ 강의 경험, 1,500명+ 교육 실적.
            <br className="hidden sm:block" />
            실무 중심 AI 교육으로 조직의 생산성을 혁신합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={() => scrollTo("#contact")}
              className="h-14 px-10 text-base font-bold tracking-wide flex items-center gap-2"
            >
              교육 상담 받기
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#portfolio")}
              className="h-14 px-10 text-base font-bold tracking-wide text-white border-white/20 hover:bg-white/10 hover:text-white"
            >
              교육 실적 보기
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  )
}
