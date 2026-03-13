import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const PORTFOLIO_DATA = {
  corporate: {
    label: "기업/단체",
    items: [
      { org: "카카오 (카카오클래스)", desc: "소상공인 AI 활용 — e스토어 스마트 운영", metric: "실습 완료율 95%" },
      { org: "MKYU 플러스휴먼스쿨", desc: "AI 대화 설계 / 문제 발견 / GPTs 구축 / AI 콘텐츠 제작" },
      { org: "엘리스그룹", desc: "AI를 활용한 비즈니스 원데이특강 외 1건" },
      { org: "라이프 해킹스쿨", desc: "AI 비즈니스 활용 VOD 강의" },
      { org: "천지세무법인", desc: "AX 컨설팅 — 자동화 시스템 설계 및 도입" },
      { org: "닥터서클", desc: "AX 컨설팅 — 의료 자가진단 웹앱 기획" },
      { org: "남이디자인", desc: "디자인팀·굿즈팀 AI 컨설팅/교육" },
    ]
  },
  public: {
    label: "공공기관",
    items: [
      { org: "국민건강보험공단", desc: "직원 대상 AI 기초 활용 및 데이터 분석", metric: "만족도 4.8/5.0" },
      { org: "부산정보산업진흥원", desc: "직장인을 위한 AI 제2의 두뇌 만들기" },
      { org: "서울경제진흥원", desc: "AI 비즈니스 자동화 유튜브 시리즈 (6회)" },
      { org: "강원도 정선군 청소년수련관", desc: "공무원 AI 기초교육 / 생성형 AI 활용능력향상" },
      { org: "강원도청", desc: "공무원 대상 AI 음악 제작 워크숍" },
    ]
  },
  education: {
    label: "교육기관",
    items: [
      { org: "홍익대학교", desc: "디자이너를 위한 AI 활용" },
      { org: "대진디자인고등학교 (2025)", desc: "취업역량 강화 및 AI 활용 웹툰 제작" },
      { org: "대진디자인고등학교 (2026)", desc: "실질적 문제해결을 위한 AI 활용 및 디자인 역량 강화 (강남구청 지원)" },
    ]
  }
};

type TabKey = keyof typeof PORTFOLIO_DATA;

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabKey>("corporate");

  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="mb-20">
          <h2 className="text-sm font-black tracking-widest text-black uppercase mb-6 inline-block bg-primary px-4 py-1 rounded-full">Success to Date</h2>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-12">
            교육 실적
          </h3>

          {/* Outlined Gold Tabs */}
          <div className="flex flex-wrap gap-4">
            {(Object.keys(PORTFOLIO_DATA) as TabKey[]).map((key) => {
              const tab = PORTFOLIO_DATA[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={cn(
                    "px-8 py-4 rounded-full font-black text-xl border-2 transition-all",
                    isActive 
                      ? "bg-primary border-primary text-black" 
                      : "bg-transparent border-primary text-primary hover:bg-primary/10"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="border-t-2 border-primary -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <StaggerContainer key={activeTab} className="flex flex-col">
            {PORTFOLIO_DATA[activeTab].items.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-6 md:gap-12 border-b-2 border-primary group hover:bg-primary transition-colors px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 cursor-default">
                  <div className="md:col-span-5">
                    <h4 className="text-4xl md:text-5xl font-black text-white group-hover:text-black tracking-tighter transition-colors break-keep text-balance">
                      {item.org}
                    </h4>
                  </div>
                  <div className="md:col-span-7 flex items-center gap-4">
                    <p className="text-2xl font-bold text-gray-400 group-hover:text-black/80 transition-colors leading-snug break-keep text-balance">
                      {item.desc}
                    </p>
                    {"metric" in item && item.metric && (
                      <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold group-hover:bg-black/20 group-hover:text-black transition-colors">
                        {item.metric}
                      </span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}
