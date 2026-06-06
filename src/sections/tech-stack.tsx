import { RevealOnScroll } from "../components/reveal-onscroll";

const techStack = [
  {
    name: "Next.js",
    logo: "https://cdn.simpleicons.org/nextdotjs/111111",
  },
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react/111111",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.simpleicons.org/typescript/111111",
  },
  {
    name: "Prisma",
    logo: "https://cdn.simpleicons.org/prisma/111111",
  },
  {
    name: "Neon",
    logo: "https://cdn.simpleicons.org/neon/111111",
  },
  {
    name: "Supabase",
    logo: "https://cdn.simpleicons.org/supabase/111111",
  },
  {
    name: "Astro",
    logo: "https://cdn.simpleicons.org/astro/111111",
  },
  {
    name: "Cloudflare",
    logo: "https://cdn.simpleicons.org/cloudflare/111111",
  },
  {
    name: "Figma",
    logo: "https://cdn.simpleicons.org/figma/111111",
  },
  {
    name: "GitHub",
    logo: "https://cdn.simpleicons.org/github/111111",
  },
  {
    name: "Biome",
    logo: "https://cdn.simpleicons.org/biome/111111",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.simpleicons.org/tailwindcss/111111",
  },
  {
    name: "Vercel",
    logo: "https://cdn.simpleicons.org/vercel/111111",
  },
  {
    name: "Bun",
    logo: "https://cdn.simpleicons.org/bun/111111",
  },
  {
    name: "Framer Motion",
    logo: "https://cdn.simpleicons.org/framer/111111",
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="page-shell py-12 md:py-20">
      <div className="grid gap-10 border-y border-black/8 py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <RevealOnScroll>
          <p className="section-kicker">Stack</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="grid grid-cols-3 border-l border-t border-black/8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex aspect-square flex-col items-center justify-center gap-3 border-b border-r border-black/8 bg-ball-white px-2 transition-colors duration-300 hover:bg-white"
                title={tech.name}
                aria-label={tech.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-8 w-8 object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-10 md:w-10"
                />
                <p className="max-w-full text-center font-mono text-[0.62rem] uppercase leading-none tracking-[0.14em] text-ball-primary/48 transition-colors duration-300 group-hover:text-ball-primary/70">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
