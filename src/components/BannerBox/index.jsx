import { Link } from 'react-router-dom'
const BannerBox = (props) => {
	return (
		<div className='relative bannerBox group h-[210px] 
			w-full rounded-md overflow-hidden'>
			<img className='w-full transition-all duration-200 
			group-hover:scale-105' src={props.image} />
			<div className={`info absolute p-5 top-0 ${props.info == 'left' ? 'left-0' : "right-0"} w-[50%] z-50 flex items-center flex-col gap-2 ${props.info == 'left' ? '' : 'pl-10'}`}>
				<h2 className='text-[20px] font-[600]'>Buy Apple Iphone</h2>
				<span className='text-[23px] text-[#ff5353] font-[600] w-full'>$129</span>
				<div className='w-full'>
					<Link className='text-[16px] text-[#ff5353] font-[600] link' to='/'>SHOP NOW</Link>
				</div>
			</div>
		</div>
	)
}

export default BannerBox
