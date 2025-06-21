import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ProductsItem from '../ProductsItem'
const product = [
	{
		id: 1,
		name: "SDSAD",
		image: ""
	},
]
const ProductsSlider = ({ props }) => {
	return (
		<div className='py-5'>
		<Carousel className=''>
			<CarouselContent className="p-4 -ml-4 -mr-4'">
				<CarouselItem className="basis-1/6">
					<ProductsItem />
				</CarouselItem>
				<CarouselItem className="basis-1/6">
					<ProductsItem />
				</CarouselItem>
				<CarouselItem className="basis-1/6">
					<ProductsItem />
				</CarouselItem>
				<CarouselItem className="basis-1/6">
					<ProductsItem />
				</CarouselItem>
				<CarouselItem className="basis-1/6">
					<ProductsItem />
				</CarouselItem>
				<CarouselItem className="basis-1/6">
					<ProductsItem />
				</CarouselItem>
				<CarouselItem className="basis-1/6">
					<ProductsItem />
				</CarouselItem>

			</CarouselContent>
			<CarouselPrevious className="hidden md:flex" />
			<CarouselNext className="hidden md:flex" />
		</Carousel>
			</div>
	)
}

export default ProductsSlider
