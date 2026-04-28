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
    <section id="selected-work" className="page-shell py-20 md:py-28">
      <div className="swiss-grid grid-rule pt-8">
        <div className="md:col-span-4">
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title mt-4">
            Client
            <span className="block text-ball-primary/25">index</span>
          </h2>
        </div>

        <div className="md:col-span-8">
          <div className="grid grid-cols-1 border border-black/10 bg-white/45 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work, index) => (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                key={work.name}
                className="group flex min-h-40 flex-col justify-between border-b border-r border-black/10 p-6 transition-colors duration-300 hover:bg-white"
              >
                <span className="display-index">{String(index + 1).padStart(2, "0")}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.img}
                  alt={work.name}
                  className="h-10 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0 md:h-12"
                />
                <span className="text-xs uppercase tracking-[0.22em] text-ball-primary/65">
                  {work.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
