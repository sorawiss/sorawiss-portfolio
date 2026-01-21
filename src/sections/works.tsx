import { Marquee } from "@/components/ui/marquee"

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
    url: "https://www.driveddev.com/"
  },
]


export default function Works() {
  return (
    <div id="projects" className="container relative flex w-full flex-col items-center justify-center overflow-hidden py-12">
      <div className="mb-4 text-center">
        <h2 className="text-4xl font-bold">Works</h2>
      </div>

      <Marquee pauseOnHover className="[--duration:30s] ">
        {works.map((work) => (
          <a href={work.url} target="_blank" rel="noopener noreferrer" key={work.name} className="mx-4 md:mx-8 flex items-center justify-center opacity-50 hover:opacity-100 
          transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={work.img}
              alt={work.name}
              className="h-10 md:h-16 w-auto object-contain"
            />
          </a>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/3 bg-gradient-to-r from-ball-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/3 bg-gradient-to-l from-ball-white"></div>
    </div>
  )
}
