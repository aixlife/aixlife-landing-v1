import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

const TOPICS = [
  {
    title: "바이브코딩 (Vibe Coding)",
    desc: "비개발자를 위한 AI 기반 앱/웹서비스 구축. 자연어로 코딩하는 새로운 개발 패러다임 교육."
  },
  {
    title: "AI 리터러시 & 사고력",
    desc: "AI 시대의 문제 발견 프레임워크. 무엇을 시킬 것인가를 스스로 설계하는 근본적인 사고력 훈련."
  },
  {
    title: "생성형 AI 업무 활용",
    desc: "ChatGPT, Claude, Gemini를 활용한 실무 생산성 향상. 보고서, 기획안, 이메일 등 문서 작업 최적화."
  },
  {
    title: "AI 마케팅 & 콘텐츠 제작",
    desc: "AI를 활용한 이미지, 영상, 음악 생성 및 SNS 자동화. 퍼포먼스 마케팅 효율 극대화 전략."
  },
  {
    title: "AI 비즈니스 자동화 (AX)",
    desc: "반복적인 업무를 대체하는 자동화 시스템 설계 및 기업 맞춤형 AI 에이전트 구축 컨설팅."
  },
  {
    title: "산업별 맞춤 AI 교육",
    desc: "디자이너, 피트니스, 이커머스, 학생 등 특정 직군과 대상의 니즈에 맞춘 특화 커리큘럼 제공."
  }
];

export function Topics() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="topics" className="py-32 bg-primary">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-black tracking-widest text-black uppercase mb-6 inline-block bg-white px-4 py-1 rounded-full border border-black">Curriculum</h2>
            <h3 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase">
              강의 주제
            </h3>
          </div>
          <p className="text-2xl font-bold text-black max-w-md leading-snug break-keep text-balance">
            현장 경험을 바탕으로 실질적인 <br/>비즈니스 성과를 만듭니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Cards */}
          <div className="space-y-6">
            <StaggerContainer>
              {TOPICS.slice(0, 3).map((topic, idx) => (
                <StaggerItem key={idx} className="mb-6">
                  <div className="bg-black rounded-3xl p-10 md:p-12 hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-5xl font-black text-primary opacity-50">0{idx + 1}</span>
                      <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight break-keep text-balance">{topic.title}</h4>
                    <p className="text-xl text-white/90 font-medium leading-relaxed break-keep text-balance">
                      {topic.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Cards */}
          <div className="space-y-6 lg:mt-24">
            <StaggerContainer>
              {TOPICS.slice(3, 6).map((topic, idx) => (
                <StaggerItem key={idx} className="mb-6">
                  <div className="bg-black rounded-3xl p-10 md:p-12 hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-5xl font-black text-primary opacity-50">0{idx + 4}</span>
                      <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight break-keep text-balance">{topic.title}</h4>
                    <p className="text-xl text-white/90 font-medium leading-relaxed break-keep text-balance">
                      {topic.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            <FadeIn delay={0.4} className="pt-8">
              <button onClick={scrollToContact} className="w-full bg-black text-primary py-8 rounded-3xl flex items-center justify-center gap-4 group hover:bg-white transition-colors">
                <span className="text-3xl font-black tracking-tighter uppercase group-hover:text-black">맞춤 커리큘럼 문의</span>
                <span className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:border-black group-hover:text-black">
                  <ArrowRight className="w-6 h-6" />
                </span>
              </button>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
