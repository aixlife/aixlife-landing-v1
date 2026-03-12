import { Navbar } from "@/components/v1/Navbar";
import { Footer } from "@/components/v1/Footer";
import { Hero as AixlifeHero } from "@/components/v1/hero";
import { Clients } from "@/components/v1/clients";
import { AixlifeAbout } from "@/components/v1/about";
import { Topics } from "@/components/v1/Topics";
import { Portfolio } from "@/components/v1/Portfolio";
import { Features } from "@/components/v1/Features";
import { Contact } from "@/components/v1/Contact";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      <main>
        <AixlifeHero />
        <Clients />
        <AixlifeAbout />
        <Topics />
        <Portfolio />
        <Features />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
