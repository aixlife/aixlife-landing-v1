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
              사람이 방향을 잡고, AI가 실행한다.<br/>비즈니스 문제 해결을 위한 실전 AI 교육 & 컨설팅.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <div className="space-y-4">
              <span className="block text-gray-400 text-lg font-bold">
                naminsoo@aixlife.co.kr
              </span>
              <p className="text-gray-400 text-lg font-bold">010-3709-0516</p>
              <a href="https://open.kakao.com/me/naminsoo_ai" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-primary transition-colors text-lg font-bold">
                카카오 오픈채팅
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Info</h4>
            <div className="space-y-2 text-gray-400 text-lg font-medium">
              <p>대표: 나민수</p>
              <p>사업자등록번호: 789-71-00438</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-gray-500 font-bold text-sm">
            © {new Date().getFullYear()} AIXLIFE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest">Privacy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
