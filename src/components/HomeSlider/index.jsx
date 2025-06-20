import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const HomeSlider = () => {
	const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))
	const handleMouseEnter = () => {
    const pluginInstance = plugin.current;
    pluginInstance?.stop?.(); // dừng
  };

  const handleMouseLeave = () => {
    const pluginInstance = plugin.current;
    pluginInstance?.play?.(); // chạy lại
  };
	
	return (
		
		<div className='container py-3 '>
				<Carousel plugins={[plugin.current]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full">
				<CarouselContent className="h-[100%]">
					<CarouselItem className=""><img className='w-full rounded-3xl overflow-hidden' src='https://theme.hstatic.net/200000174405/1001111911/14/slideshow_1_master.jpg?v=2338'/> </CarouselItem>
					<CarouselItem><img className='w-full rounded-3xl overflow-hidden' src='https://theme.hstatic.net/200000174405/1001111911/14/slideshow_1_master.jpg?v=2338' /></CarouselItem>
					<CarouselItem><img className='w-full rounded-3xl overflow-hidden' src='https://theme.hstatic.net/200000174405/1001111911/14/slideshow_3.jpg?v=2338' /></CarouselItem>
					<CarouselItem><img className='w-full rounded-3xl overflow-hidden' src='https://theme.hstatic.net/200000174405/1001111911/14/slideshow_4.jpg?v=2338' /></CarouselItem>
					<CarouselItem><img className='w-full rounded-3xl overflow-hidden' src='https://theme.hstatic.net/200000174405/1001111911/14/slideshow_5.jpg?v=2338' /></CarouselItem>
					<CarouselItem><img className='w-full rounded-3xl overflow-hidden' src='https://theme.hstatic.net/200000174405/1001111911/14/slideshow_7.jpg?v=2338' /></CarouselItem>

				</CarouselContent>
				<CarouselPrevious className="hidden md:flex" />
				<CarouselNext className="hidden md:flex"/>
			</Carousel>
		</div>
	)
}

export default HomeSlider
