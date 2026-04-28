import { RevealOnScroll } from "../components/reveal-onscroll";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="page-shell py-20 md:py-28"
        >
            <div className="swiss-grid grid-rule items-start pt-8">
                <RevealOnScroll className="md:col-span-5">
                    <div className="space-y-5">
                        <p className="section-kicker">Contact</p>
                        <h2 className="section-title">
                            Let&apos;s
                            <span className="block text-ball-primary/25">connect</span>
                        </h2>
                        <p className="section-copy max-w-md">
                            Open to thoughtful freelance work, collaborations, and product conversations.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.15} className="md:col-span-7">
                    <div className="editorial-card p-6 md:p-8">
                        <div className="label-row border-t-0 py-0 pb-5">
                            <span>Reach Out</span>
                            <span>Bangkok, Thailand</span>
                        </div>

                        <div className="space-y-8">
                            <div className="border-t border-black/10 pt-5">
                                <p className="display-index mb-3">Email</p>
                                <a
                                    href="mailto:sorawit.bunnee@gmail.com"
                                    className="text-2xl font-medium tracking-[-0.05em] transition-colors hover:text-ball-accent md:text-4xl"
                                >
                                    sorawit.bunnee@gmail.com
                                </a>
                            </div>

                            <div className="border-t border-black/10 pt-5">
                                <p className="display-index mb-3">Phone</p>
                                <a
                                    href="tel:+66611607708"
                                    className="text-2xl font-medium tracking-[-0.05em] transition-colors hover:text-ball-accent md:text-4xl"
                                >
                                    (+66) 611 607 708
                                </a>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
