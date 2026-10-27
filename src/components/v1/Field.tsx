import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

type Photo = { src: string; alt: string; caption: string; wide?: boolean; span2?: boolean };

const FIELD: Photo[] = [
  { src: "field-ai-donation.webp", alt: "2026 AI 기부 강의 단체 사진", caption: "2026 AI 기부 강의", wide: true },
  { src: "field-codex.webp", alt: "코덱스 실전 강의 현장", caption: "코덱스 실전 강의", span2: true },
  { src: "field-suwon.webp", alt: "수원특례시 승진자 역량강화 교육 실습 현장", caption: "수원특례시 승진자 역량강화 교육", span2: true },
  { src: "field-kaipec.webp", alt: "KAIPEC 실무활용 원데이 세미나 강연", caption: "KAIPEC 실무활용 세미나" },
  { src: "field-dual-brain.webp", alt: "DUAL BRAIN 강연", caption: "DUAL BRAIN 강연" },
  { src: "field-cafe.webp", alt: "마이크를 들고 질문에 답하는 강의 현장", caption: "실습 강의 Q&A" },
  { src: "field-unlimit.webp", alt: "언리밋 강의 현장", caption: "언리밋 강의" },
  { src: "field-small-group.webp", alt: "소그룹 강의에서 설명하는 모습", caption: "소그룹 강의" },
  { src: "field-coaching.webp", alt: "수강생 자리에서 개별 실습을 지도하는 모습", caption: "개별 실습 지도" },
  { src: "field-aixschool-offline.webp", alt: "AIxSCHOOL 오프라인 수업", caption: "AIxSCHOOL 오프라인 수업" },
  { src: "field-familyday.webp", alt: "패밀리데이 강의 현장", caption: "패밀리데이 강의" },
];

const WITH_STUDENTS: Photo[] = [
  { src: "with-students-1.webp", alt: "강의를 마치고 수강생들과 찍은 사진", caption: "수강생들과" },
  { src: "with-students-hackathon.webp", alt: "2026 강남구 AI 문제해결 해커톤 대상 팀과 함께", caption: "강남구 AI 해커톤 대상 팀과" },
  { src: "with-students-school.webp", alt: "학교 AI 수업에서 작품을 든 학생들과", caption: "학교 AI 수업" },
  { src: "with-students-2.webp", alt: "수강생들과 함께 찍은 사진", caption: "수강생들과" },
];

function Card({ p, className = "" }: { p: Photo; className?: string }) {
  return (
    <figure className={`relative h-full overflow-hidden rounded-2xl md:rounded-3xl border border-line bg-surface ${className}`}>
      <img src={`/images/lecture/${p.src}`} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
      <figcaption className="absolute left-3 bottom-3 px-3 py-1.5 rounded-full bg-page/85 backdrop-blur text-xs md:text-sm font-bold text-ink">
        {p.caption}
      </figcaption>
    </figure>
  );
}

export function Field() {
  return (
    <section id="field" className="py-32 bg-page border-t border-ink/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <h2 className="text-sm font-black tracking-widest text-white uppercase mb-6 inline-block bg-primary px-4 py-1 rounded-full">
            In the Field
          </h2>
          <h3 className="text-6xl md:text-8xl font-black text-ink tracking-tighter uppercase mb-8">교육 현장</h3>
          <p className="text-xl md:text-2xl text-sub max-w-3xl leading-relaxed break-keep text-balance">
            기업·공공기관·학교 강의실에서 직접 가르치고, 수강생 자리까지 찾아가 실습을 함께 합니다.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-3 md:gap-5 mb-20 grid-flow-dense">
          {FIELD.map((p) => (
            <StaggerItem key={p.src} className={p.wide ? "col-span-2 row-span-2" : p.span2 ? "col-span-2" : ""}>
              <Card p={p} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mb-8">
          <h4 className="text-3xl md:text-5xl font-black text-ink tracking-tighter">수강생과 함께</h4>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {WITH_STUDENTS.map((p) => (
            <StaggerItem key={p.src}>
              <Card p={p} className="aspect-[4/3]" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
