import React, { useState } from 'react'
import QtyBox from '../QtyBox'
import { Button } from '../ui/button'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdCart, IoMdGitCompare } from 'react-icons/io'
import Rating from '../ui/rating'

const ProductDetailsComponent = () => {
	const [productActionIndex, setProductActionIndex] = useState(null);
	return (
		<div>
			<h1 className="text-[25px] font-semibold mb-2">Linen-blend dress</h1>
			<div className="flex items-center gap-3">
				<span className="text-gray-500 text-[15px]">Brands: <span className="font-[400] text-black opacity-75">H&M</span></span>
				<Rating max={5} value={4} />
				<span className="text-[15px] cursor-pointer">Review (5)</span>
			</div>
			<div className="flex items-center gap-4 mt-1">
				<span className="oldPrice line-through text-gray-500 text-[18px] font-semibold">
					$58.00
				</span>
				<span className="newPrice text-[#ff5252] text-[18px] font-semibold">
					$58.00
				</span>
				<span className="text-[14px]">Available In Stock: <span className="text-emerald-500 text-[14px] font-[600]">149 items</span></span>
			</div>
			{/* Description */}
			<p className="font-[14px] line-height-[25px] pr-10 mb-5">
				Loremis simply dummy text of the printing and typesetting ind
				ustry. Lorem Ipsum has been the industry's standard dummy text ever si
				nce the 1500s, when an unknown printer took a galley of type and scrambled it to
				make a type specimen book. It has survived not only five centuries, but also the leap into e
				lectronic typesetting, remaining essentially unchanged
				It was popularised in the 1960s with the release o
			</p>
			{/* Size */}
			<div className="flex items-center gap-3 py-2">
				<span className="text-[16px]">Size: </span>
				<div className="flex items-center gap-1">
					<Button className={`${productActionIndex == 0 ? 'border-2  opacity-80 border-[#ff5252]' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
					<Button className={`${productActionIndex == 1 ? 'border-2  opacity-80 border-[#ff5252]' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
					<Button className={`${productActionIndex == 2 ? 'border-2  opacity-80 border-[#ff5252]' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
					<Button className={`${productActionIndex == 3 ? 'border-2  opacity-80 border-[#ff5252]' : ''}`} onClick={() => setProductActionIndex(3)}>XL</Button>
				</div>
			</div>
			<p className="text-[14px] mt-5 mb-5 text-[#000]">Free Shipping (Est. Delivery Time 2-3 Days)</p>

			{/* QtyBox */}
			<div className="flex items-center gap-4 py-3">
				<div className="qtyBoxWrapper w-[100px]">
					<QtyBox />
				</div>

				<Button variant="btnOrg" className="flex gap-2"><IoMdCart />Add to Cart</Button>
			</div>

			<div className="flex items-center gap-4 mt-4">
				<span className="flex items-center gap-2 text-[15px] text-gray-700 link font-semibold"><FaRegHeart />Add to Wishlist</span>
				<span className="flex items-center gap-2 text-[15px] text-gray-700 link font-semibold"><IoMdGitCompare />Add to Compare</span>
			</div>
		</div>
	)
}

export default ProductDetailsComponent
