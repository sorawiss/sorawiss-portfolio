import { RevealOnScroll } from "../components/reveal-onscroll";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative "
    >
      <div className="text-center z-10 px-4">
        <RevealOnScroll variant="fadeInUp" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-primary bg-clip-text ">
            sorawiss.com
          </h1>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeInUp" delay={0.4}>
          <Terminal className="w-[40rem] h-[15rem] bg-ball-white mb-4 ">
            <AnimatedSpan>"At the intersection of code, design, and the human</AnimatedSpan>
            <TypingAnimation>experience. I'm driven by a desire to build systems that are</TypingAnimation>
            <TypingAnimation>both technically sound and emotionally intelligent."</TypingAnimation>

          </Terminal>
        </RevealOnScroll>
      </div>
    </section>
  );
};
