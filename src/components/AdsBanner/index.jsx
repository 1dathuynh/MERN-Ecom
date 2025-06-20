import React from 'react'
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel"
import { Link } from 'react-router-dom'
const AdsBanner = () => {
	const banner = [
    {
      id: 1,
      name: "Phone",
      image: "/banner.png"
    },
    {
      id: 2,
      name: "Phone2",
      image: "/banner2.png"
    },
    {
      id: 3,
      name: "Phone3",
      image: "/banner3.png"
    },
    {
      id: 4,
      name: "Phone4",
      image: "/banner.png"
    },
  ]
	return (
		<div className='container mx-auto py-6'>
			<Carousel opts={{
          align: "start",
          loop: true,
        }}
        className="w-full">
					<CarouselContent className="-ml-4">
						{banner.map(item =>  (
							<CarouselItem key={item.id} className="pl4 basis-1/3">
									
                  <div className='overflow-hidden rounded-md group'>
                  <Link to={'#'}>
                    <img src={item.image} className="transition duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1" />
                  </Link>
                    
                  </div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
		</div>
	)
}

export default AdsBanner



