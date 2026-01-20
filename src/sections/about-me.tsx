import { RevealOnScroll } from "../components/reveal-onscroll";

export const About = () => {

    return (
        <section
            id="about"
            className=" flex items-center justify-center py-[8rem]"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 cursor-default ">
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r text-ball-primary bg-clip-text text-center">
                        Who I am
                    </h2>

                    <div className="rounded-xl p-8 border-primary/20 border hover:-translate-y-1 transition-all hover:border-primary/60 ">
                        <p className="text-ball-primary/70 mb-6 text-center ">
                            Second-year student in Computer Science and Political Science with interests
                            in engineering, user experience design, social sciences, and psychology.
                            Passionate about understanding how people interact with technology, and designing systems that are both
                            technically sound and human-centered.
                        </p>

                        {/* Skills section commented out */}
                    </div>

                    {/* <div className="flex flex-col mt-8">
                        <div className="p-6 rounded-xl border-primary/0 border">
                            <h3 className="text-xl font-bold mb-4">Education</h3> {/* Translate education title
                            <ul className="list-disc list-inside text-ball-primary/60 space-y-2">
                                <li>
                                    <strong>Computer Science</strong> 3rd year student at Thammasat University <strong>GPA 3.66</strong>
                                </li>
                                <li>
                                    <strong>Political Science</strong> 2nd year student at Ramkhamhaeng University <strong>GPA 3.71</strong>
                                </li>
                                <li>
                                    <strong>Princess Chulabhorn Science High School</strong> (2017-2023) <strong>GPA 3.57</strong>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </RevealOnScroll>
        </section>
    );
};
