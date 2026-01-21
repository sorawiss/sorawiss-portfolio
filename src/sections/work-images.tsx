import { cn } from "@/lib/utils"

const projects = [
    {
        id: 1,
        title: "Project Alpha",
        category: "Branding",
        year: "2024",
        orientation: "vertical",
    },
    {
        id: 2,
        title: "Neon Horizon",
        category: "Web Design",
        year: "2023",
        orientation: "vertical",
    },
    {
        id: 3,
        title: "Abstract Form",
        category: "Art Direction",
        year: "2023",
        orientation: "horizontal",
    },
    {
        id: 4,
        title: "Minimalist UI",
        category: "Product Design",
        year: "2024",
        orientation: "horizontal",
    },
    {
        id: 5,
        title: "Experimental Type",
        category: "Typography",
        year: "2024",
        orientation: "vertical",
    },
]


import { RevealOnScroll } from "../components/reveal-onscroll"

function WorkImages() {
    return (
        <div className="container mx-auto px-4 ">
            <div className="mb-24 flex flex-col items-start pt-12 border-t border-black/10">
                <RevealOnScroll>
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                        Selected <br /> Works
                    </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={0.2}>
                    <p className="mt-8 max-w-xl text-lg md:text-xl font-medium text-gray-500 leading-relaxed">
                        A curation of projects emphasizing structure, typography, and negative space.
                    </p>
                </RevealOnScroll>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2 items-start auto-rows-min">
                {projects.map((project, index) => (
                    <RevealOnScroll
                        key={project.id}
                        delay={index * 0.1}
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
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors duration-500">
                                    <span className="text-sm font-medium uppercase tracking-[0.2em]">Image Mockup</span>
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
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    )
}

export default WorkImages