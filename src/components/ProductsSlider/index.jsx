import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ProductsItem from '../ProductsItem'
const ProductsSlider = ({ props }) => {
	const basisStyle = {
		flexBasis: `${100/props}%`
	}
	return (
		<div className='py-5'>
		<Carousel opts={{
          align: "start",
          loop: true,
    }} className='w-full'>
			<CarouselContent className="p-4 -ml-4 -mr-4'">
				<CarouselItem style={basisStyle} className={`pl-4`}>
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
					<ProductsItem />
				</CarouselItem>
				<CarouselItem style={basisStyle} className={`pl-4`} >
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
