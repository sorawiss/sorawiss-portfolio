import { RevealOnScroll } from "../components/reveal-onscroll";
import Project from "../components/project-block";
import projectData from "../store/project-data";

export default function PersonalProjects() {
  return (
    <section
      id="projects"
      className="page-shell py-20 md:py-28"
    >
      <div className="swiss-grid grid-rule pt-8">
        <div className="md:col-span-4">
          <p className="section-kicker">Independent Projects</p>
          <h2 className="section-title mt-4">
            Built
            <span className="block text-ball-primary/25">outside class</span>
          </h2>
          <p className="section-copy mt-6 max-w-sm">
            A selection of concepts, experiments, and product systems spanning full-stack,
            interface design, and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:col-span-8 md:grid-cols-2">
          {projectData.map((items, index) => (
            <RevealOnScroll
              key={items.id}
              variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={0.1 + (index * 0.1)}
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
          ))}
        </div>
      </div>
    </section>
  );
};
