function Skill( {tech}: {tech: string} ) {
    return (
        <span
            className="rounded-full border border-black/8 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.14em] text-ball-primary/62 transition-colors duration-300 hover:text-ball-primary"
        >
            {tech}
        </span>
    )
}

export default Skill
