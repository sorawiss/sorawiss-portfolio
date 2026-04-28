import { cn } from "@/lib/utils"

const projects = [
    {
        id: 1,
        title: "Maibood",
        category: "UX/UI Design, Full-Stack Development, Business Development",
        year: "2024",
        orientation: "vertical",
        image: "/project-images/maibood-1.png",
        url: "https://www.figma.com/design/t0tCBSvqU1hkuPkaxO2tka/MaiBood?m=auto&t=6xWNBphezdei6c2o-1",
    },
    {
        id: 2,
        title: "CPAXT",
        category: "UX/UI Design, Full-Stack Development, Business Development",
        year: "2025",
        orientation: "vertical",
        image: "/project-images/maibood-2.png",
        url: "https://maibood.sorawiss.com/",
    },
    {
        id: 3,
        title: "Nithan Herb",
        category: "UI Design, Frontend Development",
        year: "2025",
        orientation: "horizontal",
        image: "/project-images/nithan-herb.png",
        url: "https://nithanherb.com/",
    },
    {
        id: 4,
        title: "DrivedDev",
        category: "UX/UI Design, Full-Stack Development ",
        year: "2025",
        orientation: "horizontal",
        image: "/project-images/driveddev.png",
        url: "https://www.drived.dev/",
    },
    // {
    //     id: 5,
    //     title: "Experimental Type",
    //     category: "Typography",
    //     year: "2024",
    //     orientation: "vertical",
    //     image: "/project-images/nithan-herb.png",

    // },
    // {
    //     id: 6,
    //     title: "Experimental Type",
    //     category: "Typography",
    //     year: "2024",
    //     orientation: "vertical",
    // },
]
import { RevealOnScroll } from "../components/reveal-onscroll"
import Image from "next/image"

function WorkImages() {
    return (
        <section className="page-shell py-20 md:py-28">
            <div className="swiss-grid grid-rule pt-8">
                <div className="md:col-span-4">
                    <RevealOnScroll>
                        <p className="section-kicker">Visual Archive</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.12}>
                        <h2 className="section-title mt-4">
                            Gallery
                            <span className="block text-ball-primary/25">in motion</span>
                        </h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.2}>
                        <p className="section-copy mt-6 max-w-sm">
                            Interfaces, brand applications, and product visuals arranged with a stronger
                            editorial rhythm.
                        </p>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:col-span-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <RevealOnScroll
                            key={project.id}
                            delay={0.12 + index * 0.08}
                            className={cn(
                                project.orientation === "horizontal" ? "md:col-span-2" : "",
                                index % 2 === 1 && project.orientation === "vertical" ? "md:translate-y-16" : ""
                            )}
                        >
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-5">
                                <div className={cn(
                                    "relative overflow-hidden border border-black/10 bg-white/50 transition-transform duration-500 group-hover:scale-[0.985]",
                                    project.orientation === "horizontal" ? "aspect-[16/9]" : "aspect-[4/5]"
                                )}>
                                    <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                                </div>

                                <div className="border-t border-black/10 pt-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-2xl font-medium uppercase leading-none tracking-[-0.06em] transition-colors duration-300 group-hover:text-ball-accent md:text-4xl">
                                            {project.title}
                                        </h3>
                                        <span className="display-index">{project.year}</span>
                                    </div>
                                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ball-primary/55">
                                        {project.category}
                                    </p>
                                </div>
                            </a>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkImages
