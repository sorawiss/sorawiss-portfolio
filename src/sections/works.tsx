const works = [
  {
    name: "CTL",
    img: "/works/CTL.png",
    url: "https://www.cathailog.com/"
  },
  {
    name: "evt",
    img: "/works/evt.svg",
    url: "https://www.everythai.com/"
  },
  {
    name: "nithan",
    img: "/works/nithan.png",
    url: "https://www.nithanherb.com/"
  },
  {
    name: "nsm",
    img: "/works/nsm.png",
    url: "https://www.nsm.co.th/"
  },
  {
    name: "wam-product",
    img: "/works/wam-product.png",
    url: "https://www.wamproduct.com/"
  },
  {
    name: "brandthink",
    img: "/works/brandthink.svg",
    url: "https://www.brandthink.me/"
  },
  {
    name: "driveddev",
    img: "/works/driveddev.svg",
    url: "https://www.drived.dev/"
  },
]

export default function Works() {
  return (
    <section id="selected-work" className="page-shell py-12 md:py-20">
      <div className="flex flex-col gap-8 border-y border-black/8 py-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Clients</p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.05em] text-ball-primary md:text-4xl">
              Brands and teams I&apos;ve worked with
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ball-primary/60">
            A selection of client work across product, interface, and web experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-7">
          {works.map((work) => (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              key={work.name}
              className="flex items-center justify-center py-3 transition-opacity duration-300 hover:opacity-65"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.img}
                alt={work.name}
                className="h-8 w-auto object-contain grayscale md:h-10"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
