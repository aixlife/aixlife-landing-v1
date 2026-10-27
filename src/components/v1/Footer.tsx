export function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Brand Name */}
        <div className="flex justify-center mb-12">
          <h2 className="text-[15vw] leading-none font-black text-white tracking-tighter select-none">
            AI<span className="text-brand-light">MAX</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="h-[2px] w-full bg-primary mb-16"></div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm">
              사람이 방향을 잡고, AI가 실행한다.<br/>AI 직원(에이전트) 제품 개발과 실전 AI 교육.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:makefamily@makefamily.kr" className="block text-gray-400 hover:text-brand-light transition-colors text-lg font-bold">
                makefamily@makefamily.kr
              </a>
              <a href="tel:0266727781" className="block text-gray-400 hover:text-brand-light transition-colors text-lg font-bold">02-6672-7781</a>
              <a href="https://pf.kakao.com/_LVxlXxj/chat" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-brand-light transition-colors text-lg font-bold">
                카카오톡 상담
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Links</h4>
            <div className="space-y-4">
              <a href="https://github.com/aixlife" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-brand-light transition-colors text-lg font-bold">GitHub</a>
              <a href="https://aimax.ai.kr" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-brand-light transition-colors text-lg font-bold">AIMAX</a>
              <a href="https://aixschool.kr" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-brand-light transition-colors text-lg font-bold">AIxSCHOOL</a>
              <a href="/about/" className="block text-gray-400 hover:text-brand-light transition-colors text-lg font-bold">About (English)</a>
            </div>
          </div>
        </div>

        {/* Business info */}
        <div className="text-gray-500 text-sm font-medium leading-relaxed space-y-1 mb-10 break-keep">
          <p>상호 (주)메이크패밀리 · 대표 윤동규 · 사업자등록번호 537-87-01496 · 통신판매업 제2020-서울금천-0389호</p>
          <p>주소 경기도 광명시 일직로 43, GIDC A동 2513호 · 개인정보보호책임자 윤동규</p>
          <p>이메일 makefamily@makefamily.kr · 전화 02-6672-7781 · 호스팅 Vercel Inc.</p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-gray-500 font-bold text-sm">
            © {new Date().getFullYear()} MAKEFAMILY Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-bold">
            <a href="/privacy/" className="text-gray-300 hover:text-brand-light transition-colors">개인정보처리방침</a>
            <a href="/terms/" className="text-gray-500 hover:text-brand-light transition-colors">이용약관</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
