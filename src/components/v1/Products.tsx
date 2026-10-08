import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { ArrowUpRight } from "lucide-react";

type Product = {
  name: string;
  tag: string;
  desc: string;
  stack: string;
  url?: string;
};

const PRODUCTS: Product[] = [
  {
    name: "AIMAX AI 직원",
    tag: "AIXLIFE 개발 · 사용자 3,000명",
    desc: "사장님 대신 블로그 글쓰기, 견적서, 고객 찾기, 사무 정리를 맡는 AI 직원 서비스. 운영 웹앱과 Mac/Windows 로컬 에이전트로 구성되며, 사용자 3,000명이 쓰고 있습니다.",
    stack: "Claude API (Claude Sonnet) 글쓰기·판단 엔진",
    url: "https://aimax.ai.kr",
  },
  {
    name: "AIxSCHOOL",
    tag: "AI 직원 양성학교 · 2026년 10월 개강",
    desc: "비개발자가 AI 직원(에이전트)을 직접 만들고 자동화팀으로 연결하는 12개월 과정과 실습 플랫폼. 글감 하나로 스레드 글·카드뉴스·숏폼 대본을 만드는 콘텐츠 자동화팀 등을 제공합니다.",
    stack: "AI 에이전트 템플릿 · 멀티 에이전트 워크플로우",
    url: "https://aixschool.kr",
  },
  {
    name: "고객사 맞춤 AI 자동화",
    tag: "AX 개발",
    desc: "세무법인 경리 상담 관리 웹앱 등 고객사 업무에 맞춘 AI 에이전트와 업무 웹앱을 설계·개발하고 도입까지 지원합니다.",
    stack: "업무 문서 기반 AI 에이전트 · 사람 검토 단계 포함",
  },
  {
    name: "전자계약 · 고객 포털",
    tag: "운영 인프라",
    desc: "교육·개발 고객사와의 계약을 처리하는 전자서명 시스템과 고객사별 교육·자료 포털을 직접 만들어 운영합니다.",
    stack: "sign.aixschool.kr · consulting.aixschool.kr",
  },
];

export function Products() {
  return (
    <section id="products" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <h2 className="text-sm font-black tracking-widest text-black uppercase mb-6 inline-block bg-primary px-4 py-1 rounded-full">
            Products
          </h2>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8">
            만드는 제품
          </h3>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed break-keep text-balance">
            AIXLIFE는 가르치기만 하지 않습니다. 비개발자 사장님과 조직이 바로 쓰는 AI 직원(에이전트) 제품을 직접 만들고 운영합니다.
          </p>
          <p className="mt-4 text-base text-gray-500 max-w-3xl leading-relaxed">
            AIXLIFE (founded 2023, Seoul, Korea) builds AI agent products for Korean small businesses and teams, built on Anthropic's Claude.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((p) => {
            const Inner = (
              <div className="h-full border-2 border-primary rounded-3xl p-8 md:p-10 group hover:bg-primary transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="text-3xl md:text-4xl font-black text-white group-hover:text-black tracking-tighter transition-colors break-keep">
                    {p.name}
                  </h4>
                  {p.url && (
                    <ArrowUpRight className="shrink-0 w-8 h-8 text-primary group-hover:text-black transition-colors" />
                  )}
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 group-hover:bg-black/20 group-hover:text-black transition-colors">
                  {p.tag}
                </span>
                <p className="text-lg md:text-xl font-medium text-gray-300 group-hover:text-black/80 leading-relaxed break-keep mb-6 transition-colors">
                  {p.desc}
                </p>
                <p className="text-sm font-bold text-gray-500 group-hover:text-black/70 tracking-wide transition-colors">
                  {p.stack}
                  {p.url && <span className="ml-2">· {p.url.replace("https://", "")}</span>}
                </p>
              </div>
            );
            return (
              <StaggerItem key={p.name}>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {Inner}
                  </a>
                ) : (
                  Inner
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
