import React, { useState } from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { GoTriangleDown } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { IoCloseSharp } from 'react-icons/io5'
import Rating from '../ui/rating'
const CartItem = (prop) => {
	const [selectedSize, setSelectedSize] = useState(prop.size);
	const [selectedQuantity, setSelectedQuantity] = useState(prop.quantity)
	const handleSelectSize = (value) => {
			setSelectedSize(value)
	}
	const handleSelectQuantity = (value) => {
			setSelectedQuantity(value)
	}

	return (
		<div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b boder-[rbga(0,0,0, 0.1)]'>
			<div className='img w-[15%] rounded-md overflow-hidden'>
				<Link to='/productDetails/123123' className='group'>
					<img className='w-full group-hover:scale-105' src='https://image.hm.com/assets/hm/e3/f9/e3f94bb0dd21878c3a0a07c32adc1bab16847a1e.jpg?imwidth=1260' />
				</Link>
			</div>
			<div className='info w-[85%] relative'>
				<IoCloseSharp className='cursor-pointer absolute top-[0px] right-[15px] link transition-all text-[22px]' />
				<span className='text-[13px]'>Colour:Cream</span>
				<h3 className='text-[15px]'>
					<Link to='/productDetails/21312'>Textured jersey top</Link>
				</h3>
				<Rating value={5} max={5} />

				<div className='flex items-center gap-4 mt-2'>
					<div className='relative'>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<span className='flex items-center cursor-pointer
																justify-center bg-[#f1f1f1] text-[12px] 
																font-[600] py-1 rounded-md'>
									Size: {selectedSize} <GoTriangleDown />
								</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent className=''>
								<DropdownMenuItem onSelect={() => handleSelectSize('S')}>S</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectSize('M')}>M</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectSize('L')}>L</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectSize('XL')}>XL</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectSize('XXL')}>2XL</DropdownMenuItem>

							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<div>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<span className='flex items-center cursor-pointer
												 justify-center bg-[#f1f1f1] text-[12px] 
												 font-[600] py-1 rounded-md'>
									Quantity: {selectedQuantity} <GoTriangleDown />
								</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent className=''>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(1)}>1</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(2)}>2</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(3)}>3</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(4)}>4</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(5)}>5</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(6)}>6</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(7)}>7</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(8)}>8</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(9)}>9</DropdownMenuItem>
								<DropdownMenuItem onSelect={() => handleSelectQuantity(10)}>10</DropdownMenuItem>

							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>

				<div className='flex items-center gap-4 mt-2'>
					<span className='newPrice text-[#000] text-[14px] font-[600]'>$58.00</span>
					<span className='oldPrice line-through text-gray-500 text-[14px] font-semibold'>$58.00</span>
					<span className='newPrice text-[#ff5252] text-[14px] font-[600]'>55% OFF</span>
				</div>
			</div>

		</div>
	)
}

export default CartItem
