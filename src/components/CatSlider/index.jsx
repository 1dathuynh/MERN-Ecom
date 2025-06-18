import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const HomeCatSlider = () => {
	return (
			<div className="container">
				<Carousel opts={{ align: "start", loop: true, }} className="w-full">
					<CarouselContent className="">
						<CarouselItem className=" basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className='item py-7 bg-white rounded-sm flex items-center justify-center flex-col'>
								<img src='https://serviceapi.spicezgold.com/download/1748409729550_fash.png' className='w-[60px]' />
								<h3 className='text-[18px] font-semibold'>Fashion</h3>
							</div>
						</CarouselItem>	
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
	)
}

export default HomeCatSlider
