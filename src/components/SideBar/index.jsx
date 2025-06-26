import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Collapse } from "react-collapse"
import { FaAngleDown } from "react-icons/fa"
import { FaAngleUp } from "react-icons/fa"
import { Button } from "../ui/button"
import { useState } from "react"
import Rating from "@/components/ui/rating"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './style.css'
const SideBar = () => {
	const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true)
	const [isOpenCategoryAvail, setIsOpenCategoryAvail] = useState(true)
	const [isOpenCategorySizeFilter, setIsOpenCategorySizeFilter] = useState(true)

	return (

		<aside className='sidebar py-5'>
			<div className='box'>
				<div className='mb-3 text-[18px] font-[600] flex items-center justify-between'>Shop by category
					<Button variant="secondary" size="icon" className="size-8 cursor-pointer" onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
						{isOpenCategoryFilter ? (
							<FaAngleUp/>
						) : (	<FaAngleDown />)}
					</Button>
				</div>
				<Collapse isOpened={isOpenCategoryFilter}>
					<div className='scroll px-4 relative -left-[13px] max-h-[200px] overflow-y-scroll overflow-x-hidden '>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="fashion" />
						<Label htmlFor="fashion">Fashion</Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="electronics" />
						<Label htmlFor="electronics">Electronics</Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="bags" />
						<Label htmlFor="bags">Bags</Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="footwear" />
						<Label htmlFor="footwear">Footwear</Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="groceries" />
						<Label htmlFor="groceries">Groceries</Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="beauty" />
						<Label htmlFor="beauty">Beauty</Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="wellness" />
						<Label htmlFor="wellness">Wellness</Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="jewellery" />
						<Label htmlFor="jewellery">Jewellery</Label>
					</div>


				</div>
				</Collapse>
			</div>
			<div className='box'>
				<div className='mb-3 text-[18px] font-[600] flex items-center justify-between w-full'>Availability
					<Button variant="secondary" size="icon" className="ml-10 size-8 cursor-pointer" onClick={() => setIsOpenCategoryAvail(!isOpenCategoryAvail)}>
						{isOpenCategoryAvail ? (
							<FaAngleUp/>
						) : (	<FaAngleDown />)}
					</Button>
				</div>
				<Collapse isOpened={isOpenCategoryAvail}>
					<div className='scroll px-4 relative -left-[13px] max-h-[200px] overflow-y-scroll overflow-x-hidden '>
						
						<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="available" />
						<Label htmlFor="available">Available <span>(17)</span></Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="available" />
						<Label htmlFor="available">In Stock <span>(10)</span></Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="available" />
						<Label htmlFor="available">Not Available <span>(17)</span></Label>
					</div>


				</div>
				</Collapse>
			</div>
			<div className='box mt-3'>
				<div className='mb-3 text-[18px] font-[600] flex items-center justify-between w-full'>Availability
					<Button variant="secondary" size="icon" className="ml-10 size-8 cursor-pointer" onClick={() => setIsOpenCategorySizeFilter(!isOpenCategorySizeFilter)}>
						{isOpenCategorySizeFilter ? (
							<FaAngleUp/>
						) : (	<FaAngleDown />)}
					</Button>
				</div>
				<Collapse isOpened={isOpenCategorySizeFilter}>
					<div className='scroll px-4 relative -left-[13px] max-h-[200px] overflow-y-scroll overflow-x-hidden '>
						
						<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="available" />
						<Label htmlFor="available">Small <span>(17)</span></Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="available" />
						<Label htmlFor="available">Medium <span>(10)</span></Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="available" />
						<Label htmlFor="available">Large <span>(17)</span></Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="available" />
						<Label htmlFor="available">XL <span>(17)</span></Label>
					</div>
					<div className="flex space-x-2 items-center w-full mb-5">
							<Checkbox id="available" />
						<Label htmlFor="available">XXL <span>(0)</span></Label>
					</div>


				</div>
				</Collapse>
			</div>
			<div className="box mt-4">
				<div className='mb-3 text-[18px] font-[600] flex items-center 
				justify-between w-full'>
				Size
				</div>
				<RangeSlider />
				<div className="flex pt-4 pb-2 priceRange">
					<span className="text-[13px]">From: <strong className="text-dark">Rs: {100}</strong></span>
					<span className="text-[13px] ml-auto">From: <strong className="text-dark">Rs: {200}</strong></span>
				</div>
			</div>
			<div className="box mt-4">
				<div className='mb-3 text-[18px] font-[600] flex items-center 
				justify-between w-full'>
				Rating
				</div>
				<Rating max={5} value={5} />
				<Rating max={5} value={4} />
				<Rating max={5} value={3} />
				<Rating max={5} value={2} />
				<Rating max={5} value={1} />
				
			</div>
		</aside>
	)
}

export default SideBar