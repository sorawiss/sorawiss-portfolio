function Skill( {tech}: {tech: string} ) {
    return (
        <span
            className="border border-black/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-ball-primary/65 transition-colors duration-300 hover:border-black hover:text-ball-primary"
        >
            {tech}
        </span>
    )
}

export default Skill
