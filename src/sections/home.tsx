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
          <Terminal className="w-full h-[10rem] bg-ball-white mb-4 ">
            <AnimatedSpan className="font-mono">"At the intersection of code, design, and the human</AnimatedSpan>
            <TypingAnimation className="font-mono">experience. I'm driven by a desire to build systems that are</TypingAnimation>
            <TypingAnimation className="font-mono">both technically sound and emotionally intelligent."</TypingAnimation>

          </Terminal>
        </RevealOnScroll>

        <div className="Button absolute bottom-4 left-1/2 -translate-x-1/2 flex w-fit mx-auto gap-2 ">
          <a target="_blank" href="https://drive.google.com/file/d/1wAcdu-XST-tuQr7pqVepPuQ5QMV4CLSh/view?usp=sharing" className="px-2 py-1 w-20 border 
            border-primary/20 rounded-xl cursor-pointer  hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300 ">
            Resume
          </a>

          <a href="https://github.com/sorawiss" className="px-2 py-1 w-20 border border-primary/20 rounded-xl 
            cursor-pointer  hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300 ">
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};
