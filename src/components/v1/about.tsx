import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const highlights = [
  {
    title: "13년 현장 경험",
    description: "인테리어, 카페, 토목, 로고 디자인, 블로그 등 6개 산업 직접 운영",
  },
  {
    title: "전 연령 대응",
    description: "초등학생부터 기업 임직원까지, 대상별 눈높이에 맞춘 커리큘럼",
  },
  {
    title: "저서 보유",
    description: "알쓸챗미 — Midjourney v6 올인원 가이드북 (2023)",
  },
  {
    title: "수상 이력",
    description: "생성형 AI 크리에이티브 페어 수상 (충남콘텐츠코리아랩, 2023)",
  },
];

const socialLinks = [
  {
    platform: "Threads",
    url: "https://www.threads.com/@naminsoo_ai",
    logo: (
      <svg viewBox="-5 -15 202 222" className="w-10 h-10">
        <path fill="#ffffff" d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.11 5.864 14.05a90.322 90.322 0 0 0-19.163-2.088c-27.614 0-45.378 14.508-44.76 36.595.311 11.087 5.54 20.652 14.722 26.933 7.764 5.313 17.768 7.893 28.166 7.262 13.716-.831 24.447-5.659 31.886-14.348 5.639-6.588 9.338-15.081 11.17-25.735 6.692 4.048 11.669 9.381 14.444 15.876 4.715 11.037 4.991 29.156-9.728 43.879-12.882 12.877-28.391 18.442-53.401 18.634-27.74-.213-48.707-9.097-62.343-26.397C19.381 146.497 12.263 122.064 12.031 96c.232-26.064 7.35-50.497 21.168-67.572C46.834 11.128 67.801 2.244 95.54 2.031c27.94.213 49.171 9.152 63.131 26.569 6.832 8.533 12.071 19.149 15.583 31.505l16.52-4.4c-4.017-14.151-10.213-26.584-18.478-36.898C155.308 -1.042 129.958-12.07 95.467-12.365h-.072C60.953-12.07 35.888-.908 19.207 19.406 4.629 37.144-3.354 62.916-3.613 96.006l-.002.495.002.495c.259 33.09 8.242 58.862 22.82 76.6 16.681 20.314 41.746 31.476 76.188 31.77h.073c29.897-.226 50.013-7.794 66.982-25.2 22.023-22.589 20.685-50.6 13.586-67.218-5.089-11.915-14.617-21.592-27.499-27.96Zm-47.89 44.088c-11.498.699-23.44-4.539-23.797-17.256-.266-9.483 6.658-20.101 29.634-20.101 2.594 0 5.27.151 7.956.446.8 5.216 1.081 10.063.803 14.498-.999 15.862-8.35 21.985-14.596 22.413Z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/naminsoo_ai/",
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <defs>
          <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/>
      </svg>
    ),
  },
  {
    platform: "KakaoTalk",
    url: "https://open.kakao.com/me/naminsoo_ai",
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#FFE812" d="M12 3c-5.08 0-9.2 3.34-9.2 7.47 0 2.67 1.73 5.02 4.35 6.38l-1.1 4.07c-.1.36.31.65.62.44l4.84-3.2c.16.01.32.02.49.02 5.08 0 9.2-3.34 9.2-7.47S17.08 3 12 3Z"/>
      </svg>
    ),
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@naminsoo_ai",
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"/>
        <path fill="#ffffff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568Z"/>
      </svg>
    ),
  },
];

export function AixlifeAbout() {
  return (
    <section id="about" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center mb-20">
          <h2 className="text-sm font-black tracking-widest text-[#FFE87A] uppercase mb-6 inline-block bg-[#262626] px-4 py-1 rounded-full">About AIXLIFE</h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase break-keep text-balance leading-tight mb-8">
            사람이 방향을 잡고,<br />
            <span className="text-[#FFE87A]">AI가 실행한다</span>
          </h3>
          <div className="text-lg md:text-xl text-[#a3a3a3] font-medium leading-relaxed max-w-4xl mx-auto space-y-4">
            <p className="break-keep text-balance">
              안녕하세요, AIXLIFE 대표 <strong className="text-white">나민수</strong>입니다.
            </p>
            <p className="break-keep text-balance">
              저는 AI가 단순한 도구가 아닌, 업무의 본질을 바꾸는 파트너가 될 수 있다고 믿습니다.<br className="hidden lg:block"/>
              600시간 이상의 강의 경험과 1,500명 이상의 교육 실적을 통해<br />
              각 조직의 상황에 맞는 실질적인 AI 활용 방안을 제시합니다.
            </p>
          </div>
        </FadeIn>

        {/* Highlights — single horizontal row */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {highlights.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-gradient-to-b from-[#171717] to-black p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] h-full flex flex-col items-start border border-[#303030] hover:border-[#FFE87A]/30 hover:-translate-y-2 transition-all duration-300 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFE87A] opacity-0 group-hover:opacity-[0.04] blur-2xl transition-opacity rounded-full -mr-8 -mt-8"></div>
                <h4 className="font-black text-white text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 tracking-tighter break-keep text-balance z-10">{item.title}</h4>
                <p className="text-[#a3a3a3] leading-relaxed font-semibold break-keep text-balance text-xs md:text-sm z-10">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Social Icons — centered row, logo only */}
        <FadeIn className="flex items-center justify-center gap-8 md:gap-12">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.platform}
              className="hover:scale-125 transition-all duration-300"
            >
              {social.logo}
            </a>
          ))}
        </FadeIn>

      </div>
    </section>
  );
}
