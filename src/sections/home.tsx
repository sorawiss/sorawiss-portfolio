import { RevealOnScroll } from "../components/reveal-onscroll";
import { MoveRight } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="page-shell flex min-h-screen items-center pt-52 pb-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ball-primary/[0.03] via-transparent to-transparent"></div>
      
      <div className="w-full flex flex-col gap-16 md:gap-24">
    

        <div className="flex flex-col gap-8 md:gap-12">
          <RevealOnScroll variant="fadeInUp" delay={0.1}>
            <h1 className="text-balance text-center text-[3.5rem] font-medium leading-[0.95] tracking-[-0.03em] text-ball-primary sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem]">
              Designing for <span className="text-ball-primary/40 italic font-serif">clarity.</span><br />
              Engineering for <span className="relative inline-block">
                scale.
                <span className="absolute bottom-2 left-0 h-[0.1em] w-full bg-ball-accent/20 -z-10"></span>
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll variant="fadeInUp" delay={0.2}>
             <p className="text-center max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-ball-primary/60 font-light">
              I am a product designer and frontend developer based in Bangkok. 
              I specialize in transforming complex problems into elegant, intuitive digital experiences.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="fadeInUp" delay={0.3}>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1ByUBygQVeItuemA6atLokNsRzaQURVR8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-full bg-ball-primary px-8 py-4 text-sm uppercase tracking-[0.15em] text-ball-white overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <span className="relative z-10 font-medium">My Resume</span>
              <MoveRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 h-full w-0 bg-ball-accent/60 transition-all duration-500 ease-out group-hover:w-full z-0"></div>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-black/10 px-8 py-4 text-sm uppercase tracking-[0.15em] text-ball-primary transition-all hover:border-black/30 hover:bg-black/[0.02]"
            >
              <span className="font-medium">Let's Talk</span>
            </a>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll variant="fadeInUp" delay={0.4}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-black/8 pt-12">
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-medium tracking-tight">2+</span>
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-ball-primary/45">Years Exp.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-medium tracking-tight">20+</span>
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-ball-primary/45">Projects</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl md:text-3xl font-medium tracking-tight">Thammasat</span>
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-ball-primary/45">University</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl md:text-3xl font-medium tracking-tight">Ramkamhang</span>
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-ball-primary/45">University</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
