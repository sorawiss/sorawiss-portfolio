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
      className="container min-h-screen flex items-center justify-center relative "
    >
      <div className="text-center z-10 px-4">
        <RevealOnScroll variant="fadeInUp" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-ball-primary bg-clip-text ">
            sorawiss<span className="text-ball-primary/20">.com</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeInUp" delay={0.4}>
          <Terminal className="w-full min-h-[15rem] h-auto bg-ball-white mb-4 cursor-default ">
            <TypingAnimation>"At the intersection of code, design, and the human</TypingAnimation>
            <TypingAnimation>experience. I'm driven by a desire to build systems that are</TypingAnimation>
            <TypingAnimation>both technically sound and emotionally intelligent."</TypingAnimation>

          </Terminal>
        </RevealOnScroll>
      </div>
    </section>
  );
};
