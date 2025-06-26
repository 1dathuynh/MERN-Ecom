import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
const AdsBannerV2 = ({item}) => {
  const [api, setApi] = useState()
	 const banner = [
    {
      id: 1,
      name: "Phone",
      image: "/placeholder.svg?height=400&width=800",
      title: "iPhone 15 Pro Max",
      link: "#",
    },
    {
      id: 2,
      name: "Phone2",
      image: "/placeholder.svg?height=400&width=800",
      title: "Samsung Galaxy S24",
      link: "#",
    },
    {
      id: 3,
      name: "Phone3",
      image: "/placeholder.svg?height=400&width=800",
      title: "Google Pixel 8 Pro",
      link: "#",
    },
    {
      id: 4,
      name: "Phone4",
      image: "/placeholder.svg?height=400&width=800",
      title: "OnePlus 12",
      link: "#",
    },
  ]

   const basis = `basis-1/${item}`
   useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [api])
  
	return (
		<div className='container mx-auto py-6'>
			<Carousel opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full">
        <CarouselContent className="-ml-2 flex">
          {banner.map((bannerItem) => (
            <CarouselItem key={bannerItem.id} className={`pl-2 ${basis}`}>
              <div className='relative overflow-hidden rounded-md group shadow-lg'>
                <Link to={bannerItem.link}>
                  <div className='relative h-[300px] overflow-hidden'>
                    <img
                      src={bannerItem.image || "/placeholder.svg"}
                      alt={bannerItem.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                    {/* Title */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold drop-shadow-lg">{bannerItem.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>

            </CarouselItem>
          ))}
				</CarouselContent>
					
				</Carousel>
		</div>
	)
}

export default AdsBannerV2



