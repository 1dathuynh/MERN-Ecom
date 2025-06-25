

import React, { useEffect, useState } from "react"
import fade from "embla-carousel-fade"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"

const slides = [
  {
    id: 1,
    image: "https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg",
    title: "Big Saving Days Sale",
    subtitle: "Women Solid Round Green T-Shirt",
    price: "$9.00",
  },
  {
    id: 2,
    image: "/IP16ProMaxBanner.jpg",
    title: "Buy iPhone 16 Pro Max",
    subtitle: "1TB",
    price: "$99.00",
  },
]

export default function HomeSliderV2() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const plugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: true }))
  const handleMouseEnter = () => {
    const pluginInstance = plugin.current;
    pluginInstance?.stop?.(); // dừng
  };

  const handleMouseLeave = () => {
    const pluginInstance = plugin.current;
    pluginInstance?.play?.(); // chạy lại
  };

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => api.off("select", onSelect)
  }, [api])

  return (
    <Carousel onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} opts={{loop:true}} setApi={setApi} plugins={[fade(), plugin.current]}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={slide.id}>
            <div className="item w-full rounded-md overflow-hidden relative">
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-[450px] object-cover"
              />
              <div
                className={`info absolute top-0 ${
                  current === index ? "right-0 opacity-100" : "-right-[100%] opacity-0"
                } w-[50%] h-full flex items-center flex-col z-50 p-8 justify-center transition-all duration-800 ease-in-out bg-white/30 backdrop-blur-sm`}
              >
                <h4 className={`text-[18px] font-[500] text-left w-full mb-3 relative duration-1000 ${current === index ? "right-0 opacity-100" : '-right-[100%] opacity-0'}`}>{slide.title}</h4>
                <h2 className={`text-[35px] font-[700] w-full relative duration-1200 ${current === index ? "right-0 opacity-100" : '-right-[100%] opacity-0'}`}>{slide.subtitle}</h2>
                <h3 className={`text-[18px] flex items-center gap-3 font-semibold w-full text-left mt-3 mb-3 relative duration-1500 ${current === index ? "right-0 opacity-100" : '-right-[100%] opacity-0'}`}>
                  Starting At Only{" "}
                  <span className="text-[#ff5353] text-[30px] font-[750]">{slide.price}</span>
                </h3>
                <div className="w-full">
                  <Button className={`relative duration-1300 ${current === index ? "bottom-0 opacity-100" : '-bottom-[200%] opacity-0'}`} variant="btnOrg" size="lg">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
