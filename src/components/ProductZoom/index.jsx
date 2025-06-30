import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css';
import { Carousel, CarouselItem, CarouselContent, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
const ProductZoom = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const [selectedIndex, setSelectedIndex] = useState(0);
	useEffect(() => {
		if (!emblaApi) return
		const onSelect = () => {
			setSelectedIndex(emblaApi.selectedScrollSnap());
		}
		emblaApi.on('select', onSelect);
		onSelect();
		return () => {
			emblaApi.off('select', onSelect);
		};
	}, [emblaApi]);
	const goto = (index) => {
		if (emblaApi) {
			emblaApi.scrollTo(index);
		}
	}

	return (
		<div className='flex gap-3 flex-col-reverse'>
			<div className='slider w-[80%]'>
				<div className="flex gap-2">
						<div onClick = {() => goto(0)} className={`basis-1/4 item rounded-md overflow-hidden cursor-pointer group duration-1000 ease-in-out ${selectedIndex == 0 ?
						'opacity-100' : 'opacity-50'
						}`}>
							<img className="w-full transition-all group-hover:scale-105"  src='https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png' />
						</div>
						<div onClick = {() => goto(1)} className={`basis-1/4 item rounded-md overflow-hidden cursor-pointer group duration-1000 ease-in-out ${selectedIndex == 1 ?
						'opacity-100' : 'opacity-50'
						}`}>
							<img className="w-full transition-all group-hover:scale-105" src='https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-1.26-pro-max-2.png' />
						</div>

						<div onClick = {() => goto(2)} className={`basis-1/4 item rounded-md overflow-hidden cursor-pointer group duration-1000 ease-in-out ${selectedIndex == 2 ?
						'opacity-100' : 'opacity-50'
						}`}>
							<img className="w-full transition-all group-hover:scale-105" src='https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-6.png' />
						</div>

						<div onClick = {() => goto(3)} className={`basis-1/4 item rounded-md overflow-hidden cursor-pointer group duration-1000 ease-in-out ${selectedIndex == 3 ?
						'opacity-100' : 'opacity-50'
						}`}>
							<img className="w-full transition-all group-hover:scale-105" src='https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-7.png' />
						</div>
				</div>
			</div>

			<div className='zoomContainer w-[85%] h-auto'>
				<div className='overflow-hidden w-full' ref={emblaRef}>
					<div className='flex'>
						<div className="flex-[0_0_100%] px-2">
						<InnerImageZoom zoomType='hover'
							zoomScale={1.2} 
								zoomPreload={true}
							src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png" className='overflow-hidden' />
							</div>
								<div className='flex-[0_0_100%] px-2'>
						<InnerImageZoom zoomType='hover'
							zoomScale={1.2} 
								zoomPreload={true}
							src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-1.26-pro-max-2.png" className='overflow-hidden' />
							</div>
							<div className='flex-[0_0_100%] px-2'>
						<InnerImageZoom zoomType='hover'
							zoomScale={1.2} 
								zoomPreload={true}
							src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-1.26-pro-max-6.png" className='overflow-hidden' />
							</div>
							<div className='flex-[0_0_100%] px-2'>
						<InnerImageZoom zoomType='hover'
							zoomScale={1.2} 
								zoomPreload={true}
							src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max-7.png" className='overflow-hidden' />
							</div>
						</div>
						
				</div>
			</div>
		</div>


	)
}

export default ProductZoom
