import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { ArrowUpRight, Github } from "lucide-react";

const BUILD_TYPES = [
  { title: "웹앱 · 운영 대시보드", desc: "AI 직원 운영 웹앱, 고객사 업무 웹앱, 전자계약·고객 포털" },
  { title: "데스크톱 로컬 에이전트", desc: "Mac/Windows에 설치해 내 컴퓨터에서 일하는 AI 직원 실행기와 자동 업데이트" },
  { title: "Claude Code 플러그인 · CLI", desc: "비개발자가 Claude Code를 안전하게 쓰도록 돕는 플러그인과 개발자용 CLI 도구" },
  { title: "PWA · 업무 도구", desc: "촬영용 웹 프롬프터, 파일 자동 정리 도구 등 현장에서 바로 쓰는 작은 도구" },
];

const STACK = [
  "Claude API (Claude Sonnet)",
  "Claude Code",
  "TypeScript · React",
  "Node.js",
  "Python",
  "Vercel",
];

const REPOS = [
  {
    name: "fire-your-ai-setup-coach",
    desc: "비개발자를 위한 Claude Code 플러그인. 내 AI 작업 환경을 읽기 전용으로 점검하고, 바꾸기 전에 변경 내용을 먼저 보여줍니다.",
    lang: "Python · MIT",
  },
  {
    name: "council-cli",
    desc: "이미 쓰고 있는 여러 AI CLI에 같은 질문을 동시에 던지고 답을 나란히 비교하는 도구. API 키 없이 로컬에서 실행됩니다.",
    lang: "JavaScript · MIT",
  },
  {
    name: "lecture-content-kit",
    desc: "강의 하나를 AI와 만들고, 같은 소스로 블로그·스레드·카드뉴스·숏폼 기획까지 이어서 만드는 비개발자용 키트.",
    lang: "HTML · MIT",
  },
  {
    name: "file-watcher-ai",
    desc: "지정 폴더를 감시하며 규칙에 따라 파일을 자동 분할·이동·정리하는 AI 파일 자동화 도구.",
    lang: "Python · MIT",
  },
];

export function Dev() {
  return (
    <section id="dev" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <h2 className="text-sm font-black tracking-widest text-black uppercase mb-6 inline-block bg-primary px-4 py-1 rounded-full">
            Development
          </h2>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8">
            개발 &amp; 오픈소스
          </h3>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed break-keep text-balance">
            AIXLIFE는 컴퓨터 프로그래밍 서비스업으로 등록된 개발 회사입니다. 기획부터 개발, 배포, 운영까지 직접 합니다.
          </p>
        </FadeIn>

        {/* What we build */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BUILD_TYPES.map((b) => (
            <StaggerItem key={b.title}>
              <div className="h-full border border-white/15 rounded-3xl p-8">
                <h4 className="text-2xl font-black text-white tracking-tight mb-3 break-keep">{b.title}</h4>
                <p className="text-base text-gray-400 leading-relaxed break-keep">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stack */}
        <FadeIn className="mb-20">
          <p className="text-sm text-gray-500 font-bold uppercase mb-4 tracking-widest">Stack</p>
          <div className="flex flex-wrap gap-3">
            {STACK.map((s) => (
              <span key={s} className="px-5 py-2 rounded-full border-2 border-primary text-primary font-bold text-base">
                {s}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Open source */}
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter">공개 저장소</h4>
          <a
            href="https://github.com/aixlife"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-black font-black text-lg hover:bg-white transition-colors"
          >
            <Github className="w-5 h-5" />
            github.com/aixlife
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REPOS.map((r) => (
            <StaggerItem key={r.name}>
              <a
                href={`https://github.com/aixlife/${r.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full border-2 border-primary rounded-3xl p-8 group hover:bg-primary transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h5 className="text-2xl md:text-3xl font-black text-white group-hover:text-black tracking-tight break-all transition-colors">
                    aixlife/{r.name}
                  </h5>
                  <ArrowUpRight className="shrink-0 w-7 h-7 text-primary group-hover:text-black transition-colors" />
                </div>
                <p className="text-lg text-gray-300 group-hover:text-black/80 leading-relaxed break-keep mb-4 transition-colors">
                  {r.desc}
                </p>
                <p className="text-sm font-bold text-gray-500 group-hover:text-black/70 transition-colors">{r.lang}</p>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
