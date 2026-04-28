'use client'

import Skill from "./project-skills"

function Project({
    title,
    description,
    URL,
    github,
    skill,
}: {
    title: string
    description: string
    URL: string
    github?: string
    skill: string[]
}) {
    return (
        <div className="group h-full">
            <a
                href={URL}
                target="_blank"
                rel="noopener noreferrer"
                className="clean-card flex h-full min-h-[23rem] flex-col justify-between p-6 md:p-7"
            >
                <div>
                    <span className="display-index">Project</span>
                    <h3 className="mt-4 max-w-md text-2xl font-medium leading-tight tracking-[-0.06em] text-ball-primary md:text-3xl">
                        {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-ball-primary/70">
                        {description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {skill.map((items) => (
                            <Skill key={items} tech={items} />
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/8 pt-5">
                    <span className="text-sm uppercase tracking-[0.16em] text-ball-primary">
                        View Project
                    </span>
                    <div className="flex items-center gap-4">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm uppercase tracking-[0.16em] text-ball-primary/52 transition-colors hover:text-ball-primary"
                                onClick={(e) => e.stopPropagation()}
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Project
