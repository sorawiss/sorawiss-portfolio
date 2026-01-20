import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const works = [
  {
    name: "CTL",
    img: "/works/CTL.png",
  },
  {
    name: "evt",
    img: "/works/evt.svg",
  },
  {
    name: "nithan",
    img: "/works/nithan.png",
  },
  {
    name: "nsm",
    img: "/works/nsm.png",
  },
  {
    name: "wam-product",
    img: "/works/wam-product.png",
  },
  {
    name: "brandthink",
    img: "/works/brandthink.svg",
  },
  {
    name: "driveddev",
    img: "/works/driveddev.svg",
  },
]

export default function Works() {
  return (
    <div className="container relative flex w-full flex-col items-center justify-center overflow-hidden py-12">
      <div className="mb-24 text-center">
        <h1 className="text-4xl font-bold">My Works</h1>
      </div>

      <Marquee pauseOnHover className="[--duration:30s]">
        {works.map((work) => (
          <div key={work.name} className="mx-8 flex items-center justify-center opacity-50 hover:opacity-100 
          ransition-opacity duration-300 grayscale hover:grayscale-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={work.img}
              alt={work.name}
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-ball-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-ball-white"></div>
    </div>
  )
}
