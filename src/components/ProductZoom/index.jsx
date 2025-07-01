import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import {Button} from "@/components/ui/button"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
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
			<div className='slider w-[85%]'>
				<div className="flex gap-2">
						<div onClick = {() => goto(0)} className={`basis-1/4 item rounded-md h-[100px] overflow-hidden cursor-pointer group duration-1000 ease-in-out ${selectedIndex == 0 ?
						'opacity-100' : 'opacity-50'
						}`}>
							<img className="object-contain w-full transition-all group-hover:scale-105"  src='https://image.hm.com/assets/hm/08/5e/085ef0cfa78946ba6edc31c992e0f5401b80eb63.jpg?imwidth=1260' />
						</div>
						<div onClick = {() => goto(1)} className={`basis-1/4 item rounded-md  h-[100px] overflow-hidden cursor-pointer group duration-1000 ease-in-out ${selectedIndex == 1 ?
						'opacity-100' : 'opacity-50'
						}`}>
							<img className="object-contain w-full transition-all group-hover:scale-105" src='https://image.hm.com/assets/hm/7e/ba/7ebaa0221e28bbb8f8efbf19d06769337dfd6d54.jpg?imwidth=1260' />
						</div>

						<div onClick = {() => goto(2)} className={`basis-1/4 item rounded-md h-[100px] overflow-hidden cursor-pointer group duration-1000 ease-in-out ${selectedIndex == 2 ?
						'opacity-100' : 'opacity-50'
						}`}>
							<img className="object-contain w-full transition-all group-hover:scale-105" src='https://image.hm.com/assets/hm/57/f5/57f56e6bafb4b3b0c2162397ffce180277d6d817.jpg?imwidth=1260' />
						</div>

						<div onClick = {() => goto(3)} className={`basis-1/4 item rounded-md h-[100px] overflow-hidden cursor-pointer group duration-1000 ease-in-out ${selectedIndex == 3 ?
						'opacity-100' : 'opacity-50'
						}`}>
							<img className="object-contain w-full transition-all group-hover:scale-105" src='https://image.hm.com/content/dam/global_campaigns/season_02/men/ms32c2/MS32C2-CPD-CPM-1-swimwear-edit.jpg?imwidth=1870' />
						</div>
				</div>
			</div>

			<div className='zoomContainer w-[85%] h-auto'>
				<div className='overflow-hidden w-full relative' ref={emblaRef}>
					<div className='flex'>
						<div className="flex-[0_0_100%] px-2 h-[420px] flex items-center justify-center">
						<InnerImageZoom zoomType='hover'
							zoomScale={1.2} 
								zoomPreload={true}
							src="https://image.hm.com/assets/hm/00/a2/00a2764192f62ba31b2b0cedf15424cb3b5330ab.jpg?imwidth=1260" 
							className='max-h-full max-w-full object-contain' />
							</div>
								<div className='flex-[0_0_100%] px-2 h-[420px] flex items-center justify-center rounded-md overflow-hidden'>
						<InnerImageZoom zoomType='hover'
							zoomScale={1.2} 
								zoomPreload={true}
							src="https://image.hm.com/assets/hm/7c/13/7c1347cd21197a50fd69c9df4636bcb254094ba4.jpg?imwidth=1260" 
							className='max-h-full max-w-full object-contain' />
							</div>
							<div className='flex-[0_0_100%] px-2 h-[420px] flex items-center justify-center'>
						<InnerImageZoom zoomType='hover'
							zoomScale={1.2} 
								zoomPreload={true}
							src="https://image.hm.com/assets/hm/5c/b6/5cb6b6b4231f8e35bc091519200b8aee8a72e962.jpg?imwidth=1260" 
							className='max-h-full max-w-full object-contain' />
							</div>
							<div className='flex-[0_0_100%] px-2 h-[420px] flex items-center justify-center'>
						<InnerImageZoom zoomType='hover'
							zoomScale={1.2} 
								zoomPreload={true}
							src="https://image.hm.com/content/dam/global_campaigns/season_02/men/ms32c2/MS32C2-16x9-swimwear-edit.jpg?imwidth=1870" 
							className='max-h-full max-w-full object-contain' />
							</div>
					</div>
					<div className='absolute top-[50%] left-[5%]'>
						<Button variant="custom" size="icon" onClick={() => emblaApi && emblaApi.scrollPrev()}><IoIosArrowBack /></Button>
					</div>
					<div className='absolute top-[50%] right-[5%]'>
						<Button variant='custom' size="icon" onClick={() => emblaApi && emblaApi.scrollPrev()}><IoIosArrowForward /></Button>
					</div>
						
				</div>
			</div>
		</div>


	)
}

export default ProductZoom
