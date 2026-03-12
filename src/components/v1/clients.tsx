"use client"

const clients = [
  "국민건강보험공단",
  "부산정보산업진흥원",
  "서울경제진흥원",
  "강원도 정선군 청소년수련관",
  "강원도청",
  "카카오",
  "MKYU 플러스휴먼스쿨",
  "엘리스그룹",
  "라이프 해킹스쿨",
  "남이디자인",
  "천지세무법인",
  "닥터서클",
  "수출입 아카데미",
  "The4",
  "홍익대학교",
  "대진디자인고등학교",
  "메이크패밀리"
]

export function Clients() {
  return (
    <section className="py-8 border-y border-black/10 overflow-hidden bg-[#FFE87A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-black/60 text-center">
          함께한 주요 기업 및 기관
        </p>
      </div>
      
      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFE87A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFE87A] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Content */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First Set */}
          <div className="flex shrink-0 gap-20 pr-20">
            {clients.map((client, index) => (
              <span 
                key={`first-${index}`}
                className="text-xl font-heading font-bold uppercase tracking-wider text-black/60 whitespace-nowrap hover:text-black transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 gap-20 pr-20">
            {clients.map((client, index) => (
              <span 
                key={`second-${index}`}
                className="text-xl font-heading font-bold uppercase tracking-wider text-black/60 whitespace-nowrap hover:text-black transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
