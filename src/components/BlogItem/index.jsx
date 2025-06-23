import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
const BlogItem = () => {
	return (
		<div className='blogItem group'>
			<div className='imgWrapper relative cursor-pointer'>
				<img className='w-full rounded-md overflow-hidden transition-all group-hover:scale-105 group-hover:rotate-1' 
				src='https://serviceapi.spicezgold.com/download/1741758867669_7-6.jpg'
				alt="blog image"
				/>
				<span className='flex items-center justify-center gap-1 text-[11px] font-semibold text-white absolute bg-[#ff5353] rounded-md p-1 bottom-[10px] right-[15px] z-50'>
					<IoMdTime className='text-[15px]' />20 April 2025
				</span>
			</div>
			<div className='info py-4'>
				<h2 className='text-[15px] font-[600] text-black'><Link  to={'#'} className='link'>What is Lorem !</Link></h2>
				<p className='text-[13px] font-[400] text-black/80 mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p>
					<Link className='font-semibold text-[14px] flex items-center gap-1 link' to={"#"}>Read More <IoIosArrowForward /></Link>
			</div>
		</div>
	)
}

export default BlogItem
