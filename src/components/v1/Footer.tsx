export function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Brand Name */}
        <div className="flex justify-center mb-12">
          <h2 className="text-[15vw] leading-none font-black text-white tracking-tighter select-none">
            AI<span className="text-primary">X</span>LIFE
          </h2>
        </div>

        {/* Divider */}
        <div className="h-[2px] w-full bg-primary mb-16"></div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm">
              사람이 방향을 잡고, AI가 실행한다.<br/>AI 직원(에이전트) 제품 개발과 실전 AI 교육. Since 2023.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:naminsoo@aixlife.co.kr" className="block text-gray-400 hover:text-primary transition-colors text-lg font-bold">
                naminsoo@aixlife.co.kr
              </a>
              <a href="tel:+82-10-3709-0516" className="block text-gray-400 hover:text-primary transition-colors text-lg font-bold">010-3709-0516</a>
              <a href="https://open.kakao.com/o/gT0uVxJh" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-primary transition-colors text-lg font-bold">
                카카오 오픈채팅
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Links</h4>
            <div className="space-y-4">
              <a href="https://github.com/aixlife" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-primary transition-colors text-lg font-bold">GitHub</a>
              <a href="https://aimax.ai.kr" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-primary transition-colors text-lg font-bold">AIMAX</a>
              <a href="https://aixschool.kr" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-primary transition-colors text-lg font-bold">AIxSCHOOL</a>
              <a href="/about/" className="block text-gray-400 hover:text-primary transition-colors text-lg font-bold">About (English)</a>
            </div>
          </div>
        </div>

        {/* Business info */}
        <div className="text-gray-500 text-sm font-medium leading-relaxed space-y-1 mb-10 break-keep">
          <p>상호 에익스라이프(AIXLIFE) · 대표 나민수 · 사업자등록번호 789-71-00438</p>
          <p>주소 서울특별시 강북구 도봉로65길 39-4(미아동) · 개업 2023년 1월 26일 · 업종 정보통신업(컴퓨터 프로그래밍 서비스업), 시각 디자인업</p>
          <p>이메일 naminsoo@aixlife.co.kr · 전화 010-3709-0516 · 호스팅 Vercel Inc.</p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-gray-500 font-bold text-sm">
            © 2023–{new Date().getFullYear()} AIXLIFE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-bold">
            <a href="/privacy/" className="text-gray-300 hover:text-primary transition-colors">개인정보처리방침</a>
            <a href="/terms/" className="text-gray-500 hover:text-primary transition-colors">이용약관</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
