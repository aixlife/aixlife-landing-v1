import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-black border-t-2 border-primary">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <FadeIn>
            <h2 className="text-sm font-black tracking-widest text-white uppercase mb-6 inline-block bg-primary px-4 py-1 rounded-full">Contact</h2>
            <h3 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-none uppercase break-keep text-balance">
              강의 및<br/>
              컨설팅 문의
            </h3>
            <p className="text-2xl text-gray-400 mb-16 leading-relaxed font-bold max-w-lg break-keep text-balance">
              어떤 교육이 필요한지 편하게 문의해 주세요.<br/>성공적인 도입을 돕겠습니다.
            </p>

            <div className="space-y-12">
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase mb-3 tracking-widest">Email</p>
                <a href="mailto:makefamily@makefamily.kr" className="text-4xl sm:text-5xl font-black text-white tracking-tight break-all hover:text-brand-light transition-colors">
                  makefamily@<br className="sm:hidden"/>makefamily.kr
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-bold uppercase mb-3 tracking-widest">Phone</p>
                <a href="tel:0266727781" className="text-4xl sm:text-5xl font-black text-white tracking-tight hover:text-brand-light transition-colors block">02-6672-7781</a>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="flex flex-col justify-center h-full">
            <a 
              href="https://pf.kakao.com/_LVxlXxj/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-12 px-10 rounded-[2rem] bg-primary text-white hover:bg-white hover:text-black transition-colors flex items-center justify-between group"
            >
              <span className="text-4xl font-black tracking-tighter uppercase">문의하기</span>
              <span className="w-16 h-16 rounded-full border-[3px] border-current flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight className="w-8 h-8" />
              </span>
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
