import { RevealOnScroll } from "../components/reveal-onscroll";
import projectData from "../store/project-data";

export default function PersonalProjects() {
  return (
    <section
      id="projects"
      className="page-shell py-20 md:py-28"
    >
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Projects</p>
          <h2 className="mt-3 text-balance text-4xl font-medium leading-[0.95] tracking-[-0.07em] text-ball-primary md:text-6xl">
            Selected work
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-ball-primary/60">
          A small set of product concepts, full-stack builds, and experiments.
        </p>
      </div>

      <div className="stack-rule border-y border-black/8">
        {projectData.map((items, index) => (
          <RevealOnScroll
            key={items.id}
            variant="fadeInUp"
            delay={0.06 + (index * 0.06)}
          >
            <a
              href={items.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="grid gap-6 py-8 transition-colors duration-300 hover:bg-black/[0.015] md:grid-cols-[4rem_minmax(0,16rem)_minmax(0,1fr)] md:items-start"
            >
              <span className="display-index pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="space-y-2">
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.05em] text-ball-primary md:text-3xl">
                  {items.title}
                </h3>
                {items.github && (
                  <span className="text-xs uppercase tracking-[0.16em] text-ball-primary/48">
                    GitHub available
                  </span>
                )}
              </div>

              <div className="space-y-5">
                <p className="max-w-2xl text-sm leading-7 text-ball-primary/68 md:text-base">
                  {items.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.14em] text-ball-primary/48">
                  {items.skill.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.16em] text-ball-primary/56">
                  <span>Open Project</span>
                  {items.github && (
                    <a
                      href={items.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-ball-primary"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};
