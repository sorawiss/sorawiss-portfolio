import { RevealOnScroll } from "../components/reveal-onscroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="page-shell flex min-h-screen items-center pt-24 pb-16"
    >
      <div className="swiss-grid w-full items-end">
        <RevealOnScroll variant="fadeInUp" className="md:col-span-7">
          <div className="space-y-6">
            <p className="section-kicker">Portfolio 2026</p>
            <h1 className="text-[4.25rem] font-medium uppercase leading-[0.84] tracking-[-0.1em] text-ball-primary sm:text-[6rem] md:text-[7.5rem] lg:text-[9.5rem]">
              Sorawiss
              <span className="block text-ball-primary/22">Bunnee</span>
            </h1>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeInUp" delay={0.15} className="md:col-span-5">
          <div className="editorial-card space-y-8 p-6 md:p-8">
            <div className="label-row border-t-0 py-0 pb-4">
              <span>Code</span>
              <span>Design</span>
              <span>Systems</span>
            </div>

            <p className="max-w-xl text-lg leading-8 text-ball-primary/78 md:text-xl">
              Product-minded developer building digital experiences with strong visual
              structure, clear interaction, and engineering discipline.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="#projects"
                className="border border-black px-4 py-4 text-sm uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-black hover:text-ball-white"
              >
                View Projects
              </a>
              <a
                href="mailto:sorawit.bunnee@gmail.com"
                className="border border-black/12 px-4 py-4 text-sm uppercase tracking-[0.18em] text-ball-primary/70 transition-colors duration-300 hover:border-black hover:text-ball-primary"
              >
                Start A Conversation
              </a>
            </div>

            <div className="grid gap-3 border-t border-black/10 pt-4 font-mono text-xs uppercase tracking-[0.22em] text-ball-primary/52 sm:grid-cols-3">
              <span>Bangkok</span>
              <span>Web / Product</span>
              <span>Available For Select Work</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
