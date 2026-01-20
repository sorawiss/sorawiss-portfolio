import { RevealOnScroll } from "../components/reveal-onscroll";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center p-4"
        >
            <RevealOnScroll delay={0.2}>
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    {/* Left Column: Heading */}
                    <div className="md:col-span-1">
                        <h1 className="text-5xl  font-bold tracking-tighter leading-[0.9] text-ball-primary mb-8">
                            Let's <br />
                            Connect
                        </h1>
                    </div>

                    {/* Right Column: Details */}
                    <div className="md:col-span-1 flex flex-col justify-between h-full space-y-12 pt-4">
                        <div className="space-y-2">
                            <p className="text-sm uppercase tracking-widest text-ball-primary/60 font-medium">
                                Email
                            </p>
                            <a
                                href="mailto:sorawit.bunnee@gmail.com"
                                className="cursor-pointer text-2xl md:text-3xl font-light text-ball-primary hover:text-ball-primary/70 transition-colors block decoration-1 underline-offset-4 hover:underline"
                            >
                                sorawit.bunnee@gmail.com
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm uppercase tracking-widest text-ball-primary/60 font-medium">
                                Phone
                            </p>
                            <a
                                href="tel:+66611607708"
                                className="cursor-pointer text-2xl md:text-3xl font-light text-ball-primary hover:text-ball-primary/70 transition-colors block decoration-1 underline-offset-4 hover:underline"
                            >
                                (+66) 611607708
                            </a>
                        </div>

                        <div className="pt-12 border-t border-primary/10">
                            <p className="text-ball-primary/40 text-sm">
                                Based in Bangkok, Thailand
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
