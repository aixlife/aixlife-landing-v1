import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const FEATURES = [
  {
    title: "AI 리터러시 중심",
    desc: "단순한 툴 조작법이 아닙니다. 비즈니스 문제를 정의하고\n'무엇을 시킬 것인가'를 스스로 설계하는\n본질적인 사고력을 기릅니다."
  },
  {
    title: "현장 기반 커리큘럼",
    desc: "인테리어, F&B, 디자인 등 13년간 6개 산업을\n직접 운영하며 겪은 실제 비즈니스 문제와\n해결 사례를 바탕으로 교육합니다."
  },
  {
    title: "전 연령·전 직군 대응",
    desc: "초등학생부터 공무원, C-Level 임원까지.\n수강생의 백그라운드와 눈높이에 맞춘\n완벽한 언어로 소통합니다."
  },
  {
    title: "실습 중심 아웃풋 지향",
    desc: "듣고 끝나는 강의를 지양합니다.\n모든 과정은 수강생이 직접 프롬프트를 작성하고\n결과물을 만들어내는 실습 위주로 구성됩니다."
  },
  {
    title: "100% 맞춤형 설계",
    desc: "기존의 틀에 박힌 강의안을 재사용하지 않습니다.\n기업의 업종, 부서의 직무, 조직의 숙련도에 맞춰\n처음부터 설계합니다."
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center mb-20">
          <h2 className="text-sm font-black tracking-widest text-[#FFE87A] uppercase mb-6 inline-block bg-[#262626] px-4 py-1 rounded-full">Why AIXLIFE</h2>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase break-keep text-balance">
            교육 특징
          </h3>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {FEATURES.map((feature, idx) => (
            <StaggerItem key={idx} className={idx < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
              <div className="bg-[#171717] p-12 rounded-[2rem] h-full flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 border border-white/5">
                {/* Yellow Circle Metric */}
                <div className="w-24 h-24 rounded-full border-[3px] border-[#FFE87A] flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(255,232,122,0.15)] group-hover:shadow-[0_0_40px_rgba(255,232,122,0.3)] transition-shadow">
                  <span className="text-4xl font-black text-[#FFE87A]">{idx + 1}</span>
                </div>
                
                <h4 className="text-3xl font-black text-white mb-6 tracking-tight leading-tight break-keep text-balance">
                  {feature.title}
                </h4>
                
                <p className="text-lg text-[#a3a3a3] font-medium leading-relaxed break-keep text-balance whitespace-pre-line">
                  {feature.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
