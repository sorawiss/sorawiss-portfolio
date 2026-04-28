import Image from "next/image"
import { RevealOnScroll } from "../components/reveal-onscroll"

const featured = {
    title: "Nithan Herb",
    category: "UI Design, Frontend Development",
    year: "2025",
    image: "/project-images/nithan-herb.png",
    url: "https://nithanherb.com/",
}

const supporting = [
    {
        id: 1,
        title: "Maibood",
        category: "UX/UI Design, Full-Stack Development",
        year: "2024",
        image: "/project-images/maibood-1.png",
        url: "https://www.figma.com/design/t0tCBSvqU1hkuPkaxO2tka/MaiBood?m=auto&t=6xWNBphezdei6c2o-1",
    },
    {
        id: 2,
        title: "CPAXT",
        category: "UX/UI Design, Full-Stack Development",
        year: "2025",
        image: "/project-images/maibood-2.png",
        url: "https://maibood.sorawiss.com/",
    },
    {
        id: 3,
        title: "DrivedDev",
        category: "UX/UI Design, Full-Stack Development",
        year: "2025",
        image: "/project-images/driveddev.png",
        url: "https://www.drived.dev/",
    },
]

function WorkImages() {
    return (
        <section className="page-shell py-20 md:py-28">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="section-kicker">Gallery</p>
                    <h2 className="mt-3 text-4xl font-medium tracking-[-0.07em] text-ball-primary md:text-6xl">
                        Visual work
                    </h2>
                </div>
                <p className="max-w-md text-sm leading-7 text-ball-primary/60">
                    A quieter presentation of selected interfaces and product visuals.
                </p>
            </div>

            <RevealOnScroll variant="fadeInUp">
                <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block space-y-5"
                >
                    <div className="clean-card relative aspect-[16/9] overflow-hidden">
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-[1.02]"
                            sizes="100vw"
                        />
                    </div>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-3xl font-medium tracking-[-0.06em] text-ball-primary md:text-5xl">
                                {featured.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-ball-primary/58">
                                {featured.category}
                            </p>
                        </div>
                        <span className="display-index">{featured.year}</span>
                    </div>
                </a>
            </RevealOnScroll>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {supporting.map((project, index) => (
                    <RevealOnScroll key={project.id} delay={0.1 + index * 0.08}>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block space-y-4"
                        >
                            <div className="clean-card relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-[-0.05em] text-ball-primary">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-ball-primary/58">
                                        {project.category}
                                    </p>
                                </div>
                                <span className="display-index">{project.year}</span>
                            </div>
                        </a>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    )
}

export default WorkImages
