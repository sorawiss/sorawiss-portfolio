import { cn } from "@/lib/utils"

const projects = [
    {
        id: 1,
        title: "Maibood",
        category: "UX/UI Design, Full-Stack Development, Business Development",
        year: "2024",
        orientation: "vertical",
        image: "/project-images/maibood-1.png",
    },
    {
        id: 2,
        title: "CPAXT",
        category: "UX/UI Design, Full-Stack Development, Business Development",
        year: "2025",
        orientation: "vertical",
        image: "/project-images/maibood-2.png",
    },
    {
        id: 3,
        title: "Nithan Herb",
        category: "UI Design, Frontend Development",
        year: "2025",
        orientation: "horizontal",
        image: "/project-images/nithan-herb.png",
    },
    {
        id: 4,
        title: "DrivedDev",
        category: "UX/UI Design, Full-Stack Development ",
        year: "2025",
        orientation: "horizontal",
        image: "/project-images/driveddev.png",
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

function WorkImages() {
    return (
        <div className="container mx-auto px-4 ">
            <div className="mb-16 mt-10 flex flex-col items-start pt-12 border-t border-black/10">
                <RevealOnScroll>
                    <h2 className="uppercase tracking-tighter leading-[0.8]">
                        Gallery
                    </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={0.2}>
                    <p className="text-ball-primary/60 max-w-[30rem]  leading-relaxed">
                        A collection of my work presented through visuals, including UI designs, layouts, and creative projects.
                    </p>
                </RevealOnScroll>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2 items-start auto-rows-min">
                {projects.map((project, index) => (
                    <div
                        className={cn(
                            project.orientation === "horizontal" ? "md:col-span-2" : "",
                            index % 2 === 1 && project.orientation === "vertical" ? "md:mt-32" : ""
                        )}
                    >
                        <div className="group flex flex-col gap-6 cursor-pointer">
                            <div className={cn(
                                "relative w-full overflow-hidden bg-gray-100 transition-all duration-700 ease-out group-hover:scale-[0.98]",
                                project.orientation === "horizontal" ? "aspect-video" : "aspect-4/5"
                            )}>
                                {/* Mockup Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-gray-900 
                                transition-colors duration-500">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-sm font-medium uppercase tracking-[0.2em]">Image Mockup</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col border-t border-black pt-4">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-3xl md:text-5xl font-bold uppercase leading-none tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm font-mono text-gray-400">{project.year}</span>
                                </div>
                                <span className="mt-2 text-sm font-medium uppercase tracking-widest text-gray-500">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkImages