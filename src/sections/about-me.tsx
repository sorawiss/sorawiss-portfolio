import { RevealOnScroll } from "../components/reveal-onscroll";

export const About = () => {
    return (
        <section
            id="about"
            className="page-shell py-20 md:py-28"
        >
            <div className="swiss-grid grid-rule pt-8">
                <RevealOnScroll className="md:col-span-4">
                    <div className="space-y-4">
                        <p className="section-kicker">About</p>
                        <h2 className="section-title">
                            Human-centered
                            <span className="block text-ball-primary/25">systems</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.15} className="md:col-span-8">
                    <div className="editorial-card p-6 md:p-10">
                        <p className="section-copy max-w-3xl">
                            Third-year student in Computer Science and Political Science focused on the
                            meeting point between engineering, interface design, and human behavior.
                            I care about making products that feel rigorous in structure and clear in use,
                            while still carrying emotional intelligence.
                        </p>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            <div className="border-t border-black/10 pt-4">
                                <p className="display-index mb-3">01 Discipline</p>
                                <p className="text-sm leading-7 text-ball-primary/70">
                                    Frontend engineering, product thinking, and interface systems.
                                </p>
                            </div>
                            <div className="border-t border-black/10 pt-4">
                                <p className="display-index mb-3">02 Interest</p>
                                <p className="text-sm leading-7 text-ball-primary/70">
                                    UX, social science, psychology, and how people trust technology.
                                </p>
                            </div>
                            <div className="border-t border-black/10 pt-4">
                                <p className="display-index mb-3">03 Approach</p>
                                <p className="text-sm leading-7 text-ball-primary/70">
                                    Use a clear grid, reduce noise, and let content carry the weight.
                                </p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
