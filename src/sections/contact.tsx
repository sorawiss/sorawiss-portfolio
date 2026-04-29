import { RevealOnScroll } from "../components/reveal-onscroll";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="page-shell py-24 md:py-32"
        >
            <RevealOnScroll>
                <section className="border-t border-black/8 pt-10"
                    id="contact">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="section-kicker">Contact</p>
                        <h2 className="mt-4 text-balance text-4xl font-medium leading-[0.95] tracking-[-0.08em] text-ball-primary md:text-7xl">
                            Let&apos;s build something clear and lasting.
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-ball-primary/62 md:text-lg">
                            Open to product, frontend, and design-focused collaborations.
                        </p>

                        <div className="mt-12 space-y-4">
                            <a
                                href="mailto:sorawit.bunnee@gmail.com"
                                className="block text-2xl font-medium tracking-[-0.05em] text-ball-primary md:text-4xl"
                            >
                                sorawit.bunnee@gmail.com
                            </a>
                            <a
                                href="tel:+66611607708"
                                className="block text-sm uppercase tracking-[0.16em] text-ball-primary/55"
                            >
                                (+66) 611 607 708
                            </a>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>
        </section>
    );
};
