'use client'
import Skill from "./project-skills"


function Project({ title, description, URL, github, skill }: { title: string, description: string, URL: string, github?: string, skill: string[] }) {
    return (
        <div className="group">
            <a
                href={URL}
                target='_blank'
                rel="noopener noreferrer"
                className="block p-6 rounded-xl border min-h-[22rem] border-primary/20 
                    hover:-translate-y-1 hover:border-primary/60 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                    transition-all duration-300
                    no-underline text-inherit"
            >
                <h3 className="text-xl font-bold mb-2 group-hover:text-ball-primary/80 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {skill && skill.map((items) => (
                        <Skill key={items} tech={items} />
                    ))}
                </div>

                <div className="flex gap-2 items-center">
                    <span className="text-primary groupa-hover:text-primary/80 transition-colors my-4">
                        View Project →
                    </span>
                    {github && (
                        <a
                            href={github}
                            target='_blank'
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors my-4 
                                no-underline hover:no-underline"
                            onClick={(e) => e.stopPropagation()} // Prevent card click when clicking GitHub
                        >
                            github
                        </a>
                    )}
                </div>
            </a>
        </div>
    )
}

export default Project