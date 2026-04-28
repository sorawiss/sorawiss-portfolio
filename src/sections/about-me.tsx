import { RevealOnScroll } from "../components/reveal-onscroll";

export const About = () => {
    return (
        <section
            id="about"
            className="page-shell py-20 md:py-28"
        >
            <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
                <RevealOnScroll>
                    <p className="section-kicker">About</p>
                </RevealOnScroll>

                <div className="space-y-12">
                    <RevealOnScroll delay={0.08}>
                        <p className="max-w-4xl text-balance text-3xl font-medium leading-[1.2] tracking-[-0.05em] text-ball-primary md:text-5xl">
                            I work between frontend engineering, product design, and visual storytelling,
                            with a focus on making technology feel calm, useful, and human.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.14}>
                        <div className="grid gap-6 border-t border-black/8 pt-6 md:grid-cols-3">
                            <div>
                                <p className="display-index mb-4">Craft</p>
                                <p className="text-sm leading-7 text-ball-primary/68">
                                    Frontend systems, interface polish, and product thinking grounded in use.
                                </p>
                            </div>
                            <div>
                                <p className="display-index mb-4">Curiosity</p>
                                <p className="text-sm leading-7 text-ball-primary/68">
                                    Psychology, social science, and how people emotionally respond to software.
                                </p>
                            </div>
                            <div>
                                <p className="display-index mb-4">Taste</p>
                                <p className="text-sm leading-7 text-ball-primary/68">
                                    Quiet hierarchy, careful spacing, and details that do not compete with content.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};
