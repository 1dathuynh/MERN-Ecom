import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css';
import { Carousel,CarouselItem,CarouselContent, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
const ProductZoom = () => {
	return (
		<div className='flex gap-3 flex-col-reverse '>
			<div className='slider w-[80%]'>
				<Carousel opts={{
					loop:true,
				}}  className="w-full">
							<CarouselContent>
								<CarouselItem className="basis-1/4">
									<div className='item rounded-md overflow-hidden cursor-pointer group'>
										<img className="w-full transition-all group-hover:scale-105"  src='https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png' />
									</div>
								</CarouselItem>
								<CarouselItem className="basis-1/4">
									<div className='item rounded-md overflow-hidden cursor-pointer group'>
										<img className="w-full transition-all group-hover:scale-105" src='https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-2.png' />
									</div>
								</CarouselItem>
								<CarouselItem className="basis-1/4">
									<div className='item rounded-md overflow-hidden cursor-pointer group'>
										<img className="w-full transition-all group-hover:scale-105" src='https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-6.png' />
									</div>
								</CarouselItem>
								<CarouselItem className="basis-1/4">
									<div className='item rounded-md overflow-hidden cursor-pointer group'>
										<img className="w-full transition-all group-hover:scale-105" src='https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-7.png' />
									</div>
								</CarouselItem>
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext/>
				</Carousel>


			</div>
			<div className='zoomContainer w-[85%] h-auto'>
				<Carousel opts={{
					loop:false,
				}}  className="w-full">
					<CarouselContent>
						<CarouselItem>
						<InnerImageZoom zoomType='hover'
							zoomScale={1} 
								zoomPreload={true}
							src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png" className='overflow-hidden' />
							</CarouselItem>
								<CarouselItem>
						<InnerImageZoom zoomType='hover'
							zoomScale={1} 
								zoomPreload={true}
							src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-2.png" className='overflow-hidden' />
							</CarouselItem>
							<CarouselItem>
						<InnerImageZoom zoomType='hover'
							zoomScale={1} 
								zoomPreload={true}
							src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-6.png" className='overflow-hidden' />
							</CarouselItem>
							<CarouselItem>
						<InnerImageZoom zoomType='hover'
							zoomScale={1} 
								zoomPreload={true}
							src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-7.png" className='overflow-hidden' />
							</CarouselItem>
					</CarouselContent>
					<CarouselNext /> 
					
					
				</Carousel>
			</div>
		
		</div>


	)
}

export default ProductZoom
