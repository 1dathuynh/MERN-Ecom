import React, { useContext } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import Rating from '../ui/rating'
import {Button}  from "@/components/ui/button"
import { FaRegHeart } from "react-icons/fa"
import { GoGitCompare } from "react-icons/go";
import { MdZoomOutMap } from "react-icons/md";
import { MdOutlineShoppingCart } from 'react-icons/md'
import { MyContext } from '../../App'

const ProductsItemListView = () => {
	const context = useContext(MyContext)
	return (
		<div className='productItem flex items-center rounded-md shadow-xl' >
			<div className='imgwrapper w-[25%] group relative overflow-hidden border-r-1 border-[rgba(0, 0, 0, 0.8)]'>
			<Link to="/">
				<div className='w-[100%] h-[250px] relative rounded-md overflow-hidden'>
					<img src='https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg'
					className='w-full rounded-md object-cover' />
					<img src='https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg' 
					className='w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ' />
				</div>
				</Link>
				<span className='absolute rounded-lg top-[10px] z-50 left-[10px] p-1 flex text-[12px] font-semibold items-center bg-[#ff5353] text-white'>
				 10%
				</span>
				<div className='actions top-[-200px] opacity-0 group-hover:opacity-100 absolute transition-all duration-400 ease-in-out group-hover:top-[15px] flex-col right-[15px] z-50 flex items-center gap-2 w-[45px] '>
					<Button variant='customIconProductItem' className="min-w-[35px] h-[35px] rounded-full flex items-center justify-center">
						<FaRegHeart className='text-18px' />
					</Button>
					<Button variant='customIconProductItem' className="min-w-[35px] h-[35px] rounded-full flex items-center justify-center ">
						<GoGitCompare className='text-18px' />
					</Button>
					<Button onClick = {() => context.setIsOpen(true)} variant='customIconProductItem' className="min-w-[35px] h-[35px] rounded-full flex items-center justify-center">
						<MdZoomOutMap className='text-18px' />
					</Button>
				</div>
			</div>
			<div className='info p-3 py-5 px-8 w-[75%]'>
			<Link className='link transition-all' to="#">
				<h6 className='text-[13px]'>Solent Green</h6>
				</Link>
				
				<h3 className='text-[18px] title mt-3 font-semibold mb-2 text-[rgba(0, 0, 0, 0.9)]'><Link className='link transition-all' to="#">Siril. ddđ jdasd sadjadja đá  djsadjasd sasajdadjassda </Link></h3>
				<p className='text-[14px] mb-3'>orem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta sodales bibendum. D</p>
				<Rating max={5} value={3}  />
				
				<div className='flex items-center mt-2 gap-4'>
					<span className='line-through text-gray-500 text-[15px] font-semibold'>$58.00</span>
					<span className='text-[#ff5353] text-[15px] font-bold'>$58.00</span>
				</div>
				<div className='mt-3'>
					<Button className="flex gap-2" variant='btnOrg'><MdOutlineShoppingCart className='text-[16px]' />Add to Cart</Button>
				</div>
				
			</div>
		</div>
	)
}

export default ProductsItemListView
