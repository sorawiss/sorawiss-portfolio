import { cn } from "@/lib/utils"

const projects = [
    {
        id: 1,
        title: "Project Alpha",
        category: "Branding",
        year: "2024",
    },
    {
        id: 2,
        title: "Neon Horizon",
        category: "Web Design",
        year: "2023",
    },
    {
        id: 3,
        title: "Abstract Form",
        category: "Art Direction",
        year: "2023",
    },
    {
        id: 4,
        title: "Minimalist UI",
        category: "Product Design",
        year: "2024",
    },
]


function WorkImages() {
    return (

        <div className="container mx-auto px-4 py-24">
            <div className="mb-16 flex flex-col items-start border-t-2 border-black pt-8">
                <h2 className="text-6xl font-black uppercase tracking-tighter md:text-8xl">Selected Works</h2>
                <p className="mt-4 max-w-xl text-lg text-gray-600">
                    A curation of projects emphasizing structure, typography, and negative space.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
                {projects.map((project, index) => (
                    <div key={project.id} className={cn("group flex flex-col gap-4", index % 2 === 1 ? "md:mt-24" : "")}>
                        <div className="relative aspect-4/5 w-full overflow-hidden bg-gray-100 transition-colors duration-500 group-hover:bg-gray-200">
                            {/* Mockup Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <span className="text-sm font-medium uppercase tracking-widest">Image Mockup</span>
                            </div>
                        </div>

                        <div className="flex flex-col border-t border-gray-300 pt-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-3xl font-bold uppercase leading-none tracking-tight group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-sm font-mono text-gray-500">{project.year}</span>
                            </div>
                            <span className="mt-1 text-sm font-medium uppercase tracking-wide text-gray-500">
                                {project.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkImages