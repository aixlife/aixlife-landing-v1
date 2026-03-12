import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const NAV_LINKS = [
  { name: "강사 소개", href: "#about" },
  { name: "강의 주제", href: "#topics" },
  { name: "교육 실적", href: "#portfolio" },
  { name: "교육 특징", href: "#features" },
  { name: "문의하기", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#top" 
              onClick={(e) => scrollToSection(e, "#top")}
              className="flex items-center gap-3 group"
            >
              <span className="font-display font-black text-2xl tracking-tighter text-white uppercase">
                AI<span className="text-primary">X</span>LIFE
              </span>
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
            >
              <span className="font-bold text-sm tracking-widest uppercase hidden sm:block">Menu</span>
              <span className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Tinted Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-yellow-200/30 backdrop-blur-sm cursor-pointer"
            />

            {/* Right Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] md:w-[40vw] bg-black z-50 shadow-2xl flex flex-col"
            >
              <div className="flex justify-end p-6 md:p-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 pb-12 flex flex-col justify-center">
                <nav className="flex flex-col">
                  {NAV_LINKS.map((link, idx) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="group py-6 border-b border-white/10 flex items-center justify-between"
                    >
                      <span className="text-3xl md:text-5xl font-black text-white uppercase group-hover:text-primary transition-colors tracking-tighter">
                        {link.name}
                      </span>
                      <ArrowRight className="w-6 h-6 text-white/0 group-hover:text-primary transition-colors transform -translate-x-4 group-hover:translate-x-0" />
                    </a>
                  ))}
                </nav>

                <div className="mt-16">
                  <p className="text-gray-500 font-bold mb-4 uppercase tracking-widest text-sm">Contact Us</p>
                  <span className="text-xl font-bold text-white">
                    naminsoo@aixlife.co.kr
                  </span>
                  <p className="text-xl font-bold text-white mt-2">010-3709-0516</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
