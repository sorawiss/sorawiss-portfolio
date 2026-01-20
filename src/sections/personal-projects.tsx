import { RevealOnScroll } from "../components/reveal-onscroll";
import Project from "../components/project-block";
import AnimatedBackground from '@/components/ui/animated-background';

import projectData from "../store/project-data";

export default function PersonalProjects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-[8rem]"
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* <h3 className="text-2xl font-bold text-center mb-8 text-ball-primary/80  ">Personal Projects</h3> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedBackground
            className='rounded-xl bg-zinc-200/70 dark:bg-zinc-800'
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {projectData.map((items, index) => (
              <div key={items.id} data-id={`card-${index}`}>
                <RevealOnScroll
                  variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                  delay={1 + (index * 0.2)}
                  className="h-full"
                >
                  <Project
                    title={items.title}
                    description={items.description}
                    URL={items.URL}
                    github={items.github}
                    skill={items.skill}
                  />
                </RevealOnScroll>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </div>
    </section>
  );
};
